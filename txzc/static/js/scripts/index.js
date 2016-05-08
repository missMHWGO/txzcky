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
        ctx.drawImage(this, 0, 0, canvas.width + 3, canvas.height + 3);

        ctx.strokeStyle = '#fff';
        ctx.beginPath();
        ctx.moveTo(0.04 * rem, 0.62 * rem);
        ctx.lineTo(7 * rem, 0.62 * rem);
        ctx.moveTo(0.04 * rem, 0.74 * rem);
        ctx.lineTo(7 * rem, 0.74 * rem);
        ctx.moveTo(8.93 * rem, 0.62 * rem);
        ctx.lineTo(16 * rem, 0.62 * rem);
        ctx.moveTo(8.93 * rem, 0.74 * rem);
        ctx.lineTo(16 * rem, 0.74 * rem);
        ctx.stroke();

        ctx.fillStyle = '#fff';
        ctx.font = '0.33' * rem + 'px' + ' 宋体';
        ctx.textBaseline = 'bottom';

        ctx.fillText('2016年', 7.46 * rem, 0.53 * em);

        var image_logo = new Image();
        image_logo.src = 'static/img/logo.png';
        image_logo.onload = function() {
            ctx.drawImage(this, 9.5 * rem, 1 * rem, 5 * rem, 1 * rem);
        }
        var image_txlogo = new Image();
        image_txlogo.src = 'static/img/txlogo.png';
        image_txlogo.onload = function() {
            ctx.drawImage(this, 0.35 * rem, 1.6 * rem, 15.4 * rem, 3 * rem);
        }
        var image_person = new Image();
        image_person.src = 'static/img/person.png';
        image_person.onload = function() {
            ctx.drawImage(this, 0.5 * rem, 11.25 * em, 13 * rem, 1.35 * rem);
        }

        var saying = new Array("《创业不仅仅是一场简单的游戏》", "《不怕万人阻挡，只怕自己投降》", "《一群人拼尽全力才有的辉煌》", "《很多人只是围观少数人的奇迹》", "《创业者是值得自豪的少数派》", "《勇于再造超乎想象的自己》", "《能不能不重要，想不想才重要》", "《坚持下去根本不需要理由》", "《我们拓展了旁观者的想象力》", "《我们正在改变触手可及的世界》");
        var index = Math.floor(saying.length * Math.random());
        say = saying[index];
        $.get('static/font/access.php?lang="SSZH"').done(function() {
            setTimeout(function() {
                ctx.font = '0.6' * rem + 'px' + ' SSZH';
                ctx.fillText(say, 0.3 * rem, 13.6 * em);
            }, 500);

        });

        var image_code = new Image();
        image_code.src = 'static/img/code.png';
        image_code.onload = function() {
            ctx.drawImage(this, 12 * rem, 12.9 * em, 3.4 * rem, 3.5 * rem);
        }

        var image_scan = new Image();
        image_scan.src = 'static/img/scan.png';
        image_scan.onload = function() {
            ctx.drawImage(this, 11.7 * rem, 15.3 * em, 3.7 * rem, 0.277 * em);
        }

    }

    var index = {
        init: function() {
            var self = this;
            self.view();
            self.bind();
        },
        view: function() {
            canvas.style.width = win.innerWidth - 1.2 * rem + 'px'; //14.8rem
            canvas.style.height = win.innerHeight - 3.6 * rem + 'px'; //16em-3.6rem

            document.getElementsByClassName("profile")[0].focus();
        },
        bind: function() {
            $('#takePhoto')[0].onclick = function() {
                ga('send', 'event', 'startBtn', 'clickStartMake');

                $("#file").click();

                $('#file').change(function(e) {
                    var file = e.target.files[0],
                        imageType = /image.*/;

                    if (!file.type.match(imageType)) {
                        alert('请选择一张图片！');
                        return;
                    }

                });

            }

            $('#save')[0].onclick = function() {
                ga('send', 'event', 'saveBtn', 'clickSave');

                var opts = {
                    lines: 13 // The number of lines to draw
                        ,
                    length: 28 // The length of each line
                        ,
                    width: 14 // The line thickness
                        ,
                    radius: 42 // The radius of the inner circle
                        ,
                    scale: 1 // Scales overall size of the spinner
                        ,
                    corners: 1 // Corner roundness (0..1)
                        ,
                    color: '#fff' // #rgb or #rrggbb or array of colors
                        ,
                    opacity: 0.25 // Opacity of the lines
                        ,
                    rotate: 0 // The rotation offset
                        ,
                    direction: 1 // 1: clockwise, -1: counterclockwise
                        ,
                    speed: 1 // Rounds per second
                        ,
                    trail: 60 // Afterglow percentage
                        ,
                    fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
                        ,
                    zIndex: 2e9 // The z-index (defaults to 2000000000)
                        ,
                    className: 'spinner' // The CSS class to assign to the spinner
                        ,
                    top: '50%' // Top position relative to parent
                        ,
                    left: '50%' // Left position relative to parent
                        ,
                    shadow: false // Whether to render a shadow
                        ,
                    hwaccel: false // Whether to use hardware acceleration
                        ,
                    position: 'absolute' // Element positioning
                }
                var wait = document.getElementById('wait');
                var spinner = new Spinner(opts).spin(wait);

                $(".profile")[0].style.display = "none";
                ctx.textBaseline = 'bottom';

                var profile = $(".profile")[0];
                $.get('static/font/access.php?lang="SSZH"').done(function() {
                    setTimeout(function() {
                        ctx.font = '0.95' * rem + 'px' + ' SSZH';
                        if (profile.value == "") {
                            profile.value = "请输入公司名和姓名";
                        }
                        ctx.fillStyle = '#f4ba15'; //f4ba15
                        ctx.fillText(profile.value, 0.45 * rem, 12.9 * em);
                        ctx.fillStyle = '#fff';

                        var image = canvas.toDataURL();

                        $.post("./img.php", {
                            'image': image
                        }).done(function(data) {
                            spinner.stop();
                            alert('图片生成完毕，长按保存到本地！');
                            $("#bg")[0].style.zIndex = "-1";
                            canvas.style.display = "none";
                            $("#text")[0].style.display = "none";
                            $("#download").css({
                                'width': canvas.style.width,
                                'height': canvas.style.height,
                                'margin-left': '0.6' * rem + 'px',
                                'margin-top': '0.65' * rem + 'px',
                                'display': 'block'
                            });
                            $("#download")[0].src = data;

                        });

                    }, 500);
                });

            }

            $('#share')[0].onclick = function() {
                ga('send', 'event', 'shareBtn', 'clickShare');

                $('#sharebg')[0].style.display = 'block';
                $('#sharetext')[0].style.display = 'block';

            }

            $('#sharebg')[0].onclick = function() {
                $('#sharebg')[0].style.display = 'none';
                $('#sharetext')[0].style.display = 'none';
            }

            var scale_clip = (14.8 * rem) / (16 * em - 3.6 * rem);
            var clip_width = 10 * rem;
            var clip_height = clip_width / scale_clip;

            $("#clipArea").photoClip({
                size: [clip_width, clip_height],
                outputSize: [640, 640],
                file: "#file",
                view: "#view",
                ok: "#clipBtn",
                loadStart: function() {},
                loadComplete: function() {
                    canvas.style.display = "none";
                    $("#text")[0].style.display = "none";
                    $(".bottombar")[0].style.display = "none";

                    $("#clipArea")[0].style.display = "block";
                    $("#clipBtn")[0].style.display = "block";
                },
                clipFinish: function(dataURL) {
                    var img = new Image();
                    img.src = dataURL;

                    $("#clipArea")[0].style.display = "none";
                    $("#clipBtn")[0].style.display = "none";

                    canvas.style.display = "block";
                    $("#text")[0].style.display = "block";
                    $(".bottombar")[0].style.display = "block";

                    img.onload = function() {
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

                        var image_haspic = new Image();
                        image_haspic.src = 'static/img/haspic.png';
                        image_haspic.onload = function() {
                            ctx.drawImage(this, 0, 0, canvas.width, canvas.height);

                            ctx.strokeStyle = '#fff';
                            ctx.beginPath();
                            ctx.moveTo(0.04 * rem, 0.62 * rem);
                            ctx.lineTo(7 * rem, 0.62 * rem);
                            ctx.moveTo(0.04 * rem, 0.74 * rem);
                            ctx.lineTo(7 * rem, 0.74 * rem);
                            ctx.moveTo(8.93 * rem, 0.62 * rem);
                            ctx.lineTo(16 * rem, 0.62 * rem);
                            ctx.moveTo(8.93 * rem, 0.74 * rem);
                            ctx.lineTo(16 * rem, 0.74 * rem);
                            ctx.stroke();

                            ctx.fillStyle = '#fff';
                            ctx.font = '0.33' * rem + 'px' + ' 宋体';
                            ctx.textBaseline = 'bottom';

                            ctx.fillText('2016年', 7.46 * rem, 0.53 * em);

                            var image_logo = new Image();
                            image_logo.src = 'static/img/logo.png';
                            image_logo.onload = function() {
                                ctx.drawImage(this, 9.5 * rem, 1 * rem, 5 * rem, 1 * rem);
                            }
                            var image_txlogo = new Image();
                            image_txlogo.src = 'static/img/txlogo.png';
                            image_txlogo.onload = function() {
                                ctx.drawImage(this, 0.35 * rem, 1.6 * rem, 15.4 * rem, 3 * rem);
                            }
                            var image_person = new Image();
                            image_person.src = 'static/img/person.png';
                            image_person.onload = function() {
                                ctx.drawImage(this, 0.5 * rem, 11.2 * em, 13 * rem, 1.35 * rem);
                            }

                            ctx.font = '0.6' * rem + 'px' + ' SSZH';
                            ctx.fillText(say, 0.3 * rem, 13.6 * em);

                            var image_code = new Image();
                            image_code.src = 'static/img/code.png';
                            image_code.onload = function() {
                                ctx.drawImage(this, 12 * rem, 12.9 * em, 3.4 * rem, 3.5 * rem);
                            }

                            var image_scan = new Image();
                            image_scan.src = 'static/img/scan.png';
                            image_scan.onload = function() {
                                ctx.drawImage(this, 11.7 * rem, 15.3 * em, 3.7 * rem, 0.45 * rem);
                            }

                            document.getElementsByClassName("profile")[0].focus();
                        }

                    }
                }
            });

            var canvas_height_len = canvas.style.height.length;

            $("#click").css({
                'width': canvas.style.width,
                'height': parseInt(canvas.style.height.substring(0, canvas_height_len - 2)) * 0.7 + 'px',
                'margin-left': '0.6' * rem + 'px',
                'margin-top': '0.65' * rem + 'px',
                'display': 'block',
                'position': 'absolute'
            });

            $("#click")[0].onclick = function() {
                $("#file").click();

                $('#file').change(function(e) {
                    var file = e.target.files[0],
                        imageType = /image.*/;

                    if (!file.type.match(imageType)) {
                        alert('请选择一张图片！');
                        return;
                    }

                });
            }

        }
    }
    index.init();
})(window);
