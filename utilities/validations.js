exports.validEmailID = (emailID) => {

    const validMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return validMail.test(emailID);
  

};


exports.validPhoneNo = (phoneNo) => {

    if(Math.ceil(Math.log10(phoneNo + 1)) != 10) return false

    return true;
}