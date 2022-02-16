document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get pasword
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail == 'ahmed@baaperbank.com' && userPassword == 'ahmed') {
        window.location.href = "/banking.html"
    }
    else {
        alert('ayta apnar cele na')
    }
});