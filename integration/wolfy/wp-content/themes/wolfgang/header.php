<!DOCTYPE html>
<html>
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Mon super site</title>
</head>
<body ?php body_class(); ?>


    <header>
      <h1>Devenez le Mozart de la moto avec Wolf'<span class="orange">Gang</span> !</h1>

      <nav class="container">
        <a href="<?php bloginfo('url'); ?>" ><img src='<?php header_image(); ?>' alt='image'></a>
        <?php wp_nav_menu(array('theme_location'=>'primary'));
        ?>
        <!-- <h1><?php bloginfo('name'); ?></h1> -->
        <p><?php bloginfo('description'); ?></p>
        <?php wp_head(); ?>
        <!-- <?php echo get_template_directory_uri() ?> -->
        <!-- Appel du css et du js  -->

      </nav>
      <?php get_search_form();?>
      



    </header>
