<?php

if(empty($_POST) == false) {

	var_dump($_POST);


include 'config.php';

$query = $pdo->prepare
		(
		    ' INSERT INTO
                users
                (firstname, lastname, email, password)
            VALUES
                (?, ?, ?, ?)'
		);

		$query->execute([$_POST['FirstName'], $_POST['LastName'], $_POST['email'], $_POST['password']]);

    header('Location: login.php');
    exit();
}

 ?>
 <form id="register-form" action="register.php" method="POST">
 	<label>Nom</label>
     <input type="text" name="LastName"/>
     <label>Prénom</label>
     <input type="text" name="FirstName"/>
     <label>Email</label>
     <input type="text" name="email"/>
     <label>Password</label>
     <input type="text" name="password"/>

    <input type="submit" value="envoyer"/>
