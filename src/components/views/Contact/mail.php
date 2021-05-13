<?php
/* get data from form  */
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "contact@tomasz-rosik.eu";
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