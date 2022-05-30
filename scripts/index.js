// Add the coffee to local storage with key "coffee"

 async function makeApi(){
    try{
        let url = "https://masai-mock-api.herokuapp.com/coffee/menu";

        let res = await fetch(url);
        let data = await res.json();
        console.log(data)
        appendProduct(data.menu.data)
       
    } catch(err){
        console.log('err',err)

    }
}

makeApi()



let coffeeData = JSON.parse(localStorage.getItem("coffee")) || [];




//appendProduct()
function appendProduct(data){
    data.forEach(function(elem)  {

        let main = document.createElement("div")

          

          let img = document.createElement("img");
          img.src= elem.image;

          let name = document.createElement("h3");
          name.innerText = elem.title;

          let price = document.createElement("h3");
          price.innerText = elem.price;

          let add = document.createElement("button");
          add.setAttribute("id","add_to_bucket")
          add.innerText  ="Add Bucket"
          

          add.addEventListener("click",function(){

            addtobucket(elem)
          })

          main.append(img,name,price,add)

          menu.append(main)

        
    });

}


function addtobucket(elem){
    
    coffeeData.push(elem);

    localStorage.setItem("coffee", JSON.stringify("coffeeData "))

    if(coffeeData.length == null){

        document.getElementById("coffee_count").innerHTML = null;


    }
    else{
        document.getElementById("coffee_count").innerHTML = (coffeeData.length)
    }





}
