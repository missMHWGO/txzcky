<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx1cb78b78e62f759d", "f77111bfdc5dbeb7f1e38819e255536a");
$signPackage = $jssdk->GetSignPackage();
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1">
        <title>腾讯众创空间（武汉）</title>
        <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-77429264-1', 'auto');
        ga('send', 'pageview');
    </script>

    </head>

    <body>
        <div id="container">
            <div id="bg"></div>
            <canvas id="photo"></canvas>
            <div id="text">
                <input type="text" class="profile" placeholder="请输入公司名和姓名">
            </div>
        </div>
        <div id="clipArea"></div>
        <button id="clipBtn">
            <p>确&nbsp;&nbsp;定</p>
        </button>
        <div id="view"></div>
        <div id="wait"></div>
        <img id="download">
        <div id="click"></div>
        <ul class="bottombar">
            <li>
                <img src="static/img/takePhoto.png">
                <input type="file" id="file">
                <span id="takePhoto">照片</span>
            </li><li>
                <img src="static/img/save.png">
                <span id="save">保存</span>
            </li><li>
                <img src="static/img/share.png">
                <span id="share">分享</span></li>
        </ul>
        <div id="sharebg"></div>
        <div>
            <p id="sharetext">点击右上角，分享照片海报</p>
        </div>
        <link rel="stylesheet" type="text/css" href="static/css/style.css">
        <script type="text/javascript" src="static/js/lib/jquery-2.1.3.min.js"></script>
        <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
        <script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
        <script type="text/javascript" src="static/js/lib/veryless.js"></script>
        <script type="text/javascript" src="static/js/lib/zepto.js"></script>
        <script type="text/javascript" src="static/js/lib/spin.min.js"></script>
        <script src="static/js/lib/iscroll-zoom.js"></script>
        <script src="static/js/lib/hammer.js"></script>
        <script src="static/js/lib/lrz.all.bundle.js"></script>
        <script src="static/js/lib/jquery.photoClip.min.js"></script>
        <script>
        wx.config({
            debug: false,
            appId: '<?php echo $signPackage["appId"];?>',
            timestamp: '<?php echo $signPackage["timestamp"];?>',
            nonceStr: '<?php echo $signPackage["nonceStr"];?>',
            signature: '<?php echo $signPackage["signature"];?>',
            jsApiList: [
                'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'
            ]
        });
        wx.ready(function(){
            var title = '腾讯众创空间（武汉）',
                    desc = '众创时代，每个人都是代言人，快来免费制作属于自己的高大上的封面吧',
                    link = 'http://card.mugeda.com/campaigns/572e13d0a3664e912900091c/20160508034909/572eef65a3664eeb3e000028/index.html?t=1496571031&custom=&crid=&s=1&from=groupmessage&isappinstalled=0',
                    imgUrl = 'http://7xqw4a.com1.z0.glb.clouddn.com/zclogo.jpg';

                //分享到朋友圈
                wx.onMenuShareTimeline({
                    title: title, // 分享标题
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    success: function() {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });

                //分享给好友
                wx.onMenuShareAppMessage({
                    title: '腾讯众创空间（武汉）', // 分享标题
                    desc: desc, // 分享描述
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function() {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });

                //分享到QQ
                wx.onMenuShareQQ({
                    title: title, // 分享标题
                    desc: desc, // 分享描述
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    success: function() {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });

                //分享到腾讯微博
                wx.onMenuShareWeibo({
                    title: title, // 分享标题
                    desc: desc, // 分享描述
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    success: function() {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });

                //分享到QQ空间
                wx.onMenuShareQZone({
                    title: title, // 分享标题
                    desc: desc, // 分享描述
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    success: function() {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });
            })
        </script>
        <script type="text/javascript" src="static/js/scripts/index.js"></script>
    </body>

    </html>
