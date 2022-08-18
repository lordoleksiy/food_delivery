let cart = []
let sumItems = []
let data = {items:[]}
let sum = 0
if (sessionStorage.getItem("cart")){
    cart = JSON.parse(sessionStorage.getItem("cart")).arr
    cart.forEach(element => {
        data.items.push({id:element._id, count: 1, shopId: element.shopId})
    });
}



$(document).ready(()=>{
    createItems()
    sum = sum.toFixed(2)
    $(".price").text("Всього до сплати: " + sum + " грн.")

    $(".send").click(()=> sendInf())

    $(".spinner").on('change', function(){
        const one = parseFloat(cart[$(this).attr("idnum")].cost.$numberDecimal)
        const price = one*$(this).val()
        $(this).prev().text(price + " грн.")
        sumItems[$(this).attr("idnum")] = price
        sum = sumItems.reduce(function(sum, elem){return sum + parseFloat(elem)}, 0).toFixed(2)
        $(".price").text("Всього до сплати: " + sum + " грн.")
    })
})

async function sendInf(){
    const [name, email, phone, adress] = [$("#name").val(), $("#email").val(), $("#phone").val(), $("#adress").val()]
        if (!(name && email && phone && adress)){
            alert("Ви не ввели усі дані!")
            return
        }
    data['costumer'] = {name, email, phone, adress}
    data['sum'] = sum
    const rawResponse = await fetch('http://localhost:3000/order', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    });
    // const content = await rawResponse.json();
}

function createItems(){
    $(".items").empty()
    for(let k = 0; k < cart.length; k++){
        $(".items").append(`<div class="item-div">
                                <img src="media/default.png" alt="OOps! No image">
                                <div>
                                    <p>${cart[k].name}</p>
                                    <p>${cart[k].cost.$numberDecimal} грн.</p>
                                    <input type="number" value="1" min="1" max="99" class="spinner" idnum=${k}>
                                </div>
                            </div>`)
        sumItems[k] = cart[k].cost.$numberDecimal
        sum += parseFloat(cart[k].cost.$numberDecimal)
    }
}