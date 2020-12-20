exports.validEmailID = (emailID) => {

    const validMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return validMail.test(emailID);
  

};


exports.validStrLength = (str, minLength, maxLength) => {

    if ( str.length > minLength && str.length < maxLength  ) return false;

    return true;
}
