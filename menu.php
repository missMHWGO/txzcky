<?php

$appid = "wx475b1829f02db10d";
$appsecret = "50c7fc15b189ce1dda371c7286f6baf5";
$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$appid&secret=$appsecret";

$output = https_request($url);
$jsoninfo = json_decode($output, true);

$access_token = $jsoninfo["access_token"];


$jsonmenu = '{
      "button":[
      {
            "name":"天气",
           "sub_button":[
            {
               "type":"view",
               "name":"北京天气",
               "url":"http://1.tengxunzhongchuang.applinzi.com/txzc/test.html"
            },
            {
               "type":"view",
               "name":"上海天气",
               "url":"http://1.tengxunzhongchuang.applinzi.com/test/index.html"
            },
            {
               "type":"click",
               "name":"广州天气",
               "key":"tqgz"
            },
            {
               "type":"click",
               "name":"深圳天气",
               "key":"tqsz"
            },
            {
                "type":"view",
                "name":"本地天气",
                "url":"http://m.hao123.com/a/tianqi"
            }]
      

       },
       {
           "name":"装逼",
           "sub_button":[
            {
               "type":"view",
               "name":"装逼简介",
               "url":"http://1.tengxunzhongchuang.applinzi.com/txzc/txzc.php"
            },
            {
               "type":"view",
               "name":"趣味游戏",
               "url":"http://1.tengxunzhongchuang.applinzi.com/txzc/index.html"
            },
            {
                "type":"view",
                "name":"讲个笑话",
                "url":"http://1.tengxunzhongchuang.applinzi.com/txzc/gray.php"
            }]
       

       }]
 }';


$url = "https://api.weixin.qq.com/cgi-bin/menu/create?access_token=".$access_token;
$result = https_request($url, $jsonmenu);
var_dump($result);

function https_request($url,$data = null){
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
    if (!empty($data)){//如果$data不为空
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
    }
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($curl);
    curl_close($curl);
    return $output;
}

?>