$(document).ready(function () {
    $("div").hide()
    $("div:first").show()
    $("a").click(function(){
        $("a").removeClass("active");
        $(this).addClass("active");
        $("div").slideUp(1000)
        let id=$(this).text()
        $(`#${id}`).slideDown(1000)
        console.log($(`#${id}`))
    })

});