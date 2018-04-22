<?php
if(isset($_POST['enter'])){
	$e_login=htmlspecialchars($_POST['e_login']);
	$e_password=md5($_POST['e_password']);
							}
	session_start();
	if(!isset($_SESSION['text']))
{
$_SESSION['text'] = "";
}

	unset($_SESSION['reg_succes']);
										
	$mysqli=new mysqli ('localhost', 'Mysitefour', '00000', "mysite-local");
	$query="SELECT* FROM `users`";
	$result = mysqli_query($mysqli, $query);
	
	$user_data=mysqli_fetch_array($result);
	if($user_data[login]!=$e_login){
		echo"<p><span style='color:red;'>Register please or enter login correctly</span></p>";
									}
	if(($user_data[login]==$e_login)&&($user_data[password]==$e_password)){
		echo"<p><span style='color:red;'>Succes entering</span></p>";
		header("Location:editor.php");
																			}
	if(($user_data[login]==$e_login)&&($user_data[password]!=$e_password)){
			echo"<p><span style='color:red;'>Incorrect password</span></p>";	
																				}
		
	$mysqli->close();
	?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
	<link rel="stylesheet" href="css/regstyle.css"type="text/css"/>
    <title>Registration</title>											
						https://www.youtube.com/watch?v=Nyk60llAcMc
	</head>
	<body>
	<table  width='100%;' cellpadding='0' cellspacing='0'>
			<tr>
				<td colspan='2'>
					<img src="img/logo.jpg" width='100%;' alt="Шапка сайта"/>
				</td>
				</tr>
				<tr>
					<td style= 'width:20%;' valign='top'>
					<td>
					<td style= 'width:80%;' >
						<div style = "text-align:center; ">
							<h1>Entering</h1>
							
							<form id="form1" action="" method="post">
								<div class="fieldmain">	
								<div class="mainfield">
									<div class="regfield">
										<label for="login">Login</label>
										<input type='text' name='e_login' id="login" placeholder="Login" required/>
									</div>
									<div class="regfield">
										<label for="password">Password</label>
										<input type='password' name='e_password' id="password" placeholder="Password" required/>
									</div>
									
									<div class="regfield">
										<input type='submit' name='enter' value='Log in'/><br><a href="register.php">Registration</a>
							
									</div>
								</div>
							</div>	
							</form>
						</div>
					</td>
				</tr>
				<tr>
				
				