// On clicking remove button the item should be removed from DOM as well as localstorage.


let coffeeData = JSON.parse(localStorage.getItem("coffee")) || [];

let total =0;
coffeeData.map(function(elem){
    total = total + elem.price;
})

document.getElementById("total_amount").innerHTML = total;

coffee.forEach(function(elem,index) {

    let div = document.createElement("div");
    div.setAttribute = ("class","coffees")

    let img = document.createElement("img");
    img.setAttribute=("class","img");
    img.src = elem.image;

    let title  = document.createElement("h3");
    title.innerText = elem.title;

    let price  = document.createElement("h3");
    price.innerText = elem.price;



  let   btnremove = document.createElement("button")
  btnremove.setAttribute = ("id", "remove_coffee")
  btnremove.innerText = "remove"
  btnremove.addEventListener("click",function(){
      removeProduct(elem,index);
  })

  div.append(img,title,price,btnremove)
  document.getElementById("bucket").append(div)
    
});


function removeProduct(elem,index){
    coffeeData.splice(index,1);
    localStorage.setItem("coffee",JSON.stringify(coffeeData))
}
