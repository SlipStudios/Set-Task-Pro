<?php
$servername = "localhost"; // Usually 'localhost'
$username = "root"; // Your MySQL username
$dbname = "set_task_pro_db"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO set_task_pro_db (name, email, username, password) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $email, $username, $password); // Change 'ss' to 'si' if you're inserting integers

// Set values
$name = "name";
$email = "email";
$username = "username";
$password = "password";

// Execute the statement
if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close connections
$stmt->close();
$conn->close();
?>
