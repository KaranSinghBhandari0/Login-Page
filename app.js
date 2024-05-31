let count = 0;
document.querySelector("#pass-icon").addEventListener("click", ()=> {
    if(count === 0) {
        document.querySelector("#input-password").type="text";
        count = 1;
    } else {
        document.querySelector("#input-password").type="password";
        count = 0;
    }
});

document.querySelector("#sign-in").addEventListener("click", ()=> {
    document.querySelector(".sign-in-div").style.display = "flex";
    document.querySelector(".login-box").style.display = "none";
});

document.querySelector("#log-in").addEventListener("click", ()=> {
    document.querySelector(".sign-in-div").style.display = "none";
    document.querySelector(".login-box").style.display = "flex";
});