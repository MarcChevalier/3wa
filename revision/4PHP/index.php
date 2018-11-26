<?php
$name = 'Marc';
include 'index.phtml';

if(empty($_POST) == false) {

	echo $_POST['nom'];


  if(empty($_POST) == false) {

	echo $_POST['nom'];

}
//monsite.fr/index.php?id=3&animal=canard récupérer animal dans l'url
if(array_key_exists('animal', $_GET) {
	echo $_GET['animal'];
}
//requêtes PDO
$pdo = new PDO
	(
		'mysql:host=localhost;dbname=blog;charset=UTF8',
		'root',
		'troiswa'
    );

$query = $pdo->prepare
(
    'SELECT
            *
        FROM
            Post'

);

$query->execute( [$_GET['Id']] );


$posts = $query->fetchAll(PDO::FETCH_ASSOC);

include 'index.phtml';


//home.php?Id=32; DROP DATABASE blog;

 ?>
