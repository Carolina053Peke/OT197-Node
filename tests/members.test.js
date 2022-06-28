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

const members = [
    {
        image: "Image",
        name: "member 1"
    },
    {
        image: "Image",
        name: "member 2"
    }, {
        name: 213
    }, {
        name: 'alan'
    }
];

let token;

describe('Members', () => {
    /**
    * Delete members in the table
    */
        before(async () => { //Before each test we empty the database
            await db.Members.destroy({
                where: {},
                truncate: true
              });         
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
                });
        });



    });

    /* GET ALL MEMBER */
    describe('/GET MEMBERS', () => {
        it('Test 2- it should GET all the members', async () => {
            await chai.request(server)
                .get('/members/1')
                .set("Authorization", token)
                .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("members")
                    res.body.should.have.property("pageNext")
                    res.body.should.have.property("pagePrevious")
                });

        });
    });

    /* POST CREATE MEMBER */
    describe('/POST MEMBER', () => {
        it('Test 3- it should Create member', async () => {
            await chai.request(server)
                .post('/members')
                .set("Authorization", token)
                .send(members[0])
                .then((res) => {
                    res.should.have.status(201);
                    res.body.should.have.property("message").eql('Member created');
                    res.body.should.have.property("member")
                });
        });
    });


    /* PUT MEMBER with TOKEN*/
    describe('/PUT/:id member', () => {
        it('Test 4- it should PUT ID member', async () => {
            const count = await db.Members.max('id', { attributes: ['id'] })
            await chai.request(server)
                .put(`/members/${count}`)
                .set("Authorization", token)
                .send(members[1])
                .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("message").eql('Member update');
                })
        });
    });

    /* DELETE MEMBER with TOKEN*/
    describe('/DELETE/:id member', () => {
        it('Test 5- it should DELETE ID member', async () => {
            const count = await db.Members.max('id', { attributes: ['id'] })
            await chai.request(server)
                .delete(`/members/${count}`)
                .set("Authorization", token)
                .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("message").eql('Member Deleted');
                })
        });
    });

    /* POST CREATE MEMBER SIN VALORES REQUERIDOS */
    describe('/POST member', () => {
        it('Test 6- it should Create member with name in number', async () => {
            await chai.request(server)
                .post('/members')
                .set("Authorization", token)
                .send(members[2])
                .then((res) => {
                    res.should.have.status(400);
                    res.body.should.have.property("message").eql("Name is required and type string");
                });
        });
    });

    /* POST CREATE MEMBER SIN VALORES REQUERIDOS */
    describe('/POST member', () => {
        it('Test 7- it should Create member with name valid and image null', async () => {
            await chai.request(server)
                .post('/members')
                .set("Authorization", token)
                .send(members[3])
                .then((res) => {
                    res.should.have.status(400);
                    res.body.should.have.property("message").eql("Image is required");
                });
        });
    });

    

    /* POST CREATE MEMBER SIN VALORES REQUERIDOS */
    describe('/PUT member', () => {
        it('Test 8- it should EDIT member with name in number', async () => {
            const count = await db.Members.max('id', { attributes: ['id'] })
            await chai.request(server)
                .put(`/members/${count}`)
                .set("Authorization", token)
                .send(members[2])
                .then((res) => {
                    res.should.have.status(400);
                    res.body.should.have.property("message").eql("Name is required and type string");
                });
        });
    });

    /* POST CREATE MEMBER SIN VALORES REQUERIDOS */
    describe('/PUT member', () => {
        it('Test 9- it should PUT member with name valid and image null', async () => {
            const count = await db.Members.max('id', { attributes: ['id'] })
            await chai.request(server)
                .put(`/members/${count}`)
                .set("Authorization", token)
                .send(members[3])
                .then((res) => {
                    res.should.have.status(400);
                    res.body.should.have.property("message").eql("Image is required");
                });
        });
    });

    describe('/DELETE/:id member', () => {
        it('Test 10- it should DELETE ID member not exist', async () => {
            const count = await db.Members.max('id', { attributes: ['id'] })
            await chai.request(server)
                .delete(`/members/${count+1}`)
                .set("Authorization", token)
                .then((res) => {
                    res.should.have.status(404);
                    res.body.should.have.property("message").eql('Member not exist');
                })
        });
    });

       /* POST CREATE MEMBER SIN VALORES REQUERIDOS */
       describe('/PUT member', () => {
        it('Test 11- it should PUT member with name valid and image null', async () => {
            const count = await db.Members.max('id', { attributes: ['id'] })
            await chai.request(server)
                .put(`/members/${count+1}`)
                .set("Authorization", token)
                .send(members[0])
                .then((res) => {
                    res.should.have.status(404);
                    res.body.should.have.property("message").eql("Member not found");
                });
        });
    });

});