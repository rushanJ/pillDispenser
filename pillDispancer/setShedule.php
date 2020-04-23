<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods:  POST, GET');
header("Content-Type: application/json");

$deviceID=$_REQUEST["deviceID"];
$slot=$_REQUEST["slot"];
$noOfPillsAvailable=$_REQUEST["noOfPillsAvailable"];
$time=$_REQUEST["time"];


include "config.php";
$sql = "INSERT INTO `deviceslottimer`(`id`, `deviceID`, `slot`, `noOfPillsAvailable`, `time`, `status`)  VALUES  
                                        ('', '$deviceID', '$slot', '$noOfPillsAvailable', '$time', 'WAITING')";

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