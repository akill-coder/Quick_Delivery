const mongoose = require('../dbConfig/mongooseConfig.js');


const servicesSchema = mongoose.Schema(
    {
        serviceId : {
            type : Number,
            unique : true,
            required : [true, 'Required Field']
        },
        serviceName : {
            type : String,
            required : [true, 'Required Field']
        },
        description : {
            type : String,
        },
        parcelSize : {
            type : String,
        },
        discount : {
            type : Number,
        },
        parcelCharges : {
            type : String
        }

    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true,
          },
    }
);


const servicesModel = mongoose.model('scervices', servicesSchema);

module.exports = servicesModel;


