wx.ready(function() {
    (function(win) {
        var rem = win.innerWidth / 16;

        $('#takePhoto')[0].onclick = function() {
            wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function(res) {
                    var localIds = res.localIds; // 属性显示图片
                    wx.uploadImage({
                        localId: localIds[0], // 需要上传的图片的本地ID，返回选定照片的本地ID列表，localId可以作为img标签的src由chooseImage接口获得
                        isShowProgressTips: 1, // 默认为1，显示进度提示
                        success: function(res) {
                            var serverId = res.serverId; // 返回图片的服务器端ID
                            wx.downloadImage({
                                serverId: serverId, // 需要下载的图片的服务器端ID，由uploadImage接口获得
                                isShowProgressTips: 1, // 默认为1，显示进度提示
                                success: function(res) {
                                    var localId = res.localId; // 返回图片下载后的本地ID
                                    var img = new Image();
                                    img.src = localId;
                                    img.onload = function() {
                                        var c = $("#photo")[0];
                                        var ctx = c.getContext("2d");
                                        ctx.width = window.innerWidth;
                                        ctx.height = window.innerHeight;
                                        ctx.drawImage(this, 0, 0, ctx.width, ctx.height);
                                    }

                                }
                            });
                        }
                    });
                }
            });
        }
         $('#share')[0].onclick = function() {
            $("sharebg").css({
                "position":"absolute",
                "width":"100%",
                "height":"100%",
                "background": url('../img/share.png')
            });
         }
    })(window);
});
