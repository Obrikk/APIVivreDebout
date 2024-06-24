const multer = require('multer')
const path = require('path')
const fs = require('fs')

const storageCommon =  multer.diskStorage({
    destination: function(req, file, cb){
        const uploadDir = path.join(__dirname, '..', 'uploads')

        if(fs.existsSync(uploadDir)){
            fs.mkdirSync(uploadDir, {recursive : true})
        }

    cb(null, uploadDir)

    },
    filename: function(req, file, cb){
        const ext = path.extname(file.originalname)
        const basename = path.basename(file.originalname, ext)
        cb(null, basename + '-' + Date.now() + ext)
    }

})