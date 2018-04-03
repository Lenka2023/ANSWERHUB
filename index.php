<?php
if(isset($_POST['reg'])){
	$login=htmlspecialchars($_POST['login']);
	$password=htmlspecialchars($_POST['password']);
	$bad=false;
	session_start();
	unset($_SESSION['errror_login']);
	unset($_SESSION['errror_password']);
	unset($_SESSION['reg_succes']);
	if((strlen($login)<3)||(strlen($login)>32)){
		$_SESSION['errror_login']=1;
		$bad=true;
											}
	if((strlen($password)<6)||(strlen($password)>32)){
		$_SESSION['errror_password']=1;
		$bad=true;
												}
												if(!$bad){
													$mysqli=new mysqli ('localhost', 'Mysitefour', '00000', "mysite-local");
													$password=md5($password);
													$mysqli->query("INSERT INTO users(login, password) VALUES ('$login', '$password')");
													$mysqli->close();
													$_SESSION['reg_succes']=1;
													header("Location:editor.php");
														}
						}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registration</title>
	</head>
	<body>
	<table border='1' width='100%;' cellpadding='0' cellspacing='0'>
			<tr>
				<td colspan='2'>
					<img src="images/logo.jpg" width='100%;' alt="Шапка сайта"/>
				</td>
				</tr>
				<tr>
					<td style= 'width:20%;' valign='top'>
					<td>
					<td style= 'width:80%;' >
						<div style = "text-align:center;">
							<h1>Registration</h1>
							<form id="form1" action="" method="post">
							<?php
							if ($_SESSION['reg_succes']==1) echo "<p><span style='color:red;'>Succes registration</span></p>";
							if ($_SESSION['errror_login']==1) echo "<p><span style='color:red;'>Invalid login</span></p>";
							if ($_SESSION['errror_password']==1) echo "<p><span style='color:red;'>Invalid password</span></p>";
unset($_SESSION['reg_succes']);
								?>
								<p>
									<label>Login</label>
									<input type='text' name='login'/>
								</p>
								<p>
									<label>Password</label>
									<input type='password' name='password'/>
								</p>
								<p>
									<input type='submit' name='reg' value='Log in'/>
								</p>
							</form>
						</div>
					</td>
				</tr>
				<tr>
				
				https://www.youtube.com/watch?v=VgElYceb7-M2:06