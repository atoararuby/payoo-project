    const validPin = 1234;
    const transactionData = [];

    // function to get input values(number)
    function getInputValueNumber(id){
        const inputField = document.getElementById(id);
        const inputFieldValue = inputField.value;
        const inputFieldValueNumber = parseInt(inputFieldValue);
        return inputFieldValueNumber;
    }

    function getInputValue(id){
        const inputField = document.getElementById(id);
        const inputFieldValue = inputField.value;
        return inputFieldValue;
    
    }

    // function to get innerText
    function getInnerText(id){
        const element = document.getElementById(id);
        const elementValue = element.innerText;
        const elementValueNumber = parseInt(elementValue);
        return elementValueNumber;
    }

    // function to set innerText
    function setInnerText(value){
        const availableBalanceElement = document.getElementById("availableBalance");
        availableBalanceElement.innerText = value;
    }

    //function to toggle
    function handleToggle(id){
        const forms = document.getElementsByClassName("form");

        for(const form of forms){
            form.style.display = "none";
        }

        document.getElementById(id).style.display = "block";
    }

    // function to toggle buttons
    function handleButtonToggle(id){
        const formBtns = document.getElementsByClassName("form-btn");
         
        for(const btn of formBtns){
            btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
            btn.classList.add("border-gray-300")
        }
        document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]")
        document.getElementById(id).classList.remove("border-gray-300")
    }

    // add money feature
    document.getElementById("addMoneyButton").addEventListener('click', function(e){
    e.preventDefault()
    // console.log("Add Money Button Clicked");

    const bank = getInputValue("bank");
    const accountNumber = getInputValue("accountNumber");
    
    const amount = getInputValueNumber("addAmount");
    const pin = getInputValueNumber("addPin");
    const availableBalance = getInnerText("availableBalance");
        console.log(accountNumber, pin);

    if(accountNumber.length <11){
        alert("Please enter a valid account number");
        return;
    }
    if(pin !== validPin){
        alert("Please provide a valid pin number");
        return;
    }
    console.log(availableBalance, amount)
    const totalNewAvailableBalance = availableBalance + amount;
    setInnerText(totalNewAvailableBalance);
    

    const data = {
        name : "Add Money",
        date : new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData)
})

// cash out feature
document.getElementById("withdrawBtn").addEventListener('click', function(e){
    e.preventDefault();
    const amount = parseInt(document.getElementById("withdrawAmount").value);
    const availableBalance = getInnerText("availableBalance");
    const totalNewAvailableBalance = availableBalance - amount;
    setInnerText(totalNewAvailableBalance) ;
    // console.log(totalNewAvailableBalance);


    const data = {
        name : "Cash Out",
        date : new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData);
})


document.getElementById("transactionsButton").addEventListener('click', function(){
    const transactionContainer = document.getElementById("transaction-container")
    console.log(transactionContainer)
    transactionContainer.innerText = ""
    
    console.log(transactionData)

    for(const data of transactionData){
        const div = document.createElement("div")
        div.innerHTML = `
         <div
            class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-[#f4f5f7]">
                <img src="./assets/wallet1.png" class="mx-auto" alt="" />
              </div>
              <div class="ml-3">
                <h1>${data.name}</h1>
                <p>${data.date}</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        `

        transactionContainer.appendChild(div)
    }
})

// toggling feature
document.getElementById("addButton").addEventListener('click', function(){
    handleToggle("addMoneyParent");
    handleButtonToggle("addButton");
})

document.getElementById("cashButton").addEventListener('click', function(){
   handleToggle("cashOutParent");
   handleButtonToggle("cashButton");
})
document.getElementById("transferButton").addEventListener('click', function(){
   handleToggle("transferParent");
   handleButtonToggle("transferButton");
})
document.getElementById("getBonusButton").addEventListener('click', function(){
   handleToggle("getBonusParent");
   handleButtonToggle("getBonusButton");
})
document.getElementById("payBillButton").addEventListener('click', function(){
   handleToggle("payBillParent");
   handleButtonToggle("payBillButton");
})
document.getElementById("transactionsButton").addEventListener('click', function(){
   handleToggle("transactionsParent");
   handleButtonToggle("transactionsButton");
})