<?php
// création de la fonction qui va appeller le ccs et le js
function exemple_ajout_css_js(){
 wp_enqueue_style('moncss' , get_template_directory_uri().'/css/wolfgang.css', '', '1.5', 'all');
 wp_enqueue_script('monjs', get_template_directory_uri().'/js/wolfgang.js', '', '2.2', true);
}

add_action('wp_enqueue_scripts', 'exemple_ajout_css_js');

function addMenuWolfgang(){
// on demande à utiliser le menus
 add_theme_support('menus');
// on crée 2 emplacements (ou plus) de menus, 2 paremètre à chaque fois
// identifant unique (en minuscules)
// desription qu'on retrouve dabs l'adminastration des menus
 register_nav_menu('primary', 'menu primaire');
 register_nav_menu('secondary', 'menu secondaire');
}
// on appelle la fonction qui active les menus, au moment de l'initialisation du thème (init)
add_action('init', 'addMenuWolfgang');

// image du header
add_theme_support('custom-header');
//image à la Une
add_theme_support('post-thumbnails');

function widgetsAdd(){
 register_sidebar(
 array(
 'name' => 'Sidebar Social',
 'id' => 'sidebar-home',
 'class' => '',
 'description' => 'widgets de la page accueil',
 'before_widget' => '<aside>',
 'afer_widget' => '</aside>',
 'before_title' => '<h3 class="widget-title">',
 'afer_title' => '</h3>'
 )

 );

 register_sidebar(
 array(
 'name' => 'sidebar_video',
 'id' => 'video',
 'class' => '',
 'description' => 'widgets de la page accueil',
 'before_widget' => '<aside>',
 'afer_widget' => '</aside>',
 'before_title' => '<h3 class="widget-title">',
 'afer_title' => '</h3>'
 )

 );

 function exemple_ajout_custom_post_type(){

 $labels = array(
 'name' => 'Moto',
 'singular_name' => 'Moto',
 'add_new' => 'Nouvelle moto',
 'all_items' => 'Toutes les motos',
 'add_new_item' => 'Ajouter une moto',
 'edit_item' => 'Modifer une moto',
 'new_item' => 'Nouvelle moto',
 'view_item' => 'Voir la moto',
 'search_item' => 'Chercher une moto',
 'not_found' => 'Pas de moto trouvée',
 'not_found_in_trash' => 'Pas de moto dans la poubelle',
 'parent_item_colon' => 'Moto parent'
 );
 $args = array(
 'labels' => $labels,
 'public' => true,
 'has_archive' => true,
 'publicly_queryable' => true,
 'query_var' => true,
 'rewrite' => true,
 'capability_type' => 'post',
 'hierarchical' => false,

 'supports' => array('title', 'editor', 'excerpt', 'thumbnail', 'revisions'),
 'taxonomies' => array(),
 'menu_position' => 5,
 'exclude_from_search' => false
 );
 register_post_type('moto', $args);
}
add_action('init', 'exemple_ajout_custom_post_type');
}
add_action('widgets_init', 'widgetsAdd');

function taxomoto_custom_taxonomy(){
 $labels = array(
 'name' => 'Marques',
 'singular_name' => 'Marques',
 'search_items' => 'chercher une taxo pinceau',
 'all_items' => 'toutes les taxo pinceau',
 'parent_item' => 'taxo pinceau parente',
 'parent_item_colon' => 'taxo pinceau parent',
 'edit_item' => 'modifer taxo pinceau',
 'update_item' => 'Mettre à jour taxo pinceau',
 'add_new_item' => 'ajouter une taxo pinceau',
 'new_item_name' => 'nouveau nom taxo pinceau',
 'menu_name' => 'Marques'
 );
 $args = array(
 'labels' => $labels,
 'hierarchical' => true,
 'show_ui' => true,
 'show_admin_column' => true,
 'query_var' => true,
 'rewrite' => array('slug' => 'marques')
 );
// Le array est très important, il indique qui peut utiliser cette taxo, ici, le type pinceau uniquement
 register_taxonomy('marque de ', array('moto') ,$args);
}
add_action('init', 'taxomoto_custom_taxonomy');
