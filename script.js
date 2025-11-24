let registerSection = document.getElementById("register-section");
let loginSection = document.getElementById("login-section");
let goToRegister = document.getElementById("go-to-register");
let goToLogin = document.getElementById("go-to-login");

goToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("register-section").classList.remove("active");
    document.getElementById("login-section").classList.add("active");
});

goToRegister.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("login-section").classList.remove("active");
    document.getElementById("register-section").classList.add("active");
});

function togglePassword(id, icon) {
    const input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}