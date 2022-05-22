// icons fade

$(".fa-brands").hover(function () {
    $(this).toggleClass("fa-fade");
}
);



// circle     
$(".circle img").on("mouseover", function () {
    $(".circle img").animate({ opacity: "1" })
})
$(".circle img").on("mouseout", function () {
    $(".circle img").animate({ opacity: "0.5" })
});



$(".circle-aboutme img").on("mouseover", function () {
    $(".circle-aboutme img").animate({ opacity: "1" })
})
$(".circle-aboutme img").on("mouseout", function () {
    $(".circle-aboutme img").animate({ opacity: "0.5" })
});

// resume button



//footer with contact
$(".icons-footer .fa-linkedin").on("click", function(){
    $(".contactShow-linkedin").toggleClass("showIt");
})
$(".icons-footer .fa-gmail").on("click", function(){
    $(".contactShow-gmail").toggleClass("showIt");
})





