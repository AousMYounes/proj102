let userInfo=document.querySelector("#user_info");
let userData=document.querySelector("#user");
let links=document.querySelector("#links");
if(localStorage.getItem("username")){
    links.remove();
    userInfo.style.display="flex";
    userData.innerHTML=localStorage.getItem("username");
}
let logOutBtn=document.querySelector("#logout");
logOutBtn.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location="login.html";
    },1500)
})
// 
let ProductsInCart=localStorage.getItem("ProductsInCart");
let getUsername=localStorage.getItem("username");
let getEmail=localStorage.getItem("email");
// let getPassword=localStorage.getItem("password");
let getPhone=localStorage.getItem("phone");
let allProducts=document.querySelector(".USERS");
if(ProductsInCart){
    let item=JSON.parse(ProductsInCart);
    drawCartProducts(item);
}
function drawCartProducts(USERS){
    let Z=USERS.map((item)=>{
        return `
        <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Course</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">${item.id}</th>
            <td>${getUsername}</td>
            <td>${getEmail}</td>
            <td>${getPhone}</td>
            <td>${item.title}</td>
            <td>${item.price}$</td>
          </tr>
        </tbody>
      </table>
        `
    })
    allProducts.innerHTML=Z;
    };
   let saveBtn=document.querySelector("#savebtn");
   saveBtn.addEventListener("click",function save(){
    setTimeout(()=>{
        window.location="index.html";
    },1000)
   })
    
