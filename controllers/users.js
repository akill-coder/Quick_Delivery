const { json } = require('body-parser');
const usersModel = require('../models/users.js');
const validator = require('../utilities/validations.js');

exports.registerUser = async (req,res) => {

    try {


        if( 
            req.body.userName.length == 0 ||
            req.body.passWord.length == 0 ||
            req.body.mailID.length == 0                    
        ){

            res.status(400).json({
                status: 'error',
                msg : 'All Fields Are Required'
            });        

        }        
        else if(!validator.validEmailID(req.body.mailID)){

           res.status(400).json({
                status: 'error',
                msg : 'Enter valid Mail ID'
            });
            
        }
        else if(!validator.validPhoneNo(req.body.phoneNumber)){

            res.status(400).json({
                status: 'error',
                msg : 'Enter valid Phone No.'
            });

        }
        else if( (await usersModel.find({userName : req.body.userName})).length == 1 ){

            res.status(400).json({
                status: 'error',
                msg : 'Username Already Exists'
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
                msg : error
                
            });

    }
}