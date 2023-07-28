const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genre = Schema({
    genre:{                                       //hamtlagiin ner
        type:String,
        require:true
    },
    music:{
        type:String,
        required:true
    },
    artist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'artist'
    },
});

module.exports = mongoose.model("genre",genre);