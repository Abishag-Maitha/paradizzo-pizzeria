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
       let qty=this.quantity
       let itemQty=0;
       if (qty !="" ){
       itemQty =parseInt(qty)
       }
       else{
           itemQty=1
       }
    
    let unitPrice=parseInt((this.price).slice(4))
    return itemQty*unitPrice;
   }

   //Delivery fee
   let transport=0
   let checkbox=$("#delivery")
   checkbox.val(this.checked)
   checkbox.change(function(){
       if (this.checked){
        transport=200;
        $(this).prop("checked", transport)
       }
       else{
           transport=0
       }
   })

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
    <tr>
              <td>${pizzeria.size}</td>
              <td>${pizzeria.quantity}</td>
              <td>${pizzeria.crust}</td>
              <td>${pizzeria.toppings}</td>
              <td>${pizzeria.price}</td>
              <td class="lastcol">${pizzeria.calculatePrice()}.</td>
              
     </tr>
    `
    let tableBody=$("#table tbody")
    tableBody[0].innerHTML+=tableData

    //generating the totals
    let lastColumn=$("tr td.lastcol").text().split(".")
    let temp =[]
    for(var i=0; i<lastColumn.length-1; i++){
        temp.push(lastColumn[i]);
    }
    let num=temp.map(function(nums){
        return +nums
    })
    let total=num.reduce(function(summation,sum){
        return summation+sum
    }, 0)

    let tfoot=$("table tfoot")
    tfoot[0].innerHTML=`
    <tr>
            <td>total</td>
            <td>${total + transport}</td>
     </tr>
    `
   })

    });