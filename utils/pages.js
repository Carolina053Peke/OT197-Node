const pagination = (req, res, page, model, QUAN_PER_PAGE, url)=>{
    if(page){
        // If "page" is wrong
        if(!(Number.isInteger(page) || +page > 0)){
            return res.json({
                ok: false,
                msg: 'Page must be a number, greater than zero',
                url: `/${url}?page=1`,
            });   
        }// If "page" is okay
        else{
            model.findAll({
                offset: ((+page - 1) * QUAN_PER_PAGE),
                limit: QUAN_PER_PAGE
            }).then(data => {
                return res.json({
                    ok: true,
                    data: data,
                    currentUrl: `/${url}?page=${+page}`,
                    // If there are more registers
                    nextUrl: data.length == QUAN_PER_PAGE && `/${url}?page=${+page + 1}`,
                    // if it is not the page 1
                    prevUrl: page != 1 &&`/${url}?page=${+page - 1}`
                });
            })
            .catch(e => console.log(e))
        }
    }
}

module.exports = pagination