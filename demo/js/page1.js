const shops = []
// fetch('http://localhost:3000/shop/get')
// .then(res => res.json())
// .then(res => shops = res)
$(document).ready(()=>{
    $(".shop").click(function(){
        fetch('http://localhost:3000/renderItems?' + new URLSearchParams({
            item: $(this).attr('shopid')
        }))
        .then( res => res.json())
        .then( res => {
            $(".items").empty()
            for (let i = 0; i < res.length; i++){
                $(".items").append(`
                    <div class="item-div" itemid = ${res[i]._id}>
                        <img src="media/default.png" alt="OOps! No image">
                        <div>
                            <p>${res[i].name}</p>
                            <p>${res[i].cost.$numberDecimal} грн.</p>
                        </div>
                        <input type="button" value="Add to Cart">
                    </div>`)
            }
        })
    })
})

