// $(document).ready(function(){
//     $("#newForm").submit(function(event){

//         event.preventDefault();
//         function flavor(){
//             let pizzaFlavour =document.getElementById("flavor").value;
//             return parseInt(pizzaFlavour);
//         }
//     })
//     $("#form1").submit(function(event){

//         event.preventDefault();
//         function topping() {
//             let pizzaTopping = document.getElementById("topping").value;
//             return parseInt(pizzaTopping)
//         }
//     })
//     $("#form2").submit(function(event){

//         event.preventDefault();
//         function crust(){
//             let pizzaCrust = document.getElementById("crust").value;
//             return parseInt(pizzaCrust);
//         }
//     });
//     $("#form3").submit(function(event){

//         event.preventDefault();
//         function size(){
//             let pizzaSize = document.getElementById("size").value;
//             return parseInt(pizzaSize);
//         }
//     });
//     function Number(){
//         let pizzaNumber = document.getElementById("quantity").value;
//         return parseInt(pizzaNumber);
//     }


//     let flavorName = $("#flavor option: selected").text();
    
//     let toppingName = $("#topping option: selected").text();

//     let crustName = $("#crust option: selected").text();
    
//     let sizeName = $("#size option: selected").text();
//     let number = $("#quantity").val();

//     // place order

//    function Order(flavor, topping, crust,size, quantity){
//        this.newFlavor = flavor;
//        this.newTopping = topping;
//        this.newCrust = crust;
//        this.newSize = size;
//        this.newQuantity = quantity;
//    }

//    let userInput = new Order(flavor(), topping(), crust(), size(), quantity());
//    let totalCost =
//    userInput.newSize +
//    userInput.newCrust +
//    userInput.newTopping +
//    userInput.newFlavor *
//    userInput.newQuantity;

//    if(confirm('would you like delivery?')){
//        prompt("enter location");
//    }
// })

// // check price

// let price, totalPrice;
// switch (flavor){
//     case flavor = "chickenPizza":
//         switch(size) {
//             case size = "small":
//                 price = 500;
//                 if (topping === "topping1"){
//                     totalPrice = (price * number) ;
//                 } else if (topping === "topping2"){
//                     totalPrice = (price * number);
//                 } else if (topping === "topping3"){
//                     totalPrice = (price * number);
//                 } else if (topping === "topping4") {
//                     totalPrice = (price * number);
//                 }
//                 break;
//                 case size = "medium":
//                     price = 800;

//         }
// }