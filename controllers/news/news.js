const db = require("../../models");
const { validationResult } = require('express-validator');
const pagination = require("../../utils/pages");

module.exports = {
    /* Insert function of controller (create, delete, edit, etc.) */
    create: (req, res) => {
        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.json({
                ok: false,
                errors: errors.mapped()
            })
        }

        const { name, content, image, categoryId } = req.body

        db.News.create({
            name: name,
            content: content,
            image: image,
            categoryId: categoryId
        })
            .then((news) => {
                return res.json({
                    msg: "News created successfully",
                    ok: true,
                    url: '/news',
                    data: news
                });
            })
            .catch(e => console.log(e))
    },
    detail: (req, res) => {
        db.News.findOne({
            where: {
                id: req.params.id
            },
            include: [{ association: "category" }]
        })
            .then(news => {
                if (news != null) {
                    return res.json({
                        ok: true,
                        data: news,
                        url: ('/news/' + req.params.id),
                    });
                } else {
                    return res.json({
                        ok: false,
                        msg: 'New not found',
                        url: ('/news/' + req.params.id),
                    });
                }
            })
            .catch(e => console.log(e))
    },
    delete: (req, res) => {
        db.News.destroy({
            where: {
                id: req.params.id
            }
        })
            .then((result) => {
                if (result) {
                    return res.json({
                        msg: `News ${req.params.id} removed succesfully.`,
                        ok: true,
                        url: `news/${req.params.id}`
                    });
                } else {
                    return res.json({
                        msg: `News ${req.params.id} not found`,
                        ok: false,
                        url: `news/${req.params.id}`
                    });
                }

            })
            .catch(e => console.log(e))
    },
    edit: (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({
                ok: false,
                errors: errors.mapped()
            })
        }
        db.News.update({
            ...req.body
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(result => {
                if (result != 0) {
                    return res.json({
                        msg: `News ${req.params.id} edited succesfully`,
                        ok: true,
                        url: `news/${req.params.id}`
                    });
                } else {
                    return res.json({
                        msg: `News ${req.params.id} not found`,
                        ok: false,
                        url: `news/${req.params.id}`
                    });
                }

            })
            .catch(e => console.log(e))
    },
    all:(req, res) => {
        // Pagination
        const QUAN_PER_PAGE = 10
        let page = req.query.page
        // if page exists
        if(page){
            pagination(req, res, page, db.News, QUAN_PER_PAGE, "news")
        }
        // if page doesn't exist, get all news
        else{
            db.News.findAll({
                include: [{ association: "category" }]
            })
                .then(news => {
                    if (news != null) {
                        return res.json({
                            ok: true,
                            data: news,
                            url: '/news',
                        });
                    } else {
                        return res.json({
                            ok: false,
                            msg: 'New not found',
                            url: '/news',
                        });
                    }
                })
                .catch(e => console.log(e))
        }

    }
}