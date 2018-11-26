<?php

/*

*/

get_header(); ?>

  <main>
    <section class="work">
    <?php
 if(have_posts()):
 while(have_posts()):
   the_title();
   the_post();
   the_post_thumbnail();
 // echo '<article class="item-product">';
 get_template_part("template-parts/content", "single");
 endwhile;
 // echo '</article>';
 endif;
 ?>
  </section>

  </main>
  <?php get_footer(); ?>
