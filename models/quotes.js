const mongoose = require('../dbConfig/mongooseConfig.js');

const quotesSchema = mongoose.Schema(
    {
        serviceName : {
            type : String
        },
        fromLocation : {
            type : String
        },
        toLocation : {
            type : String 
        },
        weight : {
            type : Number
        },
        parcelDimension : {
            length : {
                type: Number
            },
            breadth : {
                type: Number 
            },
            height : {
                type : Number
            }
        }
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true,
          },
    }
);

const quotesModel = mongoose.model('quotes', quotesSchema);

module.exports = quotesModel;