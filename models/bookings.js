const mongoose = require('../dbConfig/mongooseConfig.js');
const AutoIncrementFactory = require('mongoose-sequence');

const AutoIncrement = AutoIncrementFactory(mongoose);



const bookingsSchema = mongoose.Schema(
    {
        senderName : {
            type : String,
            required : [true, 'Field Required']
        },
        receiverName : {
            type : String,
            required : [true, 'Field Required']
        },
        senderPhoneNumber : {
            type : Number,
            required : [true, 'Field Required']
        },
        receiverPhoneNumber : {
            type : Number,
            required : [true, 'Field Required']
        },
        time : {
            type : Date,
            default : Date()
        },
        senderAddress : {
            address : {
                type: String
            },
            zipCode : {
                type: String
            },
            city : {
                type: String
            },
            country : {
                type: String
            },                        
        },
        receiverAddress : {
            address : {
                type: String
            },
            zipCode : {
                type: String
            },
            city : {
                type: String
            },
            country : {
                type: String
            },                        
        },
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true,
          },
    }
);



bookingsSchema.plugin(AutoIncrement, {inc_field : 'bookingId'});

const bookingsModel = mongoose.model('bookings', bookingsSchema);

module.exports = bookingsModel;