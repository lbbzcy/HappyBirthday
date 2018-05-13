$(function() {
    //设置起始日期
    countTime('2014/01/31 17:45', 'day', 'hour', 'minute', 'second');
    var days = $('#day').text();

    // 设置标题
    if (parseInt(days / 365) != 0) {
        $(document).attr("title", "在一起" + parseInt(days / 365) + "年,感谢相伴。");
    } else if (parseInt(days / 30) != 0) {
        $(document).attr("title", "在一起" + parseInt(days / 30) + "个月,感谢相伴。");
    } else
        $(document).attr("title", "在一起" + days + "天,感谢相伴。");

    //设置每一张图片对应的文字
    var says = new Array(
        "宝贝儿",
        "生日快乐"
    );


    var start = function() {
        var index = 0;
        var rate = 6000;
        $('#say').text(says[(index++) % says.length]);
        var _play = function () {
            $('#say').hide();
            $('#say').text(says[(index++) % says.length]);
            $('#say').fadeToggle();
            $('#carousel').carousel('next');
        };
        setInterval(_play, rate);
    }();

});