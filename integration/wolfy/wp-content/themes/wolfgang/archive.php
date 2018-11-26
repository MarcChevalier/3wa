<?php get_header(); ?>
<h3>Archive</h3>
  <main>
    <section class="work">
    <?php

 if(have_posts()):
 while(have_posts()):
 the_post();
 echo '<article class="item-product">';
 get_template_part("template-parts/content", "home");
 endwhile;
 next_posts_link();
 previous_posts_link();
 echo '</article>';
 endif;
 ?>
  </section>
  </main>
  <?php get_footer(); ?>
