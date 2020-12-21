const quotesModel = require('../models/quotes.js');
const servicesModel = require('../models/services.js');


exports.create = async (req,res) => {

    try {

        if( (await servicesModel.find( {serviceName : req.body.serviceName})).length != 1){

            res.status(400).json(
                { 
                    status : 'error',
                    msg : 'Service Name Doest Not Exists'
                }
            );

        }
        else{

            const data = await quotesModel.create(
                {
                    "serviceName": req.body.serviceName,
                    "fromLocation": req.body.fromLocation,            
                    "toLocation": req.body.toLocation,            
                    "weight": req.body.weight,            
                    "parcelDimension": {
            
                        "length": req.body.parcelDimension.length,            
                        "breadth": req.body.parcelDimension.breadth,            
                        "height": req.body.parcelDimension.height
            
                    },
                }
            );


            res.status(201).json(
                {
                    status: 'success',
                    data : data
                }
            );



        }

        
    } catch (error) {

        res.status(404).json({
            status : 'fail',
            msg : error.message
        })
        
    }

};