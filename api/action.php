<?php
//dependency import
require 'properties.php';
require 'lib/Slim/Slim.php';
require 'security/Security.php';

//init Slim Framework
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();
$app->add(new \Security($app));
require 'security/Login.php';
require 'security/ManageUser.php';

//resources
	//db test_db
		require('./resource/test_db/custom/CompanyCustom.php');
		require('./resource/test_db/Company.php');
		require('./resource/test_db/custom/PersonCustom.php');
		require('./resource/test_db/Person.php');
		require('./resource/test_db/custom/UserCustom.php');
		require('./resource/test_db/User.php');
	

$app->run();


?>
