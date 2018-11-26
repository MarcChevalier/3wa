<?php
$mot = null;

if(array_key_exists('word' , $_POST) == true) {


$dictionary =
    [
        'cat'    => 'chat',
        'dog'    => 'chien',
        'monkey' => 'singe',
        'sea'    => 'mer',
        'sun'    => 'soleil'
    ];

$direction = $_POST["direction"];
var_dump($direction);
if($direction == "anglais"){
  $traduction = strtolower($_POST['word']);
  $mot = array_search($traduction, $dictionary);
  var_dump($mot);
}
if($direction == "francais"){
  $traduction = strtolower($_POST['word']);

  $mot = $dictionary[$traduction];
  var_dump($mot);
}

}

include 'index.phtml';
 ?>


//////////////////////CORRECTION///////////////////////
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>PHP</title>
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans">
    <link rel="stylesheet" href="05-exercice-traducteur.css">
</head>
<body>
    <header>
        <h1>Traducteur Anglais - Français</h1>
    </header>

    <main>
        <?php if($result == null): ?>
            <form action="05-exercice-traducteur.php" method="POST">
                <ul>
                    <li>
                        <label for="word">Mot :</label>
                        <input type="text" id="word" name="word">
                    </li>
                    <li>
                        <label for="direction">Sens de traduction :</label>
                        <select id="direction" name="direction">
                            <option value="toEnglish">Français vers Anglais</option>
                            <option value="toFrench">Anglais vers Français</option>
                        </select>
                    </li>
                    <li>
                        <input type="submit" value="Traduire">
                    </li>
                </ul>
            </form>
        <?php else: ?>
            <p><?= $result ?></p>
        <?php endif; ?>
    </main>
</body>
</html>

<?php

$result = null;

$dictionary =
    [
        'cat'    => 'chat',
        'dog'    => 'chien',
        'monkey' => 'singe',
        'sea'    => 'mer',
        'sun'    => 'soleil'
    ];

if (array_key_exists('word', $_POST) == true) {

    var_dump($_POST);
    $word = strtolower($_POST['word']);
	$direction = $_POST['direction'];
    $result = translate($word, $direction, $dictionary);

}

function translate($word, $direction, $dico) {
	if ($direction == "toFrench") {

    	if(array_key_exists($word, $dico)) {

            return $dico[$word];

        } else {

            return 'je ne connais pas ce mot';
        }


    } else {

    	if(in_array($word, $dico)) {

        	return array_search($word, $dico);

        } else {

            return 'je ne connais pas ce mot';

        }

    }

}


include '05-exercice-traducteur.phtml';

?>
