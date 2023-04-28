const elBack = document.querySelector('.js_back');
const LocalData = localStorage.getItem('token');
if (!LocalData) {
	location.replace('index.html');
}
elBack.addEventListener('click', (evt) => {
	evt.preventDefault();

	location.replace('index.html');
});
//   const users = async ()=>{
// 	const res =  await fetch("http://95.130.227.84:8075/api/v1/order/get-all")
// 	const data = await res.json()
// 	console.log(data);
//   }
//   users()

fetch("http://95.130.227.84:8075/api/v1/order/get-all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
	  "Authorization": "Asadbek" ,
	   "RefreshToken": "Asad7167"
    },
    
  })
  .then((res) =>res.json())
    .then((data) => {
      console.log(data);
    })
//   http://95.130.227.84:8075/api/v1/auth/refresh-token
  fetch("http://95.130.227.84:8075/api/v1/auth/refresh-token", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
	  "Authorization": "Asadbek" ,
	   "RefreshToken": "Asad7167"
    },
    
  })
  .then((res) =>res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
const data = [
	{
		id: 1,
		name: 'vali',
		location: 'Toshkent',
		tell: '998777777',
		date: '20/12/15',
		order_count: 2000,
		sum: null,
	},
	{
		id: 2,
		name: 'Ali',
		location: 'Mangit',
		tell: '998777777',
		date: '20/12/15',
		order_count: 2000,
		sum: null,
	},
];
const elTable = document.querySelector('table');
function myFunc(arr = data, node = elTable) {
	arr.forEach((el) => {
		node.innerHTML += `
<tr>
  <td>${el.id} ${el.name}</td>
  <td>${el.location} </td>
  <td>${el.tell}</td>
  <td> ${el.date} </td>
  <td>${el.order_count} </td>
  <td>${el.order_count*500 } ming</td>
</tr>

`;
	});
}
myFunc();
