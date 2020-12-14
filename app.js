const usernameInput = document.querySelector('.username input');
const passwordInput = document.querySelector('.password input');
const submit = document.querySelector('.submit button');


//wrap both functions inside one function, which will be called when button is clicked
function checkInputs() {
    let typedUsername = usernameInput.value;
    let usernameRegex = /((?=.*\d)(?=.*[A-Z]).{8,8})/;
    let typedPassword = passwordInput.value;
    let passwordRegex = /((?=.*\d)(?=.*\W).{10,10})/;

//make function to check usernameInput, send alert if reqs not met
function checkUsername() {
    if (!usernameRegex.test(typedUsername)) {
        alert("Whoops, looks like you need to change your username to meet the character requirements.");
        usernameInput.value = "";
    }
}

    //make function to check passwordInput, send alert if reqs not met
function checkPassword() {
    if (!passwordRegex.test(typedPassword)) {
        alert("Whoops, looks like you need to change your password to meet the character requirements.");
        passwordInput.value = "";
    } 
}
    //run both functions to check inputs
    checkUsername();
    checkPassword();

    //for successful input
    if (usernameRegex.test(typedUsername) && passwordRegex.test(typedPassword)) {
        alert("Success! Your username and password meet the character requirements.");
    }
    usernameInput.value = "";
    passwordInput.value = "";
}

submit.addEventListener('click', checkInputs);