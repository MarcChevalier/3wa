<?php
// login.php
session_start();
include 'application/lib.php';

if(empty($_POST) == false ) {

	include 'application/bdd_connection.php';
	$query = $pdo->prepare
		(
		    'SELECT
	            *
             FROM
              	users
             WHERE email = ?'
		);

	$query->execute([ $_POST['email'] ]);


	$user = $query->fetch(PDO::FETCH_ASSOC);

    if (verifyPassword($_POST['password'], $user['password']) && $user != false) {

    	$_SESSION['user']['firstname'] = $user['FirstName'];
		$_SESSION['user']['lastname'] = $user['LastName'];
        $_SESSION['user']['Email'] = $user['Email'];

        header('Location: index.php');
        exit();

    }

}


$template = 'login';
include 'layout.phtml';

?>
