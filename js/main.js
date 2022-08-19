
var listData = JSON.parse(localStorage.getItem('listData'));
if (listData === null ){
  listData =[];
}
const dData = document.getElementById("displayData");
const displayData = ()=> {
  var trs = '';
   listData.forEach((el)=>{
    trs  +=  `<tr>
    <td> ${el.name}</td>
    <td>${el.email} </td>
    <td>${el.phone} </td>
    <td>${el.age} </td>
  </tr> `
   })
  dData.innerHTML += trs
}
displayData()
// const listData =[];
const clearData = ()=>{
 var inputs = document.querySelectorAll(".form-control")
 inputs.forEach((el)=>{
   el.value = ""
 })
}

/////////////////

////////////////////////
const getData= () =>{
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("mail").value;
  let age = document.getElementById("age").value;
  listData.push({
    name:name,
    phone:phone,
    email:email,
    age:age,
  });
  var trs = '';
   trs  +=  `<tr>
    <td> ${name}</td>
    <td>${phone} </td>
    <td>${phone} </td>
    <td>${age} </td>
  </tr> `
  clearData();
  dData.innerHTML += trs

  localStorage.setItem("listData", JSON.stringify(listData));
  // displayData()
};

