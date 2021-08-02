// overlay of pizza
$(document).ready(function () {
  $(".port1").hover(() => {
    $(".add1").show({ opacity: 5 }, 5);
  },
    () => {
      $(".add1").hide({ opacity: 1 }, 5);
    }
  )

  $(".port2").hover(() => {
    $(".add2").show({ opacity: 1 }, 5);
  },
    () => {
      $(".add2").hide({ opacity: 1 }, 5);
    }
  )

  $(".port3").hover(() => {
    $(".add3").show({ opacity: 1 }, 5);
  },
    () => {
      $(".add3").hide({ opacity: 1 }, 5);
    }
  )

  $(".port4").hover(() => {
    $(".add4").show({ opacity: 1 }, 5);
  },
    () => {
      $(".add4").hide({ opacity: 1 }, 5);
    }
  )

})

// getting the form
$(document).ready(function () {
  $(".start").submit(function (event) {

    event.preventDefault();

    function flavor() {
      let pizzaFlavour = document.getElementById("flavor").value;
      return parseInt(pizzaFlavour);
    }
    function size() {
      let pizzaSize = document.getElementById("size").value;
      return parseInt(pizzaSize);
    }
    function crust() {
      let pizzaCrust = document.getElementById("crust").value;
      return parseInt(pizzaCrust);
    }
    function topping() {
      var pizzaTopping = document.getElementById("topping").value;
      return parseInt(pizzaTopping);
    }
    function number() {
      let pizzaNumber = document.getElementById("quantity").value;
      return parseInt(pizzaNumber);
    }

    //   calling the inputs
    let flavorName = $("#flavor option:selected").val()

    let sizeName = $("#size option:selected").val()

    let crustName = $("#crust option:selected").val()

    let toppingName = $("#topping option:selected").val()

    function Start(flavor, size, crust, topping, quantity) {
      this.newFlavor = flavor;
      this.newSize = size;
      this.newCrust = crust;
      this.newTopping = topping;
      this.newQuantity = quantity;
    }

    let userInput = new Start(flavor(), size(), crust(), topping(), number());

    let totalCost =
      userInput.newSize +
      userInput.newCrust +
      userInput.newTopping +
      userInput.newFlavor *
      userInput.newQuantity;

    // confirming delivery
    if (confirm('Make delivery')) {
      prompt(" Please enter your location");
      prompt(" Please enter your phone number");
      alert("Your pizza is enrout coming");
      alert("Here is your order summary: " + number() + ", " + flavorName + ",  " + sizeName + ", " + toppingName + ", " + crustName + " Your delivery fee is Ksh: 150.");
      alert("Your charges for Pizza" + (totalCost + 200));
    } else {
      alert("Order summary: " + number() + ", " + flavorName + ",  " + sizeName + ", " + toppingName + ", " + crustName);
      alert("Your charges for Pizza" + totalCost);
    }
    document.getElementById("start").reset();
  });
});