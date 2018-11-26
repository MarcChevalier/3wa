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
define('DB_NAME', 'wolfy');

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
define('AUTH_KEY',         'W2aZ|)w!GFezT$!.^0pZ9._@f?CQqFsWqG%.JNy+5&Z;1Y7k:1:LQ[T_x3.5*AO*');
define('SECURE_AUTH_KEY',  '|#wA-Xh}jnJYAb6a,Qt#Lj_1j_s5#2 Ck8u`[RXX^:^jz[#1ol_z-h4.{yqWx)9-');
define('LOGGED_IN_KEY',    'DTSB6UL(hmDHv%J@q)d9mI24%`g[hFSejr.l:ocSH+#xU$GX=z][QGYOfME-Rw]E');
define('NONCE_KEY',        'DXYwTuTFI*aE.)xk(};L<| _KWXc_9o~V1(|Ar$:rO_#hO1Bz,jrT;DJfZL4jC=G');
define('AUTH_SALT',        'Qywo@QbL~6kH,$EuP)Ci+/hqyGN);kxk;fT$cGO*T5hOZ,y,+%L0tUz+6l*Qp9ew');
define('SECURE_AUTH_SALT', 'isnYdJSL*QqCBB5l:U=R/g`l?P(w!$c+I-oruc J(qf~r_kz{W<d8<*;7:@mXIj-');
define('LOGGED_IN_SALT',   'eRsj@)q`[lM@JeXh*#/B!5i.os.gc%`[fNwGME%NOe,QI47HfVE!|Q!MPyhF2GjL');
define('NONCE_SALT',       '__$QYOfu{h5^uXi/M]xJ9uzi-zOU7*S`#$*()tLB1bD^;0PruS!{w_o<xQ&|BG}Z');
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