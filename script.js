function validatePassword() {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    if(password.length < 8) {
        alert("Heslo musí obsahovat alespoň 8 znaků.");
        return false;
    }

    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(!regex.test(password)) {
        alert("Heslo musí obsahovat alespoň jedno velké písmeno, jedno malé písmeno a jedno číslo.");
        return false;
    }
    if(password !== confirm_password) {
        alert("Hesla se neshodují");
        return false;
    }

    alert("Vytvořil jste heslo!");
    return true;
}