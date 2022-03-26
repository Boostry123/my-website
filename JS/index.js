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

$(".fa-file-pdf").on("mouseover", function () {
    $(".fa-file-pdf").animate({opacity:1});
});
$(".fa-file-pdf").on("mouseout", function () {
    $(".fa-file-pdf").animate({opacity:0.5});
});
$(".fa-file-pdf").on("click", function(){
    $(".resumeImgShow").toggleClass("show");
})

//footer with contact
$(".icons-footer .fa-linkedin").on("click", function(){
    $(".contactShow-linkedin").toggleClass("show");
})
$(".icons-footer .fa-gmail").on("click", function(){
    $(".contactShow-gmail").toggleClass("show");
})

// $(".fa-file-pdf").animate({opacity:1});

// text animation on top of page

//download button for resume



