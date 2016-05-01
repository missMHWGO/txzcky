<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="description" content="腾讯众创">
    <meta name="keywords" content="腾讯众创">
    <!-- 全屏显示 WebApp，隐藏 Safari 导航栏以及工具栏 -->
    <meta content="yes" name="apple-mobile-web-app-capable" />
    <!-- 屏蔽iPhone下的拨号链接-->
    <meta content="telephone=no" name="format-detection" />
    <!-- 不让android识别邮箱 -->
    <meta content="email=no" name="format-detection" />
    <!-- 设置系统状态栏风格 -->
    <meta content="black" name="apple-mobile-web-app-status-bar-style">
    <title>腾讯众创</title>
    <script type="text/javascript" src="static/js/lib/jquery-1.7.1.min.js"></script>
    <script type="text/javascript" src="static/js/lib/zepto.js"></script>
    <script type="text/javascript" src="static/js/lib/veryless.js"></script>
    <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js "></script>
    <link rel="stylesheet" type="text/css" href="static/css/longmao.css">
</head>

<body>
    <canvas width="500" height="500"></canvas>
</body>
<script>
var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');
var img = new Image();
alert('bbb');
img.onload = function() {
    ctx.drawImage(img, 0, 0);
    var imgData = ctx.getImageData(0, 0, 600, 800);
    for (var y = 0; y < imgData.height; y++) {
        for (var x = 0; x < imgData.width; x++) {
            var i = (y * 4) * imgData.width + x * 4;
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3;
            imgData.data[i] = avg;
            imgData.data[i + 1] = avg;
            imgData.data[i + 2] = avg;
        }
    }
    ctx.putImageData(imgData, 0, 0, 0, 0, imgData.width, imgData.height);
}
img.crossOrigin = "Anonymous";
img.src = "http://7xqw4a.com1.z0.glb.clouddn.com/45196915200808052345001513237947625_003.jpg";
</script>

</html>
