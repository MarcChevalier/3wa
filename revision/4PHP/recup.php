<?php
var_dump($_POST);

$_POST['nom'];
//
$pdo = new PDO
	(
		'mysql:host=localhost;dbname=blog;charset=UTF8',
		'root',
		'troiswa'
    );

$query = $pdo->prepare
(
    'SELECT
    Id,
    Name,
    Email
        FROM
            User

           WHERE Id = ?'

);

$query->execute( [$_GET['Id']] );

$user = $query->fetch(PDO::FETCH_ASSOC);

$_SESSION['user']['email'] = $user['Email'];
$_SESSION['user']['name'] = $user['Name'];
$_SESSION['user']['id'] = $user['Id'];
//
//Objet PHP

class User extends Database {


 private $name;
   private $age;

 public function __construct($name, $age)
 {



   $this->$name = $name;
   $this->$age = $age;


 }

 public function saveUser($firstname, $lastname, $email, $password) {

   $sql = ' INSERT INTO
               users
               (FirstName, LastName, Email, Password)
           VALUES
               (?, ?, ?, ?)';

       $execute = array($firstname, $lastname, $email, $password);


       $this->executeInSql($sql, $execute);

 }


 public function createSession($mail, $password) {
   $user =  $this->selectOneInSql(
     'SELECT
             *
            FROM
               users
            WHERE Email = ?',
       [ $mail ]
       );

       if( $user['Password'] == $password && $user != false ) {

         $_SESSION['user']['FirstName'] = $user['FirstName'];
     $_SESSION['user']['LastName'] = $user['LastName'];
         $_SESSION['user']['Email'] = $user['Email'];

         echo 'Connecté';

         var_dump($_SESSION);
       header('Location: index.php');
         exit();
     } else {
       echo 'login ou mot de passe incorrect'
     }
 }

 public function logoutSession() {
   session_destroy();

   header('Location: index.php');
   exit();

 }


}
 ////////////////OU
 class User {


 	private $name;
     private $age;
     private $database;

 	public function __construct($name, $age)
 	{



 		$this->$name = $name;
 		$this->$age = $age;
         $this->$database = new Database()


 	}

     public function getUserName() {

     	return $this->name
     }



 	public function saveUser($firstname, $lastname, $email, $password) {

 		$sql = ' INSERT INTO
                 users
                 (FirstName, LastName, Email, Password)
             VALUES
                 (?, ?, ?, ?)';

         $execute = array($firstname, $lastname, $email, $password);


         $database->executeInSql($sql, $execute);

 	}


 	public function createSession($mail, $password) {
 		$user =  $this->selectOneInSql(
 			'SELECT
 	            *
              FROM
               	users
              WHERE Email = ?',
         [ $mail ]
         );

         if( $user['Password'] == $password && $user != false ) {

 	        $_SESSION['user']['FirstName'] = $user['FirstName'];
 			$_SESSION['user']['LastName'] = $user['LastName'];
 	        $_SESSION['user']['Email'] = $user['Email'];

 	        echo 'Connecté';

 	        var_dump($_SESSION);
 	    	header('Location: index.php');
 	        exit();
    	 	} else {
    	 		echo 'login ou mot de passe incorrect'
    	 	}
 	}

 	public function logoutSession() {
 		session_destroy();

 		header('Location: index.php');
 		exit();

 	}


 }

 $user = new User('Coco', 24);
 $user->getUserName();



 ?>
