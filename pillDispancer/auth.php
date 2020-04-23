<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods:  POST, GET');
header("Content-Type: application/json");

$userName=$_REQUEST['email'];
$pass=$_REQUEST['pass'];


include "config.php";
$sql = "SELECT * FROM `user` WHERE `email` = '$userName' AND `pass` = '$pass'  ;";
$result = $conn->query($sql);

// echo $sql;
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $user=$row["id"];
       
        $myObj=new \stdClass();
        $myObj->success =true;
        $myObj->user =$user;
        $myJSON = json_encode($myObj);
        echo $myJSON;
    }
} else {
    $myObj=new \stdClass();
    $myObj->success =false;
    $myObj->user =0;
    $myJSON = json_encode($myObj);
    echo $myJSON;
}

$conn->close()

?>