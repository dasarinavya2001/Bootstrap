// header scroll code
$(document).ready(function(){
    $header_scroll =$(".header")
    $(window).scroll(function(){
      $header_scroll.addClass("header-fixed")
      $current =$(this).scrollTop()
      if($current > 0){
        $header_scroll.addClass("header-fixed")
      }else{
        $header_scroll.removeClass("header-fixed")
      }
    })
  })

//   header scroll java script
// function change_bg(){
//   var header_scroll = document.querySelector(".header")
//   var current = window.scrollY
//   if(current > 0){
//     header_scroll.classList.add("header-fixed")
//   }else{
//     header_scroll.classList.remove("header-fixed")
//   }
// }
// window.addEventListener("scroll",change_bg)


// ======counting on the numbers=========
let numbers = setInterval(updateVal,200)
let start = 0;
function updateVal(){
    let divVal = document.getElementById("count1");
    divVal.innerHTML = ++start;
    if(start == 15){
      clearInterval(numbers)
    }
}

let numbers_1 = setInterval(updateVal1,60)
let start_1 = 0;
function updateVal1(){
    let divVal_1 = document.getElementById("count2");
    divVal_1.innerHTML = ++start_1;
    if(start_1 == 50){
      clearInterval(numbers_1)
    }
}


