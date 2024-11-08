const validateForm = () => {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let city = document.getElementById("city").value;

    let fnameError = document.getElementById("f-name");
    let lnameError = document.getElementById("l-name");
    let emailError = document.getElementById("fmail");
    let phoneError = document.getElementById("phoneno");
    let cityError = document.getElementById("fcity");

    if (!/^[a-zA-Z, '']+$/.test(fname)) {
        fnameError.textContent = "Please enter a valid first name.";
        return false;
    }

    if (fname.length <= 3 || fname.length >= 30) {
        fnameError.textContent = "First Name should be between 3 to 30 letters";
        return false;
    }

    if (!isNaN(fname)) {
        fnameError.textContent = "only character is allowed ";
        return false;
    }

    if (!/^[a-zA-Z, '']+$/.test(lname)) {
        lnameError.textContent = "Please enter a valid last name.";
        return false;
    }

    if (lname.length <= 3 || lname.length >= 30) {
        lnameError.textContent = "Last Name should be between 3 to 30 letters";
        return false;
    }

    if (!isNaN(lname)) {
        lnameError.textContent = "only character is allowed ";
        return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    }

    if (!/^\d{10}$/.test(phone)) {
        phoneError.textContent = "Please enter a valid phone number (10 digits).";
        return false;
    }

    if (isNaN(phone)) {
        phoneError.textContent = "Mobile number should be in digits only ";
        return false;
    }

    if (city && !/^[a-zA-Z\s]+$/.test(city)) {
        cityError.textContent = "Please enter a valid city name.";
        return false;
    }

    if (!isNaN(city)) {
        cityError.textContent = "only character is allowed ";
        return false;
    }

    return true;
}
