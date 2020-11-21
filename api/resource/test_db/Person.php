<?php
	require_once './db/dbtest_dbManager.php';
	
/*
 * SCHEMA DB Person
 * 
	{
		Birthday: {
			type: 'Date'
		},
		Name: {
			type: 'String'
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


$app->post('/contact',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'Birthday'	=> isset($body->Birthday)?$body->Birthday:'',
		'Name'	=> isset($body->Name)?$body->Name:'',
		
	);

	$obj = makeQuery("INSERT INTO person (_id, Birthday, Name )  VALUES ( null, :Birthday, :Name   )", $params, false);
    
	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/contact/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM person WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/contact/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM person WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/contact',	function () use ($app){
	makeQuery("SELECT * FROM person");
});


//CRUD - EDIT

$app->post('/contact/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'Birthday'	    => isset($body->Birthday)?$body->Birthday:'',
		'Name'	    => isset($body->Name)?$body->Name:''
	);

	$obj = makeQuery("UPDATE person SET  Birthday = :Birthday,  Name = :Name   WHERE _id = :id LIMIT 1", $params, false);
    
	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>