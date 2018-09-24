var mySwiper = new Swiper('.swiper-container', {
    autoplay: true, //可选选项，自动滑动
    loop:true,
    speed:1500
})

function change() {
    if (flag == 1) {
        $('#price').attr('src', './images/price2.png');
        $('#pText').html('价格降序');
    }
    if (flag == 2) {
        $('#price').attr('src', './images/price3.png');
        $('#pText').html('价格升序');
    }
    flag++;
    if (flag == 3) {
        flag = 1;
    }
}

function color(num) {
    $('#price').attr('src', './images/price1.png');
    $('#pText').html('价格');
    $('.nav ul li').css({
        color: '#aaa',
        fontWeight: ' normal'

    });
    $('.nav ul li').eq(num).css({
        color: 'goldenrod',
        fontWeight: 'bold'
    });
}