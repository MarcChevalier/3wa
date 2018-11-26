<?php

header('access-control-allow-origin: *');
header('Content-Type: application/json');/* Toujours mettre ces deux lignes pour autoriser l'accès à notre api */

include 'classes/Database.class.php';

if (array_key_exists('id', $_GET) == false &&array_key_exists('api_key', $_GET) == false && $_GET['api_key'] != 'xyz' ) {

	echo 'pas de paramètre';
    exit();

}



$database = new Database();

$sql = 'SELECT * FROM customers WHERE customerNumber =?';

$execute = [$_GET['id']];

$customer = $database->selectOneInSql($sql, $execute);



if ($customer != false) {

    echo json_encode($customer);
	exit();

} else {

	echo 'Erreur 404 pas de customer avec cet Id';
}


 ?>
