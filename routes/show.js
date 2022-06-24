const router = require("express").Router();
const File = require("../models/file");

router.get("/:uuid", async(req, res) => {
    try {   
        const file = await File.findOne({uuid: req.params.uuid});
        if(!file){
            return res.render('download', {error: "like has been expired."})    
        }

        return res.render("download", {
            uuid: file.uuid,
            fileName: file.filename,
            fileSize: file.size,
            downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
        })

        
        
    } catch (err) {
        // console.log(err);
        // return res.json({error: err});
        return res.render('download', {error: "something went wrong."})
        
    }

})

















module.exports = router;
