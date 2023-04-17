const elLogin =document.querySelector(".login-box")
const elLoginForm =document.querySelector(".login_form")
const elBtnAdmin =document.querySelector(".admin_btn")
const elWrapper =document.querySelector(".wrapper")
const elOverlay =document.querySelector(".overlay")
const elAdminLogin =document.querySelector(".modal_admin")
const elClose =document.querySelector(".js_close")

elBtnAdmin.addEventListener("click",(evt)=>{
evt.preventDefault()
console.log(evt.target);

elOverlay.style.display ="flex"
elLogin.style.display ="none"
})

elClose.addEventListener("click",(evt)=>{
    evt.preventDefault()
    elOverlay.style.display ="none"
    elLogin.style.display ="block"
})

elAdminLogin.addEventListener("submit",(evt)=>{
    evt.preventDefault()
    console.log(evt);
    location.replace("admin.html")
})
