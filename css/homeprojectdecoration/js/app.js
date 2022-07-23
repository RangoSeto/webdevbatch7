$(document).ready(function(){
    // Start Header Section
    $(".navbuttons").click(function(){
        $(this).toggleClass("crossxs");
    });

   $(window).scroll(function(){
    let getscroll = $(this).scrollTop();

    if(getscroll >= 20){
        $(".navbar").addClass("navsmall");
    }else{
        $(".navbar").removeClass("navsmall");
    }
   })

    // End Header Section

    // Start Properties Section
    $(".propertylists").click(function(){
        $(this).addClass("activeitems").siblings().removeClass("activeitems");

        let getattrfilter = $(this).attr("data-filter");
        // console.log(getattrfilter);
        if(getattrfilter === "all"){
            $(".filters").show("slide",500);
        }else{
            $(".filters").not("."+getattrfilter).hide("slide",500);
            $(".filters").filter("."+getattrfilter).show("slide",500);
        }
    })
    // End Properties Section
});