<?php get_header(); ?>

  <main>
    <section class="work">
    <?php
    $args = array(
      'post_type'=> 'moto',
      'posts_per_page'=> 6


    );
    query_posts($args);
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
  <div class="media">
    <h2>Pour nous connaitre <span class="orange">plus en détail</span></h2>
    <div class="social">


    </div><!--
    --><div id="video">
<?php get_sidebar('video');?>
    </div>
  </div>
