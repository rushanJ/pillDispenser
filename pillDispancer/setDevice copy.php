<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods:  POST, GET');
header("Content-Type: application/json");

$user=$_REQUEST["user"];
$id=$_REQUEST["id"];


 

include "config.php";
$sql = "INSERT INTO`userdevice`(`id`, `user`, `deviceid`) VALUES  
                        ('', '$user', '$id')";

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