<?php
session_start();

include 'application/bdd_connection.php';
if(array_key_exists('id', $_GET) == false || !ctype_digit($_GET['id'])){
        header('Location: index.php');
        exit();
}

$query = $pdo->prepare
(
	'SELECT
        post.Id,
        Title,
        Content,
        CreationTimesTamp,
        FirstName,
        LastName
	  FROM
	    post
	  INNER JOIN
	    author
	  ON
	    post.Author_Id = author.id
	  WHERE
	    post.Id = ?'
		);

$query->execute([$_GET['id']]);


$post = $query->fetch(PDO::FETCH_ASSOC);
//var_dump($post);


$query = $pdo->prepare
		(
		    'SELECT
            NickName,
            Contents,
            CreationTimesTamp
	        FROM
	            Comment
	        WHERE
	            Post_Id = ?'
		);

$query->execute([$_GET['id']]);


$comments = $query->fetchAll(PDO::FETCH_ASSOC);


$template = 'show_post';
include 'layout.phtml';


?>
