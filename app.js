const submitButton = document.querySelector("#submit-button");
const alertBox = document.querySelector("#alert");

const firstName = document.querySelector("#first-name");
const cardNumber = document.querySelector("#card-number");
const cvcNumber = document.querySelector("#cvc-number");
const amount = document.querySelector("#amount");
const lastName = document.querySelector("#last-name");
const city = document.querySelector("#city");
const state = document.querySelector("#state");
const postalCode = document.querySelector("#postal-code");
// varios radios
const radios = document.querySelectorAll('input[name="drone"]');

let radiHaveAValue = false;

radios.forEach((elem) => {
  if (elem.checked) radiHaveAValue = true;
});

let initialValues = {
  firstName: firstName.value,
  cardNumber: cardNumber.value,
  amount: amount.value,
  lastName: lastName.value,
  city: city.value,
  state: state.value === "Pick a state" ? false : state.value,
  postalCode: postalCode.value,
  radio: radiHaveAValue,
};

let errorBlock

firstName.addEventListener("change",(e)=>initialValues.firstName=e.target.value)
cardNumber.addEventListener("change",(e)=>initialValues.cardNumber=e.target.value)
amount.addEventListener("change",(e)=>initialValues.amount=e.target.value)
lastName.addEventListener("change",(e)=>initialValues.lastName=e.target.value)

function checkValues(initialValues){
  if(initialValues.firstName===""){
    errorBlock=true
    firstName.style.background="red"
  }else{
    errorBlock=false
    firstName.style.background="white"
  }

  if(initialValues.cardNumber===""){
    errorBlock=true
    cardNumber.style.background="red"
  }else{
    errorBlock=false
    cardNumber.style.background="white"
  }

  if(initialValues.amount===""){
    errorBlock=true
    amount.style.background="red"
  }else{
    errorBlock=false
    amount.style.background="white"
  }

  if(initialValues.lastName===""){
    errorBlock=true
    lastName.style.background="red"
  }else{
    errorBlock=false
    lastName.style.background="white"
  }
}

function checkError(){
  if(errorBlock==true){
    alertBox.style.display="block"
  }else{
    alertBox.style.display="none"
  }
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  checkValues(initialValues)
  checkError()
});
