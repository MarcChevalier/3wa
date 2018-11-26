<?php
session_start();
//admin.php
if(array_key_exists('user', $_SESSION) == false) {
   header('Location: index.php');
   exit();
}

$pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
 'SELECT Title, FirstName, LastName, Name, post.Id
 FROM post
 INNER JOIN author ON author.Id = post.Author_id
 INNER JOIN category ON category.Id = post.Category_id'
);

$query->execute([]);

$requetedeladmin = $query->fetchAll(PDO::FETCH_ASSOC);
// var_dump($requetedeladmin);

$template = 'admin';

include 'layout.phtml';

?>
