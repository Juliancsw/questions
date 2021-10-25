window.onload = (event) => {
    const inputAddress = document.getElementById("input-address");
    const inputAmount = document.getElementById("input-amount");
    const inputOtp = document.getElementById("input-otp");

    inputAddress.addEventListener('input', handleInputAddressChange);
    inputAmount.addEventListener('input', handleInputAmountChange);
    inputOtp.addEventListener("keypress", (evt) => {
        console.log(evt);
        if (evt.which < 48 || evt.which > 57)
        {
            evt.preventDefault();
        }
    });
    inputOtp.addEventListener('input', handleInputOtpChange);

}

function handleInputAddressChange(){
    const value = document.getElementById("input-address").value;
    const message1 = document.getElementById("message-1");

    if(value == ""){
        message1.innerHTML = "This field is required.";
    }else if(value.length < 8 || value.length > 16){
        message1.innerHTML = "Address has to be 8-16 characters long."
    }else{
        message1.innerHTML = "";
    }
}

function handleInputAmountChange(){
    const value = document.getElementById("input-amount").value;
    console.log(value);
    const message1 = document.getElementById("message-2");

    if(value == ""){
        message1.innerHTML = "This field is required.";
    }else if(value.length < 8 || value.length > 16){
        message1.innerHTML = "Address has to be 8-16 characters long."
    }else{
        message1.innerHTML = "";
    }
}

function handleInputOtpChange(){
    const value = document.getElementById("input-otp").value;
    console.log(value);
    const message1 = document.getElementById("message-3");
    console.log(Number.isNaN(parseInt(value)));

    if(value == ""){
        message1.innerHTML = "This field is required and must be a number";
    }else{
        message1.innerHTML = "";
    }
}

function checkValidation(){
    handleInputAddressChange();
    handleInputAmountChange();
    handleInputOtpChange();
}