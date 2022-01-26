const btn= document.querySelectorAll("button")
// console.log(btn)
btn.forEach(function(button,index){
  button.addEventListener("click",function(event){{
    var btnItem = event.target
    var product = btnItem.parentElement
    var productImg=product.querySelector("img").src
    var productName= product.querySelector("h2").innerText
    var productCost= product.querySelector("h3").innerText
     console.log(productImg,productName,productCost)

   addcart(productImg,productName,productCost)
  }})
})
function addcart(productImg,productName,productCost)
{
  var addtr = document.createElement("tr")
  var trcontent = productCost
  // addtr.innerHTML=trcontent
  var cartTable=document.querySelector("tbody")
//  console.log(cartTable)
  // cartTable.append(addtr)
}