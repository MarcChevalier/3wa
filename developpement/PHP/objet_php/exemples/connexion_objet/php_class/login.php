<?php
// session_start();
// include 'Database.class.php';
// include 'User.class.php';
//
//
//
// if(empty($_POST) == false ) {
// 	var_dump($_POST);
//
//   include 'config.php';
//
//   $query = $pdo->prepare
// 		(
// 		    'SELECT
// 	            *
//              FROM
//               	users
//              WHERE Email = ?'
// 		);
//
// 	$query->execute([ $_POST['email'] ]);
//
//
// 	$user = $query->fetch(PDO::FETCH_ASSOC);
//
//     //var_dump($user);
//     if( $user['password'] == $_POST['password'] && $user != false ) {
//
//             $_SESSION['user']['firstname'] = $user['firstname'];
//     		$_SESSION['user']['lastname'] = $user['lastname'];
//             $_SESSION['user']['email'] = $user['email'];
//
//             echo 'Connecté';
//
//             var_dump($_SESSION);
//             header('Location: index.php');
//         exit();
//
//         }
//
//
//
//
//
//    PROCEDURAL }

session_start();
include 'Database.class.php';
include 'User.class.php';


if(empty($_POST) == false ) {
	$user = new User();
    $user->createSession($_POST['email'], $_POST['password']);
}




?>

<a href="index.php">index</a>

<?php if (array_key_exists('user', $_SESSION) == false) {?>

<form id="login-form" action="login.php" method="POST">
 <label>Email</label>
 <input type="text" name="email" />

   <label>Password</label>
 <input type="password" name="password" />

 <input type="submit" value="envoyer" />
</form>

<?php } else {?>

<p>Vous êtes connecté</p>
<a href="logout.php">logout</a>

<?php }
