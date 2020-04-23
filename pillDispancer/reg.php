<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods:  POST, GET');
header("Content-Type: application/json");

$name=$_REQUEST["name"];
$email=$_REQUEST["email"];
$pass=$_REQUEST["pass"];

 

include "config.php";
$sql = "INSERT INTO`user`(`id`, `name`, `email`, `pass`) VALUES  
                        ('', '$name', '$email', '$pass')";

if ($conn->query($sql) === TRUE) {
    $uniId = $conn->insert_id;
    $myObj=new \stdClass();
    $myObj->success =true;
    $myJSON = json_encode($myObj);
    echo $myJSON;
    
} else {
    $myObj=new \stdClass();
    $myObj->success =false;
    $myJSON = json_encode($myObj);
    echo $myJSON;
}





$conn->close();

// header("Location: ../"); /* Redirect browser */
// exit();
?>