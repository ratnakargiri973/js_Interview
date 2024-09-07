let pass = document.getElementById("password");

function passwordStrength(){
    let password = pass.value;
    let strengthIndicator = document.getElementById("strength");

    let strength = "weak";
    strengthIndicator.className = "weak";

    if(password.length > 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[\W]/.test(password)){
         strength = "Strong";
         strengthIndicator.className = "strong";
    }

    else if(password.length > 6 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password)){
        strength = "Meadium";
         strengthIndicator.className = "medium";
    }

    strengthIndicator.textContent = `Strength : ${strength}`;

}
pass.addEventListener("input", passwordStrength);