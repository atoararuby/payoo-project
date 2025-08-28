//Login button functionality
document.getElementById("loginButton").addEventListener('click', function(e){
    e.preventDefault()
    // console.log("login button clicked");

    const mobileNumber = 12345678910;
    const pinNumber = 1234;
    const mobileNumberValue = document.getElementById("mobileNumber").value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);
    const pinNumberValue = document.getElementById("pinNumber").value;
    const pinNumberValueConverted = parseInt(pinNumberValue);
    // console.log(mobileNumberValueConverted, pinNumberValueConverted);
    
    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
       window.location.href = "./home.html";
    }
    else{
        alert("Invalid credential");
    }
})