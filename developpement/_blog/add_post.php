<?php
session_start();
include 'application/bdd_connection.php';

if(array_key_exists('user', $_SESSION) == false) {
   header('Location: index.php');
   exit();
}





if(empty($_POST['title']) == false) {
    var_dump($_POST);

    $author = $_POST['author'];
    $category = $_POST['category'];
    $content = $_POST['contents'];
    $title = $_POST['title'];

    $query = $pdo->prepare
    		(
    		    ' INSERT INTO
                    post
                    (Title, Contents, Author_id, Category_id, CreationTimesTamp)
                VALUES
                    (?, ?, ?, ?, NOW()) '
    		);


$query->execute([$title, $content, "5", "5"]);



    //header('Location: index.php');
        //exit();

}


$query = $pdo->prepare
(
	'SELECT Id, FirstName, LastName FROM author'

);

$query->execute([]);

$author = $query->fetchAll(PDO::FETCH_ASSOC);
//var_dump ($author);


$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
	'SELECT Id, Name FROM category'

);

$query->execute([]);

$category = $query->fetchall(PDO::FETCH_ASSOC);
//var_dump($category);




$template ='add_post';

include 'layout.phtml';


?>
