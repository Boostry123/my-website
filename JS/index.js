// icons fade

$(".fa-brands").hover(function () {
    $(this).toggleClass("fa-fade");
}
);



// circle     
$(".circle").on("mouseover", function () {
    $(".circle").animate({ opacity: "1" })
})
$(".circle").on("mouseout", function () {
    $(".circle").animate({ opacity: "0.5" })
});





// resume button



//footer with contact
$(".icons-footer .fa-linkedin").on("click", function(){
    $(".contactShow-linkedin").toggleClass("showIt");
})
$(".icons-footer .fa-gmail").on("click", function(){
    $(".contactShow-gmail").toggleClass("showIt");
})





