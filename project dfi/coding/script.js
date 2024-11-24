document.getElementById("OrderButton").onclick = function (event) {
    let foodprice = parseInt(document.getElementById ("food").value);
    let drinkprice = parseInt(document.getElementById ("drink").value);
 
    let totalprice = foodprice + drinkprice;
 
    let discount = 0;
 
    if (totalprice > 1500) {
         discount = totalprice * 0.1;
         totalprice -= discount;
 
    }
 
    const resultDiv = document.getElementById("result")
    if (totalprice > 0) {
       resultDiv.innerHTML = `
          total : $${foodprice + drinkprice}<br>
          discount : $${discount.toFixed(2)}<br>
          Final Price : $${totalprice.toFixed(2)}
          `;
 
    } else {
          resultDiv.innerHTML = "Please select both Food and drink"
    }
 }
 
 $('.order').click(function (e) {

    let button = $(this);

    if(!button.hasClass('animate')) {

        button.addClass('animate');

        setTimeout(() => {

            button.removeClass('animate');

        }, 10000);

    }

})







