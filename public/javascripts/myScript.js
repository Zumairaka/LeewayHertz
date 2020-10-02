
// validate Users

var numReg = /^[0-9]+$/;
function validateUser(form) {

    if (form.trId.value == '') {
        alert("Please Enter the transaction Id");
        return false;
    } 
    else if (numReg.test(form.trId.value) == false) {
        alert("Transaction Id must be a number");
        return false;
    }
    else if (form.uname.value == '') {
        alert("Please Enter the name");
        return false;
    } 
    else if (form.age.value == '' || form.age.value == 0) {
        alert("Please Enter a valid age");
        return false;
    } 
    else if (numReg.test(form.age.value) == false) {
        alert("Age must be a number");
        return false;
    }
}

function validateId(form) {
    if (form.trId.value == '') {
        alert("Please Enter the transaction Id");
        return false;
    } 
    else if (numReg.test(form.trId.value) == false) {
        alert("Transaction Id must be a number");
        return false;
    }  
}