$(function () {
    autoPlayMusic();
    audioAutoPlay();
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


    var start = function () {
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

function audioAutoPlay() {
    var audio = document.getElementById('bg-music');
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
        audio.play();
    }, false);
}

// 音乐播放
function autoPlayMusic() {
    // 自动播放音乐效果，解决浏览器或者APP自动播放问题
    function musicInBrowserHandler() {
        musicPlay(true);
        document.body.removeEventListener('touchstart', musicInBrowserHandler);
    }

    document.body.addEventListener('touchstart', musicInBrowserHandler);

    // 自动播放音乐效果，解决微信自动播放问题
    function musicInWeixinHandler() {
        musicPlay(true);
        document.addEventListener("WeixinJSBridgeReady", function () {
            musicPlay(true);
        }, false);
        document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
    }

    document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
}

function musicPlay(isPlay) {
    var media = document.querySelector('#bg-music');
    if (isPlay && media.paused) {
        media.play();
    }
    if (!isPlay && !media.paused) {
        media.pause();
    }
}