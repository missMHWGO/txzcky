;
(function(win) {
    var rem = win.innerWidth / 16;
    var em = win.innerHeight / 16;
    var canvas = document.getElementById('photo');
    var ctx = canvas.getContext('2d');
    canvas.width = win.innerWidth;
    canvas.height = win.innerHeight;

    var say;

    var image_nopic = new Image();
    image_nopic.src = 'static/img/nopic.png';
    image_nopic.onload = function() {
        ctx.drawImage(this, 0, 0, canvas.width, canvas.height);

        var image_logo = new Image();
        image_logo.src = 'static/img/logo.png';
        image_logo.onload = function() {
            ctx.drawImage(this, 0.7 * rem, 0.7 * rem, 4 * rem, 0.72 * rem);
        }
        var image_txlogo = new Image();
        image_txlogo.src = 'static/img/txlogo.png';
        image_txlogo.onload = function() {
            ctx.drawImage(this, 0.5 * rem, 2 * rem, 15.2 * rem, 2.7 * rem);
        }
        var image_code = new Image();
        image_code.src = 'static/img/code.jpg';
        image_code.onload = function() {
            ctx.drawImage(this, 0.7 * rem, 13.6 * em, 3.1 * rem, 3.1 * rem);
        }
        ctx.fillStyle = '#fff';
        ctx.font = '0.44' * rem + 'px' + ' lantingMedium';
        ctx.textBaseline = 'bottom';

        var saying = new Array("哈哈", "呵呵", "呀呀", "嘿嘿", "啦啦", "啊啊", "哦哦", "噢噢");
        var index = Math.floor(saying.length * Math.random());
        say = saying[index];
        ctx.fillText(say, 0.7 * rem, 12.9 * em);
        ctx.fillText('腾讯众创空间（武汉）', 0.7 * rem, 13.4 * em);
    }

    var index = {
        init: function() {
            var self = this;
            self.view();
            self.bind();
        },
        view: function() {
            canvas.style.width = win.innerWidth - 1.2 * rem + 'px';
            canvas.style.height = win.innerHeight - 3.6 * rem + 'px';
            // document.getElementsByClassName('textbg')[0].style.height = win.innerHeight - 3.6 * rem + 'px';
            // document.getElementsByClassName('textbg')[0].style.width = win.innerWidth - 1.2 * rem + 'px';
            // document.getElementsByClassName('textbg')[1].style.height = win.innerHeight - 3.6 * rem + 'px';
            // document.getElementsByClassName('textbg')[1].style.width = win.innerWidth - 1.2 * rem + 'px';
        },
        bind: function() {
            $('#takePhoto')[0].onclick = function() {
                wx.chooseImage({
                    count: 1, // 默认9
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function(res) {
                        var localId = res.localIds[0].toString(); // 属性显示图片
                        var img = new Image();                       
                        img.onload = function() {
                            // canvas.width = this.width; 
                            // canvas.height = this.height; 
                            ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
                            var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
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
                            alert("hahahha");
                            var image_logo = new Image();
                            image_logo.src = 'static/img/logo.png';
                            image_logo.onload = function() {
                                ctx.drawImage(this, 0.7 * rem, 0.7 * rem, 4 * rem, 0.72 * rem);
                            }
                            var image_txlogo = new Image();
                            image_txlogo.src = 'static/img/txlogo.png';
                            image_txlogo.onload = function() {
                                ctx.drawImage(this, 0.5 * rem, 2 * rem, 15.2 * rem, 2.7 * rem);
                            }
                            var image_code = new Image();
                            image_code.src = 'static/img/code.jpg';
                            image_code.onload = function() {
                                ctx.drawImage(this, 0.7 * rem, 13.6 * em, 3.1 * rem, 3.1 * rem);
                            }

                            ctx.fillStyle = '#fff';
                            ctx.font = '0.44' * rem + 'px' + ' lantingMedium';
                            ctx.textBaseline = 'bottom';

                            ctx.fillText(say, 0.7 * rem, 12.9 * em);
                            ctx.fillText('腾讯众创空间（武汉）', 0.7 * rem, 13.4 * em);
                        }
                        //img.crossOrigin = "Anonymous";
                        img.src = localId;
                    }
                });
            }

            $('#save')[0].onclick = function() {
                // $(".profile")[0].style.display = "none";
                // $(".profile")[1].style.display = "none";
                ctx.fillStyle = '#fff';
                ctx.font = '1.6' * rem + 'px' + ' lantingSpecial';
                ctx.textBaseline = 'bottom';

                var profile = $(".profile");
                ctx.fillText(profile[0].value, 0.7 * rem, 8 * em);
                ctx.fillText(profile[1].value, 0.7 * rem, 9 * em);
                
                //var canvas = document.getElementById('photo');
                var image = canvas.toDataURL("image/png").replace('image/png', 'image/octet-stream');
                //window.location.href = image;

                var saveFile = function(data, filename) {
                    var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
                    save_link.href = data;
                    save_link.download = filename;

                    var event = document.createEvent('MouseEvents');
                    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                    save_link.dispatchEvent(event);
                };

                var filename = (new Date()).getTime() + '.png';
                // download
                saveFile(image, filename);
            }

            $('#share')[0].onclick = function() {
                $('#sharebg')[0].style.display = 'block';
                $('#sharetext')[0].style.display = 'block';
            }

        }
    }
    index.init();
})(window);
