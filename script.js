$(document).ready(function(){
    $(".bt").click(function(){
        $(this).find("p").slideToggle(500).closest(".bt").find("img").slideToggle(700)
      
    });
   //creating a pizza object
   function Pizza(size, crust, toppings, price, quantity){
        this.size=size
        this.crust=crust
        this.toppings=toppings
        this.price=price
        this.quantity=quantity
   }        
   Pizza.prototype.calculatePrice=function(){

   }

   //getting user input
   let buttons=$(".card button")
   buttons.click(function(){
    let size=$(this).closest(".card").find("h5.card-title").text()
    let crust=$(this).closest(".card").find("select[name=crust]").val()
    let toppings=$(this).closest(".card").find("select[name=toppings]").val()
    let price=$(this).closest(".card").find("p span").text()
    let quantity=$(this).closest(".card").find("input").val()

    //creating a new object
    let pizzeria=new Pizza(size, crust, toppings,price, quantity)
    //generating a table
    let tableData=`
    
    `
   })

    });