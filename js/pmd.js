(function(){
    var timer = null;
    timer = setInterval(auto,1000);
    function auto(){
        $('ul').animate({marginTop:'-36px'},2000,'linear',function(){
            $('ul').children().first().slice(0,1).appendTo($('ul'));
            $('ul').css({'margin-top':0});
        })
    }
    $('ul').hover(function(){
        clearInterval(timer)
    },function(){
        timer = setInterval(auto,1000);
    })
})()