const { json } = require('body-parser');
const bookingsModel = require('../models/bookings.js');
const usersModel = require('../models/users.js');
const validator = require('../utilities/validations.js');

exports.register = async (req,res) => {

    try {


        if(!validator.validEmailID(req.body.mailID)){

           res.status(400).json({
                status: 'error',
                msg : 'Enter valid Mail ID'
            });
            
        }
        else if(req.body.phoneNumber.toString().length != 10){

            res.status(400).json({
                status: 'error',
                msg : 'Enter valid Phone No.'
            });

        }
        else if(validator.validStrLength(req.body.passWord, 7, 12)){

            res.status(400).json({
                status: 'error',
                msg : 'Password length should be in between 7 and 12'
            });


        }
        else if( (await usersModel.find({ mailID : req.body.mailID})).length == 1 ){

            res.status(400).json({
                status: 'error',
                msg : 'Email already in use'
            });


        }      
        else{

            const data = await usersModel.create(
                {
                    userName : req.body.userName,
                    passWord : req.body.passWord,
                    mailID : req.body.mailID,
                    phoneNumber : req.body.phoneNumber,
                }
            );

            

            res.status(201).json(
                {
                    status : 'Success',
                    data: data
                }
            );



        }

    } catch (error) {

        
            res.status(404).json({
                status : 'fail',
                msg : error.message
                
            });

    }
};


exports.login = async (req,res) => {

    try {


        if( (await usersModel.find({ mailID : req.body.mailID })).length == 0 ){


            res.status(400).json(
                {
                    status : 'error',
                    msg : 'User not registered'
                }
            );

        }
        else if((await usersModel.find({ mailID : req.body.mailID, passWord : req.body.passWord })).length == 0){

            res.status(400).json(
                {
                    status : 'error',
                    msg : 'Password Incorrect'
                }
            );

        }
        else{

            const data = await usersModel.findOne({ mailID : req.body.mailID, passWord : req.body.passWord });

            res.cookie('emailID', req.body.mailID);

            res.status(201).json(
                {
                    status : 'Success',
                    id : data._id,
                    msg: 'User Logged In Successfully'
                }
            );


            


        }
        
    } catch (error) {

        res.status(404).json({
            status : 'fail',
            msg : error
            
        });

        
    }



};


exports.getById = async (req,res) => {

    try {

        

            const data = await usersModel.find( {mailID : req.params.mailId} );

            if(data.length == 1){

                res.status(200).json({
                    status : 'success',
                    data : data
                    
                }); 

            }
            else{
                res.status(400).json({
                    status : 'error',
                    msg : 'Please check the mailID'
                    
                });
            }

           

        
        
    } catch (error) {

        res.status(404).json({
            status : 'fail',
            msg : error
            
        });
        
    }
};

exports.update = async (req,res) => {

    try {
        
        if(req.body.phoneNumber.toString().length != 10){

            res.status(400).json({
                status : 'error',
                msg : 'Phone No. not valid'
                
            });
        }
        else if((await usersModel.find( {mailID : req.body.mailID} )).length != 1){
            res.status(400).json({
                status : 'error',
                msg : 'Please check the mailID'
                
            });
        }
        else{

            const data = await usersModel.findOneAndUpdate(
                { mailID : req.body.mailID},
                {
                    $set : {
                        userName : req.body.userName,
                        passWord : req.body.passWord,
                        phoneNumber : req.body.phoneNumber,
                        updatedAt: Date()
                    }
                },
                {
                    new : true,
                    runValidators : true
                }
            );

            console.log(data);


            res.status(200).json({
                status : 'success',
                msg : 'User Data updated successfully'
                
            });

        }

    } catch (error) {

        res.status(404).json({
            status : 'fail',
            msg : error
            
        });
        
        
    }

};


exports.getBookings = async (req,res) => {

    try {

        const data = await usersModel.findOne( {mailID : req.params.mailId} );

        if(data != null){

            if(data.bookingID.length == 0){

                res.status(200).json({
                    status : 'error',
                    msg: 'No bookings made by the user'
                    
                }); 

            }
            else{ 

                const bookingsData = await bookingsModel.find({ bookingId : {$in : data.bookingID}})

                

                res.status(200).json({
                    status : 'success',
                    data : bookingsData
                    
                }); 

            }

        }
        else{
            res.status(400).json({
                status : 'error',
                msg : 'Please check the mailID'
                
            });
        }
        
    } catch (error) {

        res.status(404).json({
            status : 'fail',
            msg : error
            
        });

        
    }
}