<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1">
    <title>众创开园活动</title>
</head>
<body>
	<!--加载资源-->
    <div class="lazy_tip" id="lazy_tip"><span>1%</span>
        <br> 载入中......</div>
    <div class="lazy_cover"></div>
    <div class="resource_lazy hide"></div>
    <div class="pic_edit">
        <div id="clipArea"></div>
        <button id="clipBtn">确定</button>
    </div>
    <img src="" fileName="" id="hit" style="display:none;z-index: 9">
    <div id="cover"></div>
    <script src="static/js/lib/jquery-1.7.1.min.js"></script>
    <script src="static/js/lib/sonic.js"></script>
    <script src="static/js/lib/comm.js"></script>
    <script src="static/js/lib/hammer.js"></script>
    <script src="static/js/lib/iscroll-zoom.js"></script>
    <script src="static/js/lib/jquery.photoClip.js?v=1"></script>
    <script>
    var hammer = '';
    var currentIndex = 0;
    var body_width = $('body').width();
    var body_height = $('body').height();

    $("#clipArea").photoClip({
        width: body_width * 0.8125,
        height: body_width * 0.8125,
        file: "<?php echo $_GET['file'];?>",
        view: "#hit",
        ok: "#clipBtn",
        loadStart: function() {
            alert("照片读取中");
            $('.lazy_tip span').text('');
            $('.lazy_cover,.lazy_tip').show();
        },
        loadComplete: function() {
            alert("照片读取完成");
            $('.lazy_cover,.lazy_tip').hide();
        },
        clipFinish: function(dataURL) {
            $('#hit').attr('src', dataURL);
            saveImageInfo();
        }
    });

    function saveImageInfo() {
        var filename = $('#hit').attr('fileName');
        var img_data = $('#hit').attr('src');
        if (img_data == "") {
            alert('null');
        }
        alert(filename+'|'+img_data);

        $.post("http://tengxunzhongchuang.applinzi.com/txzc/index.php?image="+img_data, {
            image: img_data
        }, function(data) {
            if (data != '') {
                alert(data);
                alert('提交成功');
            }
        });
    }

    </script>
</body>
</html>