<?php
	require_once './db/dbtest_dbManager.php';
	
/*
 * SCHEMA DB Company
 * 
	{
		Industry: {
			type: 'String'
		},
		Name: {
			type: 'String', 
			required : true
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		Contact: {
			type: Schema.ObjectId,
			ref : "Company"
		},
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/company',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'Industry'	=> isset($body->Industry)?$body->Industry:'',
		'Name'	=> $body->Name,
		
		'Contact' => isset($body->Contact)?$body->Contact:'',
	);

	$obj = makeQuery("INSERT INTO company (_id, Industry, Name , Contact )  VALUES ( null, :Industry, :Name , :Contact   )", $params, false);
    
	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/company/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM company WHERE _id = :id LIMIT 1", $params);

});

//CRUD - FIND BY Contact

$app->get('/company/findByContact/:key',	function ($key) use ($app){	

	$params = array (
		'key'	=> $key,
	);
	makeQuery("SELECT * FROM company WHERE Contact = :key", $params);
	
});
	
//CRUD - GET ONE
	
$app->get('/company/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM company WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/company',	function () use ($app){
	makeQuery("SELECT * FROM company");
});


//CRUD - EDIT

$app->post('/company/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'Industry'	    => isset($body->Industry)?$body->Industry:'',
		'Name'	    => $body->Name,
		'Contact'      => isset($body->Contact)?$body->Contact:'' 
	);

	$obj = makeQuery("UPDATE company SET  Industry = :Industry,  Name = :Name  , Contact=:Contact  WHERE _id = :id LIMIT 1", $params, false);
    
	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>