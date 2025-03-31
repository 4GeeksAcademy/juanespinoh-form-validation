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
const messageBox = document.querySelector("#message");
// varios radios checkBox
const radiosBox = document.querySelector("#checkBox");
const radios = document.querySelectorAll('input[name="drone"]');

let whiteColor="white"
let dangerColor="red"

function checkIfRadioSelected() {
  let radiHaveAValue = false;

  radios.forEach((elem) => {
    if (elem.checked) {
      radiHaveAValue = elem.value;
    } else {
      radiHaveAValue = false;
    }
  });
  return radiHaveAValue;
}

let initialValues = {
  firstName: firstName.value,
  cardNumber: cardNumber.value,
  cvcNumber: cvcNumber.value,
  amount: amount.value,
  lastName: lastName.value,
  city: city.value,
  state: state.value === "Pick a state" ? false : state.value,
  postalCode: postalCode.value,
  radio: checkIfRadioSelected(),
  message:message.value
};

let errorBlock;

firstName.addEventListener(
  "change",
  (e) => (initialValues.firstName = e.target.value)
);
cardNumber.addEventListener(
  "change",
  (e) => (initialValues.cardNumber = e.target.value)
);
cvcNumber.addEventListener(
  "change",
  (e) => (initialValues.cvcNumber = e.target.value)
);
amount.addEventListener(
  "change",
  (e) => (initialValues.amount = e.target.value)
);
lastName.addEventListener(
  "change",
  (e) => (initialValues.lastName = e.target.value)
);
city.addEventListener(
  "change",
  (e) => (initialValues.city = e.target.value)
);
state.addEventListener(
  "change",
  (e) => (initialValues.state = e.target.value)
);
postalCode.addEventListener(
  "change",
  (e) => (initialValues.postalCode = e.target.value)
);
messageBox.addEventListener(
  "change",
  (e) => (initialValues.message = e.target.value)
);


radios.forEach((elem) =>
  elem.addEventListener("change", (e) => {
    console.log(initialValues);
    initialValues.radio = e.target.value;
  })
);

function checkValues(initialValues) {


  if (initialValues.radio === false) {
   
    errorBlock = true;
    radiosBox.classList.remove("bg-secondary");
    radiosBox.classList.add("bg-danger");
  } else {
    errorBlock = false;
    radiosBox.classList.remove("bg-danger");
    radiosBox.classList.add("bg-secondary");
  }
  if (initialValues.firstName === "") {
    errorBlock = true;
    firstName.style.background = dangerColor;
  } else {
    errorBlock = false;
    firstName.style.background = whiteColor;
  }

  if (
    initialValues.cardNumber === "" ||
    initialValues.cardNumber.length <= 15 ||
    initialValues.cardNumber.length > 16
  ) {
    errorBlock = true;
    cardNumber.style.background = dangerColor;
  } else {
    errorBlock = false;
    cardNumber.style.background = whiteColor;
  }

  if (initialValues.amount === "") {
    errorBlock = true;
    amount.style.background = dangerColor;
  } else {
    errorBlock = false;
    amount.style.background = whiteColor;
  }

  if (initialValues.lastName === "") {
    errorBlock = true;
    lastName.style.background = dangerColor;
  } else {
    errorBlock = false;
    lastName.style.background = whiteColor;
  }

  if (initialValues.state === false) {
    errorBlock = true;
    state.style.background = dangerColor;
  } else {
    errorBlock = false;
    state.style.background = whiteColor;
  }

  if (initialValues.postalCode === "") {
    errorBlock = true;
    postalCode.style.background = dangerColor;
  } else {
    errorBlock = false;
    postalCode.style.background = whiteColor;
  }
  if (initialValues.city === "") {
    errorBlock = true;
    city.style.background = dangerColor;
  } else {
    errorBlock = false;
    city.style.background = whiteColor;
  }

  if (initialValues.cvcNumber === "") {
    errorBlock = true;
    cvcNumber.style.background = dangerColor;
  } else {
    errorBlock = false;
    cvcNumber.style.background = whiteColor;
  }

  if (initialValues.message === "") {
    errorBlock = true;
    messageBox.style.background = dangerColor;
  } else {
    errorBlock = false;
    messageBox.style.background = whiteColor;
  }
}

// state: state.value === "Pick a state" ? false : state.value,
// postalCode: postalCode.value,
// radio: radiHaveAValue,

function checkError() {
  if (errorBlock == true) {
    alertBox.style.display = "block";
  } else {
    alertBox.style.display = "none";
  }
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  checkValues(initialValues);
  checkError();
});
