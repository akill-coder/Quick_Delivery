const servicesModel = require('../models/services.js');
const serviceModel = require('../models/services.js');


exports.create = async (req, res) => {

    try {
        
        if( (await servicesModel.find( {serviceName : req.body.serviceName})).length == 1){

            res.status(400).json(
                { 
                    status : 'error',
                    msg : 'Service Name Already Exists'
                }
            );

        }
        else{

            const data = await servicesModel.create(
                {

                    serviceName : req.body.serviceName,
                    description : req.body.description,
                    parcelSize : req.body.parcelCharges,
                    discount : req.body.discount,
                    parcelCharges : req.body.parcelCharges

                }
            );

            res.status(201).json(
                {
                    status: "success",
                    data: data
                }
            );

            
        }


    } catch (error) {

        res.status(404).json({
            status : 'error',
            msg : error
        });
        
    }
};


exports.getAll = async (req,res) => {

    try {
        
        const data = await servicesModel.find({});

        if(data.length > 0){

            res.status(200).json(
                {
                    status: "success",
                    data: data,

                }
            );
        }else{
            res.status(400).json(
                {
                    status: "success",
                    msg: "No service Found in the DataBase",

                }
            );

        }


    } catch (error) {

        res.status(404).json({
            status : 'error',
            msg : error
        });
    }

};

