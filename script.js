function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const msg = document.getElementById("message");

    if (user === "admin" && pass === "12345") {
        msg.style.color = "green";
        msg.innerText = "Login berhasil! 🌟";
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    } else {
        msg.style.color = "red";
        msg.innerText = "Username atau password salah ❌";
    }
}
