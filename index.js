// var containerBox=document.getElementById("container");
// var items=document.querySelectorAll(".item");



function FlipMe(){
    // document.getElementById("item1").classList.toggle("item-rotate");
    var items=document.querySelectorAll(".item");
    var itemLength=document.querySelectorAll(".item").length;
    console.log(itemLength);
    for(let i=0;i<itemLength;i++){
        items[i].classList.toggle("item-rotate");
    }

}