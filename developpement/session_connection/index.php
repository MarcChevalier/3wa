<?php
session_start();



var_dump($_SESSION);


echo '<p>Mon site de Déglingo</p>';

if( array_key_exists('user', $_SESSION)) {

	echo '<p>Bonjour '.$_SESSION['user']['firstname'].' '.$_SESSION['user']['lastname'].'</p>';


}


?>
<?php if(array_key_exists('user', $_SESSION) == false) { ?>

<a href="login.php">login</a>
<a href="register.php">Register</a>

<?php } else { ?>

<a href="logout.php">logout</a>
<a href="info.php">info</a>



<?php } ?>
