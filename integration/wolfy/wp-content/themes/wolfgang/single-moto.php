<?php get_header('single'); ?>
SINGLE MOTO
  <main>
    <section class="work">
    <?php
 if(have_posts()):
 while(have_posts()):
 the_post();
 echo '<article class="item-product">';
 get_template_part("template-parts/content", "single");
 endwhile;
 echo '<article class="item-product">';
 next_posts_link();
 previous_posts_link();
 echo '</article>';
 endif;
 ?>
  </section>
  </main>
  <?php get_footer(); ?>
