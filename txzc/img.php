<?php
$image = $_POST['image'];
$image = str_replace('data:image/png;base64,', '', $image);
$data = base64_decode($image);

$stor = new SaeStorage();
$bucket = 'image';
$filename = 'image_'.time().'.png';
$stor->write($bucket , $filename , $data);
//echo($stor->read($bucket , $filename));//获取文件的内容
echo($stor->getUrl($bucket,$filename));//获取文件的绝对地址
?>