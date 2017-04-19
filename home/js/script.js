$(document).ready(function () {
    $('#sidebar-btn').click(function () {
        console.log($('#sidebar').width());
        $('#sidebar-btn').toggleClass('visible1');
        $('#sidebar').toggleClass('visible');
    });    
    var accordion = document.querySelector('#sidebar');
    accordion.addEventListener('click', function (event) {
        var item = event.target;       
        if (item.nextElementSibling.style.display == 'block') {
            $(".pages").hide();
            $(".galery").hide();
            $(".blog").hide();
        } else {
            $(".pages").hide();
            $(".galery").hide();
            $(".blog").hide();
            item.nextElementSibling.style.display = 'block';
        }
    });
    

    for(var i=0; i<3; i++){
        var ellipse=createEle
$(".ellipse").appendTo("ellipses");

console.log("a")
    }
});