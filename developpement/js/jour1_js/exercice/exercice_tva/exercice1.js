// Comment calculer un prix TTC

var number1;
var tva;
var totalTVA;
var totalTTC;

number1 = window.prompt("veuillez rentrer un nombre"); /*agir ,avec l'utilisateur*/

number1 = parseFloat(number1);
tva = 20;
totalTVA = number1 * (tva / 100);
totalTTC = number1 + totalTVA;

document.write(totalTTC);


                    // Correction de l'exercice1


                    // index.html

                    <!DOCTYPE html>
                    <html lang="fr">
                    <head>
                        <meta charset="utf-8">
                        <title>JavaScript - Exercice</title>
                    </head>
                    <body>
                        <h1>Calculatrice de TVA</h1>
                        <script src="index.js"></script>
                    </body>
                    </html>

                    // index.js

                    <script>

                    const TAUX_DE_TVA = 20;

                    var montantHT;
                    var montantTTC;
                    var montantTVA;


                    montantHT = window.prompt('Quel est le montant HT');
                    montantHT = parseFloat(montantHT);

                    montantTVA = montantHT * (TAUX_DE_TVA / 100);
                    montantTTC = montantHT + montantTVA;


                    document.write
                    (
                        '<p>Pour un montant HT de ' + montantHT + ' € il y a ' + montantTVA + ' € de TVA.</p>'
                    );
                    document.write('<p>Le montant TTC est donc de ' + montantTTC + ' €.</p>');
                    </script>
