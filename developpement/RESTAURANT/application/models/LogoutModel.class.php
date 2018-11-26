<?php
class LogoutModel {

		public function destroy()
		{
			session_destroy();

				$http= new Http();
				$http->redirectTo('/');
		}
}




?>
