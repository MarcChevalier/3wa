<?php

include 'Database.class.php';
include 'User.class.php';

if(empty($_POST) == false) {

	$user = new User();

	$user->saveUser($_POST['firstname'], $_POST['lastname'], $_POST['email'], $_POST['password']);

	// header('Location: login.php');
    // exit();
}

?>


<form id="register-form" class="generic-form" action="register.php" method="POST">

	<label>Nom</label>
    <input type="text" name="lastname"/>
    <label>Prénom</label>
    <input type="text" name="firstname"/>
    <label>Email</label>
    <input type="text" name="email"/>
    <label>Password</label>
    <input type="text" name="password"/>

	<input type="submit" value="envoyer"/>


</form>
