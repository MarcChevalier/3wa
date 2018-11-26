<?php

session_start();

if( array_key_exists('user', $_SESSION)) {

	echo '<p>'.$_SESSION['user']['firstname'].'</p>';
    echo '<p>'.$_SESSION['user']['lastname'].'</p>';
    echo '<p>'.$_SESSION['user']['email'].'</p>';


} else {

	echo '<p>Vous n\'êtes pas connecté</p>';

}



 ?>

 <a href="index.php">index</a>
