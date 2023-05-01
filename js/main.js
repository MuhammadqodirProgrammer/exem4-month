const elLogin =document.querySelector(".login-box")
const elLoginForm =document.querySelector(".login_form")
const elBtnAdmin =document.querySelector(".admin_btn")
const elWrapper =document.querySelector(".wrapper")
const elOverlay =document.querySelector(".overlay")
const elClose =document.querySelector(".js_close")
// user data 

const elName = document.getElementById("user_name")
const elLastName = document.getElementById("user_lname")
const elOrderCount = document.getElementById("order_count")
const elPhone = document.getElementById("user_phone")
const elAddres = document.getElementById("user_addres")
const elOrderDate = document.getElementById("order_date")
// admin data 
const elAdminLogin =document.querySelector(".modal_admin")
const adminName = document.querySelector(".admin_name")
const adminParol = document.querySelector(".admin_parol")
// result start
const elResArea = document.querySelector(".result")
const elResAreaBody = document.querySelector(".res_content")
const elResClose =document.querySelector(".res_close")
// result start

// send form 

elLoginForm.addEventListener("submit" , (evt)=>{
evt.preventDefault()

const userObj = {
    'address':elAddres.value, 
    'firstName':elName.value, 
    'lastName':elLastName.value, 
    'numberOfOrders':+elOrderCount.value, 
    'phoneNumber':elPhone.value, 
    "orderDate":elOrderDate.value
 }

fetch("http://95.130.227.84:8075/api/v1/order/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObj),
  })
  .then((res) =>res.json())
    .then((data) => {
      console.log(data.success);
        if(data.success){
          elResArea.style.display ="flex"
          elResAreaBody.innerHTML ="Sizning zakasingiz qabul qilindi 🧐 adminimiz tez orada sz bilan bog'lanadi"
      }else{
          elResArea.style.display ="flex"
          elResAreaBody.innerHTML ="Sizning zakasingiz qabul qilinmadi nmadir hato ☹"  
      }
    })
    .catch((err) => console.log(err));

   elAddres.value ="" 
    elName.value ="" 
    elLastName.value ="" 
    elOrderCount.value ="" 
    elPhone.value ="" 
    elOrderDate.value =""
})
document.querySelector(".otmen").addEventListener("click" , (evt)=>{
  evt.preventDefault()
  elAddres.value ="" 
  elName.value ="" 
  elLastName.value ="" 
  elOrderCount.value ="" 
  elPhone.value ="" 
  elOrderDate.value =""
})

elAdminLogin.addEventListener("submit" ,(evt)=>{
    evt.preventDefault()
    console.log(evt);
    console.log(adminName);
    const adName =adminName.value
    const adPas =adminParol.value
    const adminObj = {
        'name':adminName.value,
       'password':adminParol.value
    }
    console.log(adminObj);
    fetch("http://95.130.227.84:8075/api/v1/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminObj),
      }).then(res =>res.json()).then((data)=>{
        if(data.data){
          // turgunboyev791@gmail.com
            if(adName == "turgunboyev791@gmail.com" && adPas =="asad7167"){
              localStorage.setItem("accessToken" ,data.data.accessToken)
              localStorage.setItem("refreshToken" ,data.data.refreshToken)
                location.replace("admin.html")
            }
            console.log(data);

        }
    }).catch(err =>console.log(err))

})
// admin btn code

elBtnAdmin.addEventListener("click",(evt)=>{
evt.preventDefault()
elOverlay.style.display ="flex"
elLogin.style.display ="none"
})

elClose.addEventListener("click",(evt)=>{
    evt.preventDefault()
    elOverlay.style.display ="none"
    elLogin.style.display ="block"
})

elResClose.addEventListener("click",(evt)=>{
    evt.preventDefault()
    elResArea.style.display ="none"
    elLogin.style.display ="block"
})

elPhone.defaultValue ="+998"
    


