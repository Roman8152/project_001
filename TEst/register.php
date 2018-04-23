<?php

include_once "dtbs.php";

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $username = trim(mysqli_real_escape_string($conn, $_POST["username"]));
    $email = trim(mysqli_real_escape_string($conn, $_POST["email"]));
    $pwd = mysqli_real_escape_string($conn, $_POST["pass"]));
    $pwd2 = mysqli_real_escape_string($conn, $_POST["passConfirm"]));

    $sql = "SELECT username, email FROM users";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    if (empty($username) || empty($email) || empty($pwd) || empty($pwd2)) {
        echo "Oops... Looks like something is missing";
    }
    elseif (!empty($username) && !empty($email) && !empty($pwd) && !empty($pwd2)) {
        if ($email == $row["email"]) {
            echo "This email is already bind to an account";
        }
        elseif ($email !== $row["email"]) {

            if ($uid == $row["username"]) {
                echo "This username is already taken";
            }
            elseif ($uid !== $row["username"]) {

                if ($pwd == $pwd2) {
                    $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);
                    $sql = "INSERT INTO users (username, email, pass)
                    VALUES ('$username', '$email', '$hashedPwd');";
                    mysqli_query($conn, $sql);
                }
                else {
                    echo "Passwords don't match";
                }
            }
        }
    }
}

?>

<!DOCTYPE html>
<html>
    <head>
        <title>Register</title>
        <link rel="stylesheet" type="text/css" href="additional_code/style.css">
    </head>
    <body>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
            <input class="input" type="text" name="username" placeholder="Username">
            <br>
            <input class="input" type="email" name="email" placeholder="E-Mail">
            <br>
            <input class="input" type="password" name="pass" placeholder="Password">
            <br>
            <input class="input" type="password" name="passConfirm" placeholder="Password">
            <br>
            <button id="submit" type="submit">Sign up</button>
        </form>
        <div>
            <a href="login.php">Do you already have an account?</a> 
        </div>    
    </body>
</html>