$(function () {
    var aa=["shake","flash","swing","bounce","tada","wobble","pulse","flip","flipInX","flipOutX","flipInY","flipOutY","fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight","fadeInUpBig","fadeInDownBig","fadeInLeftBig","fadeInRightBig","fadeOut","fadeOutUp","fadeOutDown","fadeOutLeft","fadeOutRight","fadeOutUpBig","fadeOutDownBig","fadeOutLeftBig","fadeOutRightBig","slideInDown","slideInLeft","slideInRight","slideOutUp","slideOutLeft","slideOutRight","bounceIn","bounceInDown","bounceInUp","bounceInLeft","bounceInRight","bounceOut","bounceOutDown","bounceOutUp","bounceOutLeft","bounceOutRight","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","lightSpeedIn","lightSpeedOut","hinge","rollIn","rollOut"]

    for(var i=0;i<aa.length;i++){
        $(".box").append("<div class='neirong'>"+aa[i]+"</div>")
    }
    $(".box").on("click",".neirong",function () {
        var index=$(this).index()
        for(var i=0;i<aa.length;i++){
            $(".neirong").removeClass();
            $(".box div").addClass("neirong")
            $(this).addClass("animated "+aa[index])
        }

    })
})