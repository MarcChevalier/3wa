<?php
session_start();

//var_dump($_SESSION);


//echo '<p>Mon site de Déglingo</p>';

if( array_key_exists('user', $_SESSION)) {

	echo '<p>Bonjour '.$_SESSION['user']['firstname'].' '.$_SESSION['user']['lastname'].'</p>';


}
include 'application/bdd_connection.php';

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
            post.author_Id = Author.id
        ORDER BY
            CreationTimestamp DESC'
);

$query->execute();


$posts = $query->fetchAll(PDO::FETCH_ASSOC);


$template = 'index';
include 'layout.phtml';
?>
