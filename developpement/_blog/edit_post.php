<?php
session_start();
//edit_post.php
if(array_key_exists('user', $_SESSION) == false) {
   header('Location: index.php');
   exit();
}

include 'application/bdd_connection.php';
if(empty($_POST)) {

	if(!array_key_exists('id', $_GET) OR !ctype_digit($_GET['id']))
    {
       header('Location: index.php');
       exit();
    }

    $query = $pdo->prepare(
        	'
            SELECT
                Id,
                Title,
                Content
            FROM
                post
            WHERE
                Id = ?
        	');
    $query->execute([$_GET['id']]);
    $post = $query->fetch(PDO::FETCH_ASSOC);


	$template = 'edit_post';
	include 'layout.phtml';

} else {

	$query = $pdo->prepare(
        	'
            UPDATE
                post
            SET
                Title = ?,
                Content = ?
            WHERE
                Id = ?
        '
        );

    $query->execute([$_POST['title'], $_POST['content'], $_POST['postId']]);

		header('Location: admin.php');
    exit();



}





?>
