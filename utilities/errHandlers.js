exports.serverError = async (err,req,res,next) => {
    res.status(404).json({
        status : 'error',
        msg: 'something went wrong!'
    })
};


exports.invalidPath = async (req,res,next) => {
    res.status(404).json({
        status : 'error',
        msg: 'Invalid Path!'
    })
}

