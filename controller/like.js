const Product = require('../model/product');

exports.like = async(req,res,next) => {
    try{
        const productId = req.params.id
        console.log(productId);
        const data = await Product.findById(productId)
        if(!data){
            return res.status(404).json({
                error:"hailt oldsongui"
            })
        }
        data.like++;
        await data.save();
    }catch(error){
        return res.status(500).json({
            error:'error'
        })
    }
};