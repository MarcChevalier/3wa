<?php
class BookingModel {

	public function booking($bookingDate, $bookingTime, $numberOfSeats ) {

		$database = new Database();

		$sql = "INSERT INTO Booking (
			BookingDate,
			BookingTime,
			NumberOfSeats,
			User_Id,
			CreationTimestamp


		) VALUES (?, ?, ?, ?, NOW())";

		$values = [$bookingDate, $bookingTime, $numberOfSeats, $_SESSION['user']['UserId']];

		$database->executeSql($sql, $values);

  }

	}






?>
