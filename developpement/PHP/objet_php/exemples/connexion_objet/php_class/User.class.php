<?php

class User extends Database {


	public function saveUser($firstname, $lastname, $email, $password) {

    	$sql = ' INSERT INTO
                users
                (firstname, lastname, email, password)
            VALUES
                (?, ?, ?, ?)';

        $execute = [$firstname, $lastname, $email, $password];

        $this->executeInSql($sql, $execute);

    }
          // OBJET :
		public function createSession($mail, $password) {

		    	$sqlRequest = 'SELECT
			            *
		             FROM
		              	users
		             WHERE email = ?';

		        $executeVar = [ $mail ];

		    	$user =  $this->selectOneInSql( $sqlRequest, $executeVar);

		    	if( $user['password'] == $password && $user != false ) {
		        	$_SESSION['user']['firstname'] = $user['firstname'];
					$_SESSION['user']['lastname'] = $user['lastname'];
			        $_SESSION['user']['email'] = $user['email'];
		            header('Location: index.php');
			        exit();

		        } else {
		   	 		echo 'login ou mot de passe incorrect';
		   	 	}


		    }
				public function executeInSql($sql, $execute) {

						include 'config.php';

						$query = $pdo->prepare($sql);

						$query->execute( $execute );


					}
					public function logoutSession() {
    	session_destroy();

		header('Location: index.php');
		exit();

    }

}
