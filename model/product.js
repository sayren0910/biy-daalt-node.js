const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = Schema({
    name:{                                //hamtalgiin ner
        type:String,
        require:true
    },
    type:{                                       //jich: kpop , pop
        type:String,
        require:true
    },
    song:{                                      //duunii ner
        type:String,
        require:true
    },
    like:{
        type: Number, 
        default:0
    },
    genre:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'genre'
    },
});

module.exports = mongoose.model("product",product);