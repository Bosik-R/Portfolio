<?php
/* get data from form  */
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "tomasz.rosik82@gmail.com";
$subject = "Mail From Portfolio";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@tomasz-rosik.eu" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
/* redirect */
header("Location:index.html");
?>