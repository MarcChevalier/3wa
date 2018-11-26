<?php get_header(); ?>

  <main>
    <section class="work">
  <h2>Cette page n'exsiste pas</h2>
  <img src="<?php bloginfo('template_url')?>"/wolfgang/img/peugeot.jpg alt="peugeot">
  </section>
  <section class="404">
  <?php
  $args = array(
    'category_name'=>'moto',
    'post_per_page'=> 4



  );
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
<h3>Voici nos 4 dernières motos</h3>
</section>
  </main>
  <?php get_footer(); ?>
