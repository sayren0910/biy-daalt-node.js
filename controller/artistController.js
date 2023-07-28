const Artist = require('../model/artist');
const Logger = require('../middlewares/logger');

 exports.postData = async(req,res, next) => {
 try{
    const postArtist = await Artist.create(req.body);
    res.status(200).json({
        success:true,
        postArtist
    });
 }catch(error){
    res.status(400).json({
        success:false,
        error
    });
 };
};
 exports.getData = async(req,res,next) => {
    try{
        const getAllArtist = await Artist.find();
        res.status(200).json({
            success:true,
            getAllArtist
        })
     }catch(error){
        res.send(getAllArtist)
        res.status(400).json({
            success:false,
            error
        })
     }
};

 exports.getDataId = async(req,res,next) => {
    try{
        const getId = await Artist.findById(req.params.id);
        res.status(200).json({
            success:true,
            getId
        })
     }catch(error){
        res.status(400).json({
            success:false,
            error
        })
     }
};

exports.putData = async(req,res,next) => {
    try{
        const putArtist = await Artist.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            success:true,
            putArtist
        })
     }catch(error){
        res.status(400).json({
            success:false,
            error
        })
     }
};

exports.deleteData = async(req,res,next) => {
    try{
        const deleteArtist = await Artist.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success:true,
            deleteArtist
        })
     }catch(error){
        res.status(400).json({
            success:false,
            error
        })
     }
};