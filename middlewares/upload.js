const multer = require('multer');
const path = require('path');

const Storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, path.join(__dirname,"../public/music"));
    },
    filename: function(req, file, cb ){
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()*1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + '.mp3');            
    }
});
const multerFilter = (req, file, cb) => {
    if((file.mimetype.startSWIth ('music'))){         //starSWIth : zovhon music-eer ehelsen zuilsiin avna.
        cb(null, true)
    }else{
        cb(null, false);
    }
};
exports.Upload = multer({
    storage : Storage,
    multerFilter : multerFilter,
    limits:{ fieldSize : 100000 },
});
