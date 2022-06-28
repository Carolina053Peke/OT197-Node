process.env.NODE_ENV = 'development';

let db = require('../models');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

const userLogin = {
    email: "alanalexis97@hotmail.com",
    password: "Password123!"
}

const organizations = [
    {
        email: "alexis97@hotmail.com",
        image: "Image",
        name: "organization 1"
    },
    {
        email: "aa7@hotmail.com",
        image: "Image",
        name: "organization 2"
    }, {
        image: ''
    }
];

let token;

describe('Organization', () => {
    /**
    * Delete organizations in the table
    */
    before(async () => { //Before each test we empty the database
        await db.Organization.destroy({ truncate: true });
    });

    /*
    * Test the /POST auth user
    */
    describe('/POST GET JWT', () => {
        it('Test 1- it should POST GET TO THE JWT', async () => {
            await chai.request(server)
                .post('/users/auth/login')
                .send(userLogin)
                .then((res) => {
                    token = res.body.token;
                    res.should.have.status(200);
                    res.body.should.have.property("token");
                    /*       res.body.should.have.property("user").eql("roleId"); */
                });
        });



    });

    /* GET ALL ORGANIZATION */
    describe('/GET organization', () => {
        it('Test 2- it should GET all the books', async () => {
            await chai.request(server)
                .get('/organization/public')
                .set("Authorization", token)
                .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("organizations");
                });

        });
    });

    /* POST CREATE ORGANIZATION */
    describe('/POST organization', () => {
        it('Test 3- it should GET all the books', async () => {
            await chai.request(server)
                .post('/organization/public')
                .set("Authorization", token)
                .send(organizations[0])
                .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("message").eql('Organization created');
                });
        });
    });

    /* PUT ORGANIZATION with TOKEN*/
    describe('/PUT/:id organization', () => {
        it('Test 4- it should PUT ID organization', async () => {
            const count = await db.Organization.max('id', { attributes: ['id'] })
            await chai.request(server)
                .put(`/organization/public/${count}`)
                .set("Authorization", token)
                .send(organizations[1])
                .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("message").eql('Organization Updated');
                })
         });
    });

    /* PUT ORGANIZATION no TOKEN*/
    describe('/PUT/:id no token organization', () => {
        it('Test 5- it should PUT ID organization no token', async () => {
            const count = await db.Organization.max('id', { attributes: ['id'] })
            await chai.request(server)
                .put(`/organization/public/${count}`)
                .send(organizations[1])
                .then((res) => {
                    res.should.have.status(401);
                    res.body.should.have.property("message").eql('Access denied');
                })
        });
    });

    /* POST CREATE ORGANIZATION NO TOKEN */
    describe('/POST organization no token', () => {
        it('Test 6- it should GET all the books', async () => {
            await chai.request(server)
                .post('/organization/public')
                .send(organizations[0])
                .then((res) => {
                    res.should.have.status(401);
                    res.body.should.have.property("message").eql('Access denied');
                });
        });
    });

    /* PUT ORGANIZATION ID inexistente*/
    describe('/PUT/:id ID INEXISTENTE', () => {
        it('Test 7- it should PUT ID organization INEXISTENT', async () => {
            const count = await db.Organization.max('id', { attributes: ['id'] })
            await chai.request(server)
                .put(`/organization/public/${count + 1}`)
                .set("Authorization", token)
                .send(organizations[1])
                .then((res) => {
                    res.should.have.status(404);
                    res.body.should.have.property("message").eql('Organization Not found');
                })
        });
    });

    /* CREATE ORGANIZATION WITH ATTRIBUTES REQUIRED IN NULL*/
    describe('/POST organization WITH ATTRIBUTES REQUIRED IN NULL', async () => {
        it('Test 8- it should POST ID organization WITH ATTRIBUTES REQUIRED IN NULL', async () => {
            await chai.request(server)
                .post(`/organization/public`)
                .set("Authorization", token)
                .send(organizations[2])
                .then((res) => {
                    res.should.have.status(400);
                    res.body.should.have.property("message").eql('The fields name, image and email are required!');
                })
        });
    });

    /* CREATE ORGANIZATION WITH ATTRIBUTES REQUIRED IN NULL*/
    describe('/PUT organization WITH ATTRIBUTES REQUIRED IN NULL', async () => {
        it('Test 9- it should PUT ID organization WITH ATTRIBUTES REQUIRED IN NULL', async () => {
            const count = await db.Organization.max('id', { attributes: ['id'] })
            await chai.request(server)
                .put(`/organization/public/${count}`)
                .set("Authorization", token)
                .send(organizations[2])
                .then((res) => {
                    res.should.have.status(400);
                    res.body.should.have.property("message").eql('The fields name, image and email are required!');
                })
        });
    });

});