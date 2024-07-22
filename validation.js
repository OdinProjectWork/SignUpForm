function validate_password(){
    let confirm_pass = document.getElementById('confirm_pwd').value;
    let pass = document.getElementById('pwd').value;

    if (pass !=confirm_pass){
        document.getElementById('confirm_pwd').setCustomValidity("Passwords must match")
       document.getElementById('message').innerHTML = "*passwords must match"
       document.getElementById('message').style.color = "Red"
       document.getElementById("pwd").style.borderColor = "Red"
       document.getElementById('confirm_pwd').style.borderColor = "Red"
    } else {
        document.getElementById('confirm_pwd').setCustomValidity("");
        document.getElementById("pwd").style.borderColor = ""
       document.getElementById('confirm_pwd').style.borderColor = ""
        document.getElementById('message').innerHTML = "";
    }
}