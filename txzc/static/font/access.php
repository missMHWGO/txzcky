<?php
    header('Access-Control-Allow-Origin:*');
    switch ($_GET['lang']) {
    	case "SSHZ":
    		$file_SSHZ=file_get_contents("./SSHZ.TTF");
    		echo $file_SSHZ;
    		break;
    	
    	default:
    		$file_SSHZ=file_get_contents("./SSHZ.TTF");
    		echo $file_SSHZ;
    		break;
    }

?>