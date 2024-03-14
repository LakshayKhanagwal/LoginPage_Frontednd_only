var a = 1
document.getElementById("pass_eye").src = "images/hide.png"

function eye() {
    if (a == 1) {
        document.getElementById("pass_eye").src = "images/view.png"
        document.getElementById("password").type = "text"
        a = 0
    } else {
        document.getElementById("pass_eye").src = "images/hide.png"
        document.getElementById("password").type = "password"
        a = 1
    }
}

function login() {
    alert("Under Process")
}