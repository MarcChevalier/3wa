<!DOCTYPE html>
<html>
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Mon super site</title>
</head>
<body>
  <header>

    <nav>
      <a href="<?php bloginfo('url'); ?>" ><img src='<?php header_image(); ?>' alt='image'></a>
      <?php wp_nav_menu(array('theme_location'=>'primary'));
      ?>
      <h1><?php bloginfo('name'); ?></h1>
      <p><?php bloginfo('description'); ?></p>
      <?php wp_head(); ?>
      <?php echo get_template_directory_uri() ?>
      <!-- Appel du css et du js  -->
      <?php wp_footer(); ?>
    </nav>
    <nav>
      <?php
      wp_nav_menu(array('theme_location'=>'secondary'));
      ?>
    </nav>



  </header>
  <main>
    <?php
    $args = array(
      'category_name'=>'moto',
      'post_per_page'=> 2

    );


    query_posts($args);
 if(have_posts()):
 while(have_posts()):
 the_post();
 the_content(); echo"<h2>";
 the_post_thumbnail();
 ?>
 <a href="<?php the_permalink(); ?>">
 <?php
 the_title();
 ?>
 </a>
 <?php
 echo '<hr>';
 endwhile;
 endif;
 ?>
  </main>
</body>
</html>
