<?php get_header(); ?>
<h2>Résultat de recherche pour : <?php echo get_search_query();?></h2>
  <main>
    <section class="work">
    <?php
 if(have_posts()):
 while(have_posts()):
   the_title();
   the_post();
   the_post_thumbnail();
 // echo '<article class="item-product">';
 get_template_part("template-parts/content", "home");
 endwhile;
 next_posts_link();
 previous_posts_link();
 // echo '</article>';
else:

  echo ('Pas de recherches associée');

 endif;
 ?>
  </section>
  </main>
  <?php get_footer(); ?>
