const mongoose = require('mongoose');

const preprocessSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID:{type:String, required:true},
    purchase_dep:{
        
        comments:{type:String,required:true},
        Status:{type:Number,required:true}
    },
    payment_dep:{
        
        comments:{type:String,required:true},
        Status:{type:Number,required:true}
    },
    labour_dep:{
        
        comments:{type:String,required:true},
        Status:{type:Number,required:true}
    }
   
});

module.exports = mongoose.model('preprocess', preprocessSchema);