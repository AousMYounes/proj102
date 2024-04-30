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
let allProducts=document.querySelector(".products");
let products=[
    {
      id:1,
      title:"Front-End Course",
      price:50,
      imageUrl:"images/front-end2024555 new.jpg",
      context:"HTML5-CSS3-BOOTSTRAP-JAVA SCRIPT-JSON-AJAX-GITHUB",
      follow:12.4
    },
    {
        id:2,
        title:"Back-End Course",
        price:40,
        imageUrl:"images/BACKEND2024.jpg",
        context:"PHP-Laravel Framework-MYSQL-Hosting",
        follow:6.3
    },
    {
        id:3,
        title:"Diploma-Graphic Course",
        price:50,
        imageUrl:"images/diploma graphic 20245555555.jpg",
        context:"Photoshop-Iilustrator-InDesign",
        follow:12.3
    },
    {
        id:4,
        title:"PLC Course",
        price:60,
        imageUrl:"images/plc 20244455555.jpg",
        context:"Auto Machine Controller",
        follow:7.1
    },
    {
        id:5,
        title:"React&Nextjs Course",
        price:45,
        imageUrl:"images/react&nextjs.jpg",
        context:"Web Developer",
        follow:2.7
    },
    {
        id:6,
        title:"Cyber Security Course",
        price:90,
        imageUrl:"images/Security2024 new.jpg",
        context:"Ethical Hacking-Network-Pythone-Social Engineer-Reverse Engineer",
        follow:9.7
    }
];
function drawItems(){
let y=products.map((item)=>{
    return `
    <div class="product_item">
        <img class="product_item_img" src="${item.imageUrl}" alt="this is picture" width="500" height="300">
        <div class="product_item_desc">
            <h2>${item.title}</h2>
            <p>${item.context}</p>
            <div class="product-info">
                <i class="active fa fa-star fa-sm"></i>
                <i class="active fa fa-star fa-sm"></i>
                <i class="active fa fa-star fa-sm"></i>
                <i class="active fa fa-star fa-sm"></i>
                <i class="far fa-star fa-sm"></i>
                <span>${item.follow}K</span>
                <h3>Price: ${item.price}$</h3>
            </div>
        </div>
        <div class="product_item_action">
            <button class="add_to_cart" onClick="addToCart(${item.id})">Add To Cart</button>
            <i class="fa fa-heart fav"></i>
        </div>
    </div>
    `
})
allProducts.innerHTML=y;
};
drawItems();
let cartProductDiv=document.querySelector(".carts_products div");
let badge=document.querySelector(".badge");
// let addedItem=[];
let addedItem=localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];
if(addedItem){
    addedItem.map(item => {
    cartProductDiv.innerHTML += `<p>${item.title}</p>`;  
    })
    badge.style.display="block";
    badge.innerHTML=addedItem.length;
};

    if(localStorage.getItem=("username")){
        function addToCart(id){
            let chooseItem=products.find((item)=>item.id===id);
            cartProductDiv.innerHTML+=`<p>${chooseItem.title}</p>`;
            addedItem=[...addedItem,chooseItem];
            localStorage.setItem("ProductsInCart",JSON.stringify(addedItem));
            let cartProductsLenght=document.querySelectorAll(".carts_products div p");
           //  console.log(cartProductsLenght.length);
           badge.style.display="block";
           badge.innerHTML=cartProductsLenght.length;
           }
    }else{
        window.location="login.html";
    };
    



let shoppingCartIcon=document.querySelector(".shopping_cart");
let cartProducts=document.querySelector(".carts_products")
shoppingCartIcon.addEventListener("click",opencart);
function opencart(){
    if(cartProductDiv.innerHTML!==""){
        if(cartProducts.style.display=="block"){
            cartProducts.style.display="none"; 
        }else{
            cartProducts.style.display="block";
        }
    }
};
