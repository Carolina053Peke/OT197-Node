let db = require("../models");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let should = chai.should();
chai.use(chaiHttp);

const news = [
    {
        name: "News test 1",
        content: "News test content 1",
        image: "News test image 1",
        categoryId: 1,
    },
    {
        name: "",
        content: "",
        image: "",
        categoryId: "",
    },
    {
        name: "News test 3",
        content: "News test content 3",
        image: "News test image 3",
        categoryId: 0,
    },
    {
        name: "4",
        content: "4",
        image: "4",
        categoryId: 1,
    },
    {
        name: "News test 5 (update)",
        content: "News test content 5 (update)",
        image: "News test image 5 (update)",
        categoryId: 1,
    },
];

describe("News", () => {
    /* GET ALL NEWS */
    describe("/GET /news", () => {
        it("Test 1 - it should GET all the news", async () => {
            await chai
                .request(server)
                .get("/news")
                .then((res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a("array");
                });
        });
    });

    /* GET THE NEWS WITH ID 1*/
    describe("/GET /news/1", () => {
        it("Test 2 - it should GET the news with ID 1", async () => {
            await chai
                .request(server)
                .get("/news/1")
                .then((res) => {
                    res.should.have.status(200);
                    res.body.data.should.have.property("id").eq(1);
                });
        });
    });

    /* GET 10 NEWS PER PAGE*/
    describe("/GET /news?page=1", () => {
        it("Test 3 - it should GET the first 10 news", async () => {
            await chai
                .request(server)
                .get("/news?page=1")
                .then((res) => {
                    res.should.have.status(200);
                    res.body.data.length.should.be.eql(10);
                });
        });
    });

    /* GET 10 NEWS PER PAGE*/
    describe("/GET /news?page=0", () => {
        it("Test 4 - it should reject GET the news for wrong page", async () => {
            await chai
                .request(server)
                .get("/news?page=0")
                .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have
                        .property("msg")
                        .eql("Page must be a number, greater than zero");
                });
        });
    });
    /* POST A NEWS */
    describe("POST /news", () => {
        it("Test 5 - it should POST a news", async () => {
            await chai
                .request(server)
                .post("/news")
                .send(news[0])
                .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("msg").eql("News created successfully");
                });
        });
    });

    /* POST A NEWS WITH EMPTY FIELDS */
    describe("POST /news", () => {
        it("Test 6 - it should rejects POST a news with empty fields", async () => {
            await chai
                .request(server)
                .post("/news")
                .send(news[1])
                .then((res) => {
                    res.should.have.status(200);
                    res.body.errors.name.should.have
                        .property("msg")
                        .eql("Name cannot be empty");
                    res.body.errors.content.should.have
                        .property("msg")
                        .eql("Content cannot be empty");
                    res.body.errors.image.should.have
                        .property("msg")
                        .eql("Image cannot be empty");
                });
        });
    });

    /* POST A NEWS WITH NON-EXISTENT CATEGORYID */
    describe("POST /news", () => {
        it("Test 7 - it should rejects POST a news with non-existent categoryId ", async () => {
            await chai
                .request(server)
                .post("/news")
                .send(news[2])
                .then((res) => {
                    res.should.have.status(200);
                    res.body.errors.categoryId.should.have
                        .property("msg")
                        .eql("There are no categories with that ID");
                });
        });
    });

    /* POST A NEWS WITH FIELDS TOO SHORT*/
    describe("POST /news", () => {
        it("Test 8 - it should rejects POST a news with fields too shorts", async () => {
            await chai
                .request(server)
                .post("/news")
                .send(news[3])
                .then((res) => {
                    res.should.have.status(200);
                    res.body.errors.name.should.have
                        .property("msg")
                        .eql("Name must be between 2-50 characters long");
                    res.body.errors.content.should.have
                        .property("msg")
                        .eql("Content must be between 10-500 characters long");
                    res.body.errors.image.should.have
                        .property("msg")
                        .eql("Image must be between 2-500 characters long");
                });
        });
    });

    /* DELETE A NEWS BY ID*/
    // It is necessary to assign an ID to delete
    let idToDelete = 22;

    describe(`DELETE /news/${idToDelete}`, () => {
        it(`Test 9 - it should DELETE the news with ID ${idToDelete}`, async () => {
            await chai
                .request(server)
                .delete(`/news/${idToDelete}`)
                .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have
                        .property("msg")
                        .eql(`News ${idToDelete} removed succesfully.`);
                });
        });
    });

    /* DELETE A NEWS BY ID WITH NON-EXISTENT ID*/
    describe(`DELETE /news/0`, () => {
        it(`Test 10 - it should reject DELETE the news for non-existent id`, async () => {
            await chai
                .request(server)
                .delete(`/news/0`)
                .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("msg").eql(`News 0 not found`);
                });
        });
    });

    /* PUT A NEWS BY ID */
    // It is necessary to assign an ID to update
    let idToUpdate = 23;
    describe(`PUT /news/${idToUpdate}`, () => {
        it(`Test 11 - it should PUT the news with ID ${idToUpdate}`, async () => {
            await chai
                .request(server)
                .put(`/news/${idToUpdate}`)
                .send(news[4])
                .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have
                        .property("msg")
                        .eql(`News ${idToUpdate} edited succesfully`);
                });
        });
    });

    /* PUT A NEWS BY ID WITH WITH NON-EXISTENT ID */
    describe(`PUT /news/0`, () => {
        it(`Test 12 - it should reject PUT the news with ID 0`, async () => {
            await chai
                .request(server)
                .put(`/news/0`)
                .send(news[4])
                .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("msg").eql(`News 0 not found`);
                });
        });
    });

    /* PUT A NEWS BY ID WITH WRONG FIELDS */
    describe(`PUT /news/0`, () => {
        it(`Test 13 - it should reject PUT the news for invalid fields`, async () => {
            await chai
                .request(server)
                .put(`/news/${idToUpdate}`)
                .send(news[3])
                .then((res) => {
                    res.should.have.status(200);
                    res.body.errors.name.should.have
                        .property("msg")
                        .eql("Name must be between 2-50 characters long");
                    res.body.errors.content.should.have
                        .property("msg")
                        .eql("Content must be between 10-500 characters long");
                    res.body.errors.image.should.have
                        .property("msg")
                        .eql("Image must be between 10-500 characters long");
                });
        });
    });
});
