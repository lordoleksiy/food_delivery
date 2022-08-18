const cart = new Set()
let allItems = [] 

$(document).ready(()=>{
    $(".shop").click(function(){
        $(".shop").css("backgroundColor", "white")
        $(this).css("backgroundColor", "gray")
        fetch('http://localhost:3000/renderItems?' + new URLSearchParams({
            item: $(this).attr('shopid')
        }))
        .then( res => res.json())
        .then( res => {
            allItems = res
            $(".items").empty()
            createItems(res)
            $(".addButton").click(function(){
                cart.add(allItems.find(item => item._id == $(this).attr('itemid')))
                $("header p").text(`Товарів в корзині: ${cart.size}`)
            })
        })
    })
    $("a").click(()=>{
        const arr = Array.from(cart)
        sessionStorage.setItem("cart", JSON.stringify({arr}))
    })
})

function createItems(res){
    for (let i = 0; i < res.length; i++){
        $(".items").append(`
            <div class="item-div" itemid = ${res[i]._id}>
                <img src="media/default.png" alt="OOps! No image">
                <div>
                    <p>${res[i].name}</p>
                    <p>${res[i].cost.$numberDecimal} грн.</p>
                </div>
                <input type="button" value="Додати до кошика" class="addButton" itemid = ${res[i]._id}>
            </div>`)
    }
}

