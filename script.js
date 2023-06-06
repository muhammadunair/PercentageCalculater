const form = document.querySelector("#calculateForm");
const resultScr = document.querySelector("#result");


form.addEventListener('submit', function(event) {
    event.preventDefault()
    const { totalbill , discount , persons } = event.target;
    const valu1 = totalbill.value;
    const value2 = (discount.value)/100;
    const value3 = persons.value;
    const totalValue = valu1 - (valu1 * value2 ) ;
    const subtotal = totalValue / value3
    resultScr.innerHTML = `Per Person Bill is ${subtotal}`;

})



