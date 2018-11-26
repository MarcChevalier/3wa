<?php

class BookingController
{
   public function httpGetMethod(Http $http, array $queryFields)
   {
       /*
        * Méthode appelée en cas de requête HTTP GET
        *
        * L'argument $http est un objet permettant de faire des redirections etc.
        * L'argument $queryFields contient l'équivalent de $_GET en PHP natif.
        */


    	if(array_key_exists('user', $_SESSION) == false) {

            $http->redirectTo('/');

        }//permet de ne pas faire de réservation sans être connecté


   }

   public function httpPostMethod(Http $http, array $formFields)
   {
       /*
        * Méthode appelée en cas de requête HTTP POST
        *
        * L'argument $http est un objet permettant de faire des redirections etc.
        * L'argument $formFields contient l'équivalent de $_POST en PHP natif.
        */

        if (empty($_POST) == false ) {
          var_dump($_POST);
//Contatenation des dates dans la variable $bookingDate
          $bookingDate = $_POST['bookingYear'].'-'.$_POST['bookingMonth'].'-'.$_POST['bookingDay'];
//Contatenation des heures dans la variable $bookingTime
          $bookingTime = $_POST['bookingHour'].':'.$_POST['bookingMinute'];

          $numberOfSeats = $_POST['numberOfSeats'];

          $booking = new BookingModel();

          $booking->booking($bookingDate, $bookingTime, $numberOfSeats );
        }


   }
}
