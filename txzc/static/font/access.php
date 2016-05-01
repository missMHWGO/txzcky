<?php
    header('Access-Control-Allow-Origin:*');
    switch ($_GET['lang']) {
    	case "SSHZ":
    		$file_SSHZ=file_get_contents("./SSHZ.TTF");
    		echo $file_SSHZ;
    		break;

    	case "PingFang_Bold":
    		$file_PingFang_Bold=file_get_contents("./PingFang_Bold.ttf");
    		echo $file_PingFang_Bold;
    		break;

    	case "YGYDF":
    		$file_YGYDF=file_get_contents("./YGYDF.ttf");
    		echo $file_YGYDF;
    		break;
    	
    	default:
    		$file_SSHZ=file_get_contents("./SSHZ.TTF");
    		echo $file_SSHZ;
    		break;
    }

?>