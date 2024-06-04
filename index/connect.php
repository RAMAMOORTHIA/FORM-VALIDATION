<?php

$n = $_POST['name'];
$phoneno = $_POST['PhoneNumber'];
$from = $_POST['From'];
$to = $_POST['to'];
$currentday = $_POST['Day&Time'];
$hh = $_POST['hh'];
$dd = $_POST['dd'];
$passanger = $_POST['Passanger'];
$email = $_POST['class'];

$con = mysqli_connect("localhost","root","","landingpage");


$sql="INSERT INTO landingpage2(username,phoneno,start_place,end_place,daytime,hh,dd,passenger,class)
 value('$n','$phoneno','$from','$to','$currentday','$hh','$dd','$passanger','$email')";
 $result =mysqli_query($con,$sql);
 if($result){
    echo "success fully connected";
 }
 else{
    echo " not connected";
 }

?>
