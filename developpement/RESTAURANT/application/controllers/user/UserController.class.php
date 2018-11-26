<?php

class UserController
{

  public function httpGetMethod(Http $http, array $formFields)
  {
  /*
    	 * Méthode appelée en cas de requête HTTP GET
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $queryFields contient l'équivalent de $_GET en PHP natif.
    	 */



    }

    public function httpPostMethod(Http $http, array $formFields)
    {

      if(empty($_POST) == false) {

        var_dump($_POST);

        try {

          $userModel = new UserModel();
          $userModel->signUp (
                          $_POST['lastName'],
                          $_POST['firstName'],
                          $_POST['email'],
                          $_POST['password'],
                          $_POST['birthYear'].'-'.
                          $_POST['birthMonth'].'-'.
                          $_POST['birthDay'],
                          $_POST['address'],
                          $_POST['city'],
                          $_POST['zipCode'],
                          $_POST['phone']
                      );

                  // $http->redirectTo('/user/login');
        }
        catch(DomainException $exception) {
          echo 'la requête pdo a merdé';

        }

      }

    }
}












 ?>
