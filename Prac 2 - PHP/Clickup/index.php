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
    <!--Grab all the rows in the table -->
    <div class="container border-0">

        <h1>List of users</h1>

        <?php
        $sql = "SELECT user_id,name,surname,password,email,birthday FROM tbusers";
        $result = $mysqli->query($sql);
        //output the rows
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                // echo "
                //     <div class='card'>
                //         <a href='users.php'>
                //                 <form action='users.php' method='GET' class=''>
                //                 <button type='submit' class='btn btn-link'> " . $row['name'] . " " . $row['surname'] . "</button> 
                //                 <input type='hidden' name='user_id' value='" . $row['user_id'] . "'/>
                //             <form>
                //         </a>
                //     </div>
                // ";
                // echo "
                   
                //     <form action='users.php' method='GET' class='card border-0'>
                //         <button type='submit' class='btn btn-link card-body text-left border'> " 
                //         . $row['name'] . " " . $row['surname'] . " This is the Id of each user " .$row['user_id']. "
                //         <input type='hidden' name='user_id1' value='" . $row['user_id'] . "'/>
                //         </button> 
                //         <input type='hidden' name='user_id' value='" . $row['user_id'] . "'/>
                //     <form>
                      
                // ";

                echo "

                    <a href='users.php?user_Id=".$row['user_id']."'>
                        <div class='card'>
                            <div class='card-body'>
                                ".$row['name']." ". $row['surname']."
                            </div>
                        </div>
                    </a>

                ";
            }
        } else {
            echo "
                <div class='alert alert-danger'>No content to display</div>";
        }
        ?>

    </div>

</body>

</html>