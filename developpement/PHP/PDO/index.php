<?php
include 'utilities.php';


$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
	'SELECT contactFirstName, contactLastName FROM customers'
);

$query->execute();

$customers = $query->fetchall(PDO::FETCH_ASSOC);


// pour ecrire Carine Shmitt

echo $customers[0]['contactFirstName'].' '.$customers[0]['contactLastName'];
var_dump($customers);

$query = $pdo->prepare
(
	'SELECT firstName, lastName FROM employees WHERE employeeNumber = 1002'
);

$query->execute();

$employee = $query->fetch(PDO::FETCH_ASSOC);

var_dump($employee);

include 'index.phtml';


 ?>
