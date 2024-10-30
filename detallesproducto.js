const params  = new URLSearchParams (window.location.search);
const namefromUrl =  params.get('name');


function getProduct  ( nam) {
    for  (let i = 0; i < products.length; i++) {
        let  map = data [i];
        if   (map ["Title"] === namefromUrl)  {
            let  product = new  Product(map["Title"], map["Price"], map["Description"], map["Size"], map["Color"], map["Image"], map["CategoryName"]),
            return  product;
        }
    

    }

function renderProduct() {
    let productt = getProduct()

    let h1Title =  document.getElementById("title");
    h1Title. innerHTML =  productt.Title;

    let h3Title =  document.getElementById("Price");
    h3Title. innerHTML =  productt.Price; 


    let p Description =  document.getElementById("Description");
    p.innerHTML  =  productt.Description;

    




}

}

renderPorduct()


