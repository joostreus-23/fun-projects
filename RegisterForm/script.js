const registerButton = document.getElementById("registerbutton");
const gebruikernaam = document.getElementById("gebuikernaam");
const email = document.getElementById("email");
const wachtwoord = document.getElementById("wachtwoord");
const bevestigWachtwoord = document.getElementById("bevestigings wachtwoord");

let minLengteGebruikernaam = 3;
let minLengteWachtwoord = 6;

const showError = (input, bericht) => {
  const formBediening = input.parentElement;
  formBediening.className = "form-controle fout";
  const small = formBediening.querySelector("small");
  small.innerText = bericht;
};

const showGoed = (input, bericht) => {
  const formBediening = input.parentElement;
  formBediening.className = "form-controle goed";
};

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showGoed(input);
  } else {
    showError(input, "Email in niet geldig");
  }
}

const checkRegisterForm = (inputArray) => {
  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${eersteHoofdletter(input)} moet ingevuld zijn`);
    }
  });
};

const eersteHoofdletter = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

const checkLengte = (input, min, max) => {
  const antwoord =
    input.value.length >= min && input.value.length <= max
      ? showGoed(input)
      : showError(
          input,
          `${eersteHoofdletter(
            input
          )} moet minimaal ${min} en maximaal ${max} karakters zijn`
        );
  return antwoord;
};

const checkBevestigWachtwoord = (wachtwoord, bevestigWachtwoord) => {
  const antwoord =
    wachtwoord.value === bevestigWachtwoord.value
      ? showGoed(bevestigWachtwoord)
      : showError(
          bevestigWachtwoord,
          `${eersteHoofdletter(
            bevestigWachtwoord
          )} is niet het zelfde als wachtwoord`
        );

  return antwoord;
};

registerButton.addEventListener("click", (event) => {
  checkRegisterForm([gebruikernaam, email, wachtwoord, bevestigWachtwoord]);
  checkLengte(gebruikernaam, 3, 15);
  checkLengte(wachtwoord, 6, 15);
  checkEmail(email);
  checkBevestigWachtwoord(wachtwoord, bevestigWachtwoord);
});

// registerButton.addEventListener("click", (event) => {
//   console.log(event.target);
//   const gebuikernaam = document.getElementById("gebuikernaam");
//   const email = document.getElementById("email");
//   const wachtwoord = document.getElementById("wachtwoord");
//   const bevestigWachtwoord = document.getElementById("wachtwoord2");
//   if (gebuikernaam.length < minLengteGebruikernaam) {
//     showError(
//       gebuikernaam,
//       `Gebuikernaam moet min ${minLengteGebruikernaam} karakters lang zijn`
//     );
//   } else {
//     showGoed(gebuikernaam);
//   }
// });

// const checkGebuikernaam = (naam) => {
//   const antwoord =
//     naam.length > minLengteGebruikernaam ? showGoed(naam) : showError(naam);
//   return antwoord;
// };

// const checkEmail = (email) => {
//   const antwoord = email.includes("@") && email.includes(".") ? true : false;
//   antwoord
//     ? (emailfout.style.visibility = "hidden")
//     : (emailfout.style.visibility = "visible");
//   return antwoord;
// };

// const checkWachtwoord = (wachtwoord) => {
//   const antwoord = wachtwoord.length >= minLengteWachtwoord ? true : false;
//   antwoord
//     ? (wachtwoordfout.style.visibility = "hidden")
//     : (wachtwoordfout.style.visibility = "visible");
//   return antwoord;
// };

// const checkBevestigWachtwoord = (wachtwoord, bevestigWachtwoord) => {
//   const antwoord = wachtwoord === bevestigWachtwoord ? true : false;
//   antwoord
//     ? (wachtwoord2fout.style.visibility = "hidden")
//     : (wachtwoord2fout.style.visibility = "visible");
//   return antwoord;
// };

// registerButton.addEventListener("click", (event) => {
//   console.log(event.target);
//   const gebuikernaam = document.getElementById("gebuikernaam");
//   const email = document.getElementById("email");
//   const wachtwoord = document.getElementById("wachtwoord");
//   const bevestigWachtwoord = document.getElementById("wachtwoord2");
//   checkGebuikernaam(gebuikernaam);
// });
