<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'wolfgang');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'troiswa');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '&gvy`|NpMU2V+Iz?{_Slc_h&>I~HO2BP@ yuT vm$kZwbua!F7kzd`_nKe?bsK-9');
define('SECURE_AUTH_KEY',  '@KE>]@[AN]s?uNEyEO_h{w+oc8frioI)MY)ST ?!s#LDGa,,rVjQ>q}mTf5yPL#6');
define('LOGGED_IN_KEY',    '[A0.UQT[X{BJ {*L>[EMMzf+EK-m_$W:$<!5-z*L-HT3W!K@Kj=)L|`a!SF5Bizg');
define('NONCE_KEY',        'Kw;nSQ-P8SoWYG});MQ3kE|if[!Ybm|q[^sDuy|4r,>w-V4?oA/=Y7GFSGjc?8tm');
define('AUTH_SALT',        '*2s|XK)b/YpR(&EF$7R3s.>t<}#kt@3s%FSwBN>Hp)269=I9Qo aXWvJ%`OuG^J<');
define('SECURE_AUTH_SALT', '7rKlhd$RLk%pol X_3Ob2nWIc].g89S $I{S0O?#$p:B/nbV3#.H1P<Y:#4Y_YM!');
define('LOGGED_IN_SALT',   '{l6]T#UQ[h>nVE&-5>thES(dEyd Z?6cfh>I<-L/bU{xqtghSM,^P`$*!fGZTsuk');
define('NONCE_SALT',       ';jS3f+DWw85TYJMy?UI)K4NeiABbxna~nP=&*{?r.cMX>3/n[~&Ph/+sT3.JuG23');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');