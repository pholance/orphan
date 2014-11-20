$('.banner').unslider({
    speed: 500, //  The speed to animate each slide (in milliseconds)
    delay: 3000, //  The delay between slide animations (in milliseconds)
    keys: true, //  Enable keyboard (left, right) arrow shortcuts
    dots: true, //  Display dot navigation
    fluid: true              //  Support responsive design. May break non-responsive designs
});
$(".play-video").click(function () {
    console.log("点击了播放按钮");
    var video = $(this).attr("href");
    console.log("当前视频URL为：" + video);
    var videoPlayer = '<video class="width:100%;height:100%" controls autoplay src="' + video + '"></video>';
    $(".video-player").html(videoPlayer);
    return false;
});