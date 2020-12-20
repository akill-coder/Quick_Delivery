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
                required : [true, 'Field Required']
            },
            phoneNumber : {
                type : Number
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