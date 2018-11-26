<<?php

if (empty($_POST) == false) {

    include 'application/bdd_connection.php';

    $query = $pdo->prepare
        (
            'INSERT INTO
            Comment
            (NickName, Contents, Post_Id, CreationTimestamp)
        VALUES
            (?, ?, ?, NOW())'
        );

    $query->execute([$_POST['NickName'], $_POST['Contents'], $_POST['Post_Id']]);





}

header('Location: show_post.php?id='.$_POST['Post_Id']);
exit();






 ?>
