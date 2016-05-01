<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx475b1829f02db10d", "50c7fc15b189ce1dda371c7286f6baf5");
$signPackage = $jssdk->GetSignPackage();
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>众创开园活动</title>
    </head>

    <body>
        <input type="button" value="选择图片" id="chooseImage">
        <canvas id="show"></canvas>
    </body>
    <script type="text/javascript" src="static/js/lib/jquery-1.7.1.min.js"></script>
    <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script>
    wx.config({
        debug: true,
        appId: '<?php echo $signPackage["appId"];?>',
        timestamp: '<?php echo $signPackage["timestamp"];?>',
        nonceStr: '<?php echo $signPackage["nonceStr"];?>',
        signature: '<?php echo $signPackage["signature"];?>',
        jsApiList: [
            'chooseImage', 'uploadImage', 'downloadImage'
        ]
    });
    </script>
    <script type="text/javascript" src="static/js/scripts/index.js"></script>
    <link rel="stylesheet" type="text/css" href="static/css/style.css">

    </html>
