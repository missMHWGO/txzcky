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
        // var image_logo = new Image();
        // image_logo.src = 'static/img/line.png';
        // image_logo.onload = function() {
        //     ctx.drawImage(this, 0, 0, 16 * rem, 1 * rem);
        // }
        ctx.strokeStyle = '#fff';
        ctx.beginPath();
        ctx.moveTo(0, 0.62 * rem);
        ctx.lineTo(7 * rem, 0.62 * rem);
        ctx.moveTo(0, 0.74 * rem);
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
            ctx.drawImage(this, 0.4 * rem, 1.6 * rem, 15.4 * rem, 3 * rem);
        }
        var image_person = new Image();
        image_person.src = 'static/img/person.png';
        image_person.onload = function() {
            ctx.drawImage(this, 0.5 * rem, 11.3 * em, 13 * rem, 1.35 * rem);
        }

        var saying = new Array("创业不仅仅是一场简单的游戏", "不怕万人阻挡，只怕自己投降", "一群人拼尽全力才有的辉煌", "很多人只是围观少数人的奇迹", "创业者是值得自豪的少数派", "勇于再造超乎想象的自己", "能不能不重要，想不想才重要", "坚持下去根本不需要理由","我们拓展了旁观者的想象力","我们正在改变触手可及的世界");
        var index = Math.floor(saying.length * Math.random());
        say = saying[index];
        $.get('static/font/access.php?lang="SSZH"').done(function() {
            setTimeout(function() {
                ctx.font = '0.6' * rem + 'px' + ' SSZH';
                ctx.fillText(say, 0.5 * rem, 13.6 * em);
            }, 500);

        });

        var image_code = new Image();
        image_code.src = 'static/img/code.png';
        image_code.onload = function() {
            ctx.drawImage(this, 12 * rem, 13 * em, 3.4 * rem, 3.5 * rem);
        }

        // $.get('static/font/access.php?lang="PingFang_Bold"').done(function() {
        //     setTimeout(function() {
        //         ctx.font = '0.47' * rem + 'px' + ' PingFang_Bold';
        //         ctx.fillText('扫描成为封面人物', 11.7 * rem, 15.65 * em);
        //     }, 500);

        // });

        var image_scan = new Image();
        image_scan.src = 'static/img/scan.png';
        image_scan.onload = function() {
            ctx.drawImage(this, 11.8 * rem, 15.3 * em, 3.57 * rem, 0.45 * rem);
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
            // document.getElementsByClassName('textbg')[0].style.height = win.innerHeight - 3.6 * rem + 'px';
            // document.getElementsByClassName('textbg')[0].style.width = win.innerWidth - 1.2 * rem + 'px';
            // document.getElementsByClassName('textbg')[1].style.height = win.innerHeight - 3.6 * rem + 'px';
            // document.getElementsByClassName('textbg')[1].style.width = win.innerWidth - 1.2 * rem + 'px';
        },
        bind: function() {
            $('#takePhoto')[0].onclick = function() {
                $("#file").click();

                $('#file').change(function(e) {
                    var file = e.target.files[0],
                        imageType = /image.*/;

                    if (!file.type.match(imageType)) {
                        alert('请选择一张图片！');
                        return;
                    }

                    // var reader = new FileReader();
                    // reader.onload = fileOnload;
                    // reader.readAsDataURL(file);
                });

                // function fileOnload(e) {
                //     var $img = $('<img>', { src: e.target.result });

                //     $img.load(function() {
                //         context.drawImage(this, 0, 0);
                //     });
                // }

            }

            $('#save')[0].onclick = function() {
                // $(".zc")[0].style.display = "none";
                $(".profile")[0].style.display = "none";
                // ctx.fillStyle = '#fff';
                ctx.textBaseline = 'bottom';

                // var zc = $(".zc");
                // $.get('static/font/access.php?lang="YGYDF"').done(function() {
                //     setTimeout(function() {
                //         ctx.font = '1.35' * rem + 'px' + ' YGYDF';
                //         ctx.fillText(zc.html().split("").join(" "), 0.41 * rem, 12 * em);
                        ctx.fillStyle = '#f4ba15'; //f4ba15
                        var profile = $(".profile")[0];
                        $.get('static/font/access.php?lang="SSZH"').done(function() {
                            setTimeout(function() {
                                ctx.font = '0.95' * rem + 'px' + ' SSZH';
                                if (profile.value == "") {
                                    profile.value = "请输入公司名和姓名";
                                }
                                ctx.fillText(profile.value, 0.45 * rem, 12.9 * em);

                                //var image = canvas.toDataURL("image/png").replace('image/png', 'image/octet-stream');
                                //window.location.href = image; 
                                var image = canvas.toDataURL();


                                $.post("./img.php", {
                                    'image': image
                                }).done(function(data) {
                                    //alert(data);
                                    // $("#download")[0].href = data;
                                    // $("#download img").click();
                                    alert('长按图片保存到本地！');
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

                                // var saveFile = function(data, filename) {
                                //     var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
                                //     save_link.href = data;
                                //     save_link.download = filename;

                                //     var event = document.createEvent('MouseEvents');
                                //     event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                                //     save_link.dispatchEvent(event);
                                // };

                                // var filename = (new Date()).getTime() + '.png';
                                // // download
                                // saveFile(image, filename);


                            }, 500);
                        });


                //     }, 500);
                // });

            }

            $('#share')[0].onclick = function() {
                $('#sharebg')[0].style.display = 'block';
                $('#sharetext')[0].style.display = 'block';
            }

            $('#sharebg')[0].onclick = function() {
                $('#sharebg')[0].style.display = 'none';
                $('#sharetext')[0].style.display = 'none';
            }

            var scale = (14.8 * rem) / (16 * em - 3.6 * rem);
            // alert(scale);
            var clip_width = 10 * rem;
            var clip_height = clip_width / scale;

            $("#clipArea").photoClip({
                size: [clip_width, clip_height],
                outputSize: [640, 640],
                file: "#file",
                view: "#view",
                ok: "#clipBtn",
                loadStart: function() {
                    //alert("照片读取中");
                },
                loadComplete: function() {
                    //alert("照片读取完成");
                    canvas.style.display = "none";
                    $("#text")[0].style.display = "none";
                    $(".bottombar")[0].style.display = "none";

                    $("#clipArea")[0].style.display = "block";
                    $("#clipBtn")[0].style.display = "block";
                },
                clipFinish: function(dataURL) {
                    //alert(dataURL);

                    //var url = URL.createObjectURL(file);
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

                        ctx.strokeStyle = '#fff';
                        ctx.beginPath();
                        ctx.moveTo(0, 0.62 * rem);
                        ctx.lineTo(7 * rem, 0.62 * rem);
                        ctx.moveTo(0, 0.74 * rem);
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
                            ctx.drawImage(this, 0.4 * rem, 1.6 * rem, 15.4 * rem, 3 * rem);
                        }
                        var image_person = new Image();
                        image_person.src = 'static/img/person.png';
                        image_person.onload = function() {
                            ctx.drawImage(this, 0.5 * rem, 11.3 * em, 13 * rem, 1.35 * rem);
                        }

                        ctx.font = '0.6' * rem + 'px' + ' SSZH';
                        ctx.fillText(say, 0.5 * rem, 13.6 * em);

                        var image_code = new Image();
                        image_code.src = 'static/img/code.png';
                        image_code.onload = function() {
                            ctx.drawImage(this, 12 * rem, 13 * em, 3.4 * rem, 3.5 * rem);
                        }

                        // $.get('static/font/access.php?lang="PingFang_Bold"').done(function() {
                        //     setTimeout(function() {
                        //         ctx.font = '0.47' * rem + 'px' + ' PingFang_Bold';
                        //         ctx.fillText('扫描成为封面人物', 11.7 * rem, 15.65 * em);
                        //     }, 500);

                        // });

                        var image_scan = new Image();
                        image_scan.src = 'static/img/scan.png';
                        image_scan.onload = function() {
                            ctx.drawImage(this, 11.8 * rem, 15.3 * em, 3.57 * rem, 0.45 * rem);
                        }
                    }
                }
            });

        }
    }
    index.init();
})(window);
