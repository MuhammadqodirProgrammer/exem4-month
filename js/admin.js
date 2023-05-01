
const elBack = document.querySelector('.js_back');
const accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');
let totalNumber = 0
if (!accessToken) {
	location.replace('index.html');
}
elBack.addEventListener('click', (evt) => {
	evt.preventDefault();
	location.replace('index.html');
});
const elTable = document.querySelector('.talbe_body');

async function  myFunc(arr , node = elTable) {
	node.innerHTML = ""
	node.innerHTML =`  <tr>
	<th>Ism familiya</th>
	<th>Manzil</th>
	<th>Tell</th>
	<th>Date</th>
	<th>Soni</th>
	<th>Narxi</th>
	<th class="dalete_td">O'chirish</th>
  </tr>`
 	arr.forEach((el) => {
		node.innerHTML += `
<tr>
  <td>${el.orderId} ${el.firstName +" "+el.lastName}</td>
  <td>${el.address} </td>
  <td>${el.phoneNumber}</td>
  <td> ${el.orderDate} </td>
  <td>${el.numberOfOrders} </td>
  <td> ${el.numberOfOrders*1000 >= 1000000 ? ` ${el.numberOfOrders*1000/1000000} million`  : ` ${el.numberOfOrders*1000} ming`}</td>
  <td class="dalete_td" >o'chirish <img class="delete_img" data-Order-id=${el.orderId} src="./img/trash.svg" alt="" width="25" height="40"></td>

  </tr>

`;
	});
}
// Get all started
console.log("accessToken:" ,accessToken);
const getAll =async ()=>{
const res = await fetch("http://95.130.227.84:8075/api/v1/order/get-all", {
    method: "GET",
	headers: {
	"Content-Type": "application/json",
		"Authorization": `Bearer ${accessToken}`,
	  }
    
  })
  const data = await res.json()
  myFunc(data.data.orderList ,elTable)
totalNumber =data.data.totalNumberOfOrderTools
}

getAll()

// Get all finished

// REFRESH TOKEN STARTED


  fetch("http://95.130.227.84:8075/api/v1/auth/refresh-token", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
	  "Authorization": `  ${accessToken}`,
	   "RefreshToken": `  ${refreshToken}`,
	   "tokenType": "Bearer "
    },
    // "tokenType": "Bearer "
  })
  .then((res) =>res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));

// REFRESH TOKEN FINISHED

// DELETE ORDER START


const deleteOrder = async (id) => {
    const res = await fetch("http://95.130.227.84:8075/api/v1/order/" + id , {
		method:"DELETE",
		headers:{
			"Content-Type": "application/json",
			"Authorization": `Bearer ${accessToken}`,
		}
	} );
const data = await res.json()
if(data.success){
	getAll()
}
 
  };
  elTable.addEventListener("click" , (evt)=>{
	evt.preventDefault()
	// event.target.matches('.dropdown-content')
	if(evt.target.matches(".delete_img")){
	const deleteId = evt.target.dataset.orderId
	deleteOrder(deleteId)
	}
	})


// DELETE ORDER FINISHED


