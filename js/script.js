$(document).ready(function () {
    $('#sidebar-btn').click(function () {
        $('#sidebar').toggleClass('visible');
    });
    //           var counter1=0;       

    //           $(".dropdown_pages").click(function(){
    //               $(".galery").hide();
    //               $(".blog").hide();

    //               counter1=0;
    //               if(counter1==0){
    //                   $(".pages").show();
    //              counter1=1;
    //               }else{
    //                    $(".pages").hide();
    //                    counter1=0;
    //               }  
    //               console.log("1ci"+ counter1);             
    //           })

    // var counter2=0;
    //            $(".dropdown_galery").click(function(){
    //                $(".pages").hide();
    //                $(".blog").hide();
    //                counter2=0;
    //               if(counter2==0){
    //                   $(".galery").show();
    //              counter2=1;
    //               }else{
    //                    $(".galery").hide();
    //                    counter2=0;
    //               }  
    //               console.log("2ci"+ counter2);              
    //           })

    //  var counter3=0;
    //           $(".dropdown_blog").click(function(){
    //                $(".pages").hide();
    //                $(".galery").hide();
    //                counter3=0;
    //               if(counter3==0){
    //                   $(".blog").show();
    //              counter3=1;
    //               }else{
    //                    $(".blog").hide();
    //                    counter3=0;
    //               }     
    //               console.log("3ci"+ counter3);           
    //           })

    //   $(".dropdown_pages").click(function(){
    //       console.log("P");
    //       $(".pages").addClass("show");
    //   })
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
});