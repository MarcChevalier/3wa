<?php
session_start();
include 'Database.class.php';
include 'User.class.php';


$logout = new User();
$logout->logoutSession();


/*PROCEDURAL
session_destroy();
header('Location: index.php');
exit();
*/

?>

<a href="index.php">index</a>
