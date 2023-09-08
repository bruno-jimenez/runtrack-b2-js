<?php

function my_insert_student(string $email, string $fullname, string $genre, int $grade_id, DateTime $birthdate): bool {

    $dsn = "mysql:host=host;dbname=lp_official.sql;charset=utf8";
    $username = "your_username";
    $password = "your_password";

    try {
        $pdo = new PDO($dsn, $username, $password);

        $sql = "INSERT INTO students (email, fullname, genre, grade_id, birthdate) VALUES (?, ?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql);

        $stmt->bindParam(1, $email, PDO::PARAM_STR);
        $stmt->bindParam(2, $fullname, PDO::PARAM_STR);
        $stmt->bindParam(3, $genre, PDO::PARAM_STR);
        $stmt->bindParam(4, $grade_id, PDO::PARAM_INT);
        $stmt->bindParam(5, $birthdate->format('Y-m-d'), PDO::PARAM_STR);

        $result = $stmt->execute();

        if ($result) {
            return true;
        } else {
            return false;
        }
    } catch (PDOException $e) {
   
        die("Erreur de base de données : " . $e->getMessage());
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $fullname = $_POST['fullname'];
    $genre = $_POST['genre'];
    $grade_id = $_POST['grade'];
    $birthdate = new DateTime($_POST['birthdate']);

    $inserted = my_insert_student($email, $fullname, $genre, $grade_id, $birthdate);

    if ($inserted) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'insertion de l\'étudiant en base de données.']);
    }
} else {
    echo "Requête non autorisée.";
}

?>