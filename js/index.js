// 鼠标进入导航栏显示黄色背景图片，并且白色“边框”隐藏，字体颜色变黑
$('.nav .a').mouseenter(function(){
    $(this).css('background','url(images/index-img/nav_bg1.jpg) no-repeat').css('color','#000')
    .find('span').css('opacity',0).parent().prev().find('span').css('opacity',0)
    $(this).siblings('.a').css('background','').css('color','#fff')
})
// 鼠标离开导航栏黄色背景图片去掉，并且白色“边框”显示，字体颜色变白
$('.nav .a').mouseleave(function(){
    $(this).css('background','').css('color','#fff').find('span').css('opacity',1)
    .parent().prev().find('span').css('opacity',1)
})



// 鼠标进入7个nana，对应下标的ul显示
$('.nav .nana').mouseenter(function(){
    var num = $(this).index()
    $('.nav_items >.w> ul').eq(num).css('display','block').siblings().css('display','none')
    .parents().css('display','block')
})

$('.nav_father').mouseleave(function(){
    $('.nav_items').css('display','none')
    $('.nav .a').css('background','').css('color','#fff').find('span').css('opacity',1)
    .parent().prev().find('span').css('opacity',1)

})

$('.nav_items >.w> ul').mouseenter(function(){
    var num = $(this).index()
    $('.nav .a').eq(num-1).css('background','url(images/index-img/nav_bg1.jpg) no-repeat').css('color','#000')
    .find('span').css('opacity',0).parent().prev().find('span').css('opacity',0)
})

$('.meiyou').mouseenter(function(){
    $('.nav_items').css('display','none')
})






// header部分广告区域的轮播图
var header_lbtshu = 0
var header_lbt = window.setInterval(function(){
    header_lbtshu++
    $('.news_right_btm ul').css('left',- header_lbtshu * 1041 +'px')
    if(header_lbtshu == 5) {
        header_lbtshu = 0
        $('.news_right_btm ul').css('left',- header_lbtshu * 1041 +'px')
    }
},4000)