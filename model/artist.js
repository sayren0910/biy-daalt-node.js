const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artist = Schema({
    type:{                                                   //kpop , pop
        type:String,
        require:true
    },
    artist:{                                              //artist ner
        type:String,
        require:true
    },
    name:{                                                   //hamtlagiin ner
        type:String,
        require:true
    },
});

module.exports = mongoose.model("artist",artist);