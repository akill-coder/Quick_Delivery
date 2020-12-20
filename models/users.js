const mongoose = require('../dbConfig/mongooseConfig.js');


const usersSchema = mongoose.Schema(
    
        {
            userName : {
                type: String,
                unique: true,
                require : [true, 'Field Required']
            },
            passWord : {
                type : String,
                required: [true, 'Field Required']
            },
            mailID : {
                type : String,
                unique: true,
                required : [true, 'Field Required']
            },
            phoneNumber : {
                type : Number,
                required : [true, 'Field Required']
            },
            bookingID : {
                type : [String],
                default : []
            }  
        },
        {
            timestamps: {
                createdAt: true,
                updatedAt: true,
              },
        }
    
);



const usersModel = mongoose.model('users', usersSchema);


module.exports = usersModel;