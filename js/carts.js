let ProductsInCart=localStorage.getItem("ProductsInCart");
let allProducts=document.querySelector(".products");
if(ProductsInCart){
    let item=JSON.parse(ProductsInCart);
    drawCartProducts(item);
}
function drawCartProducts(products){
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
                <button class="add_to_cart" onClick="RemoveFromCart(${item.id})">Remove From Cart</button>
            </div>
        </div>
        `
    })
    allProducts.innerHTML=y;
    };
    // let productInCart = localStorage.getItem("productInCart")
    // let allProducts = document.querySelector(".products")

if(ProductsInCart) {
    let item = JSON.parse(ProductsInCart)
    createproductInCart(item)
}

function createproductInCart(product) {
    let y = product.map(item=>{
        return`
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
                <button class="add_to_cart" onClick="RemoveFromCart(${item.id})">Remove From Cart</button>
            </div>
        </div>
        `
    })
    allProducts.innerHTML = y
}

function RemoveFromCart(id) {
    let ProductsInCart = JSON.parse(localStorage.getItem("ProductsInCart"))
    let productIndex = ProductsInCart.findIndex(item => item.id === id)

    if (productIndex !== -1) {
        ProductsInCart.splice(productIndex, 1)
        localStorage.setItem("ProductsInCart", JSON.stringify(ProductsInCart))
        createproductInCart(ProductsInCart)
    }
}
