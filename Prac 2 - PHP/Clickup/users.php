<!DOCTYPE html>
<?php
//connec to the database

error_reporting(E_ALL);
ini_set('error_reporting', E_ALL);

$server = "localhost";
$username = "root";
$password = "";
$database = "dbUser";
$mysqli = mysqli_connect($server, $username, $password, $database);

?>
<html lang="en">

<head>
    <title>IMY220 - Practical 2</title>
    <meta charset="utf-8" />
    <meta name="author" content="Matthew Schoeman" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
</head>


<body>

    <div class="container">
        <?php

        $id = $_GET['user_Id'];
        // $index = "SELECT user_id,name,surname,email,birthday FROM tbusers WHERE user_id = $id";       
        // $result = $mysqli->query($index);
        // if($result){
        //     $row = $result->fetch_assoc();
        //     echo "
        //         <h1>User Details: ". $row['name'] . " ". $row['surname']." </h1>
        //         <h6><b>Email Address:</b> ". $row['email'] . "</h6>
        //         <h6><b>Birthday:</b> ". $row['birthday'] . "</h6>
        //     ";
        // }
        // else{

        // }
        $sql = "SELECT user_id,name,surname,password,email,birthday FROM tbusers";
        $result = $mysqli->query($sql);


        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                if ($row['user_id'] == $id) {
                    echo "
                    <h1>User Details: " . $row['name'] . " " . $row['surname'] . " </h1>
                    <h6><b>Email Address:</b> " . $row['email'] . "</h6>
                    <h6><b>Birthday:</b> " . $row['birthday'] . "</h6>
                ";
                }
            }
        } else {
            echo "
                <div class='alert alert-danger'>No content to display</div>";
        }
        ?>
    </div>

</body>

</html>