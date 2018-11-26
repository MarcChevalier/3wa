<?php

header('access-control-allow-origin: *');
header('Content-Type: application/json');

include 'classes/Database.class.php';



$database = new Database();

$sql = 'SELECT * FROM offices';

$execute = ['1'];

$offices = $database->selectAllInSql($sql, $execute);

if ($offices != false) {

    echo json_encode($offices);
	exit();

} else {

	echo 'Erreur 404 pas d\'office avec ce paramètre';
}


 ?>
<!-- http://localhost/API/recupCustomerWithKeyWord.php?name=atelier&api_key=xyz -->
