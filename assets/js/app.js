const kunEl = document.querySelector(".kun");
const tunEl = document.querySelector(".tun");

kunEl.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.style.backgroundColor = "white";
    localStorage.setItem("mode", "day");
});

tunEl.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.style.backgroundColor = "black";
    localStorage.setItem("mode", "night");
});

// Saqlangan rejimni yuklash
document.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode == "night") {
        document.body.style.backgroundColor = "black";
    } else {
        document.body.style.backgroundColor = "white";
        localStorage.setItem("mode", "day");  // Standart rejim sifatida kun rejimini saqlash
    }
});
