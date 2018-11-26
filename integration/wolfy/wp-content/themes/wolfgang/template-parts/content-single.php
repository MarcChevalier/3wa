

<h3 class="products-title"> <?php  the_title(); ?> </h3>

<?php if (has_post_thumbnail()): ?>

<?php the_post_thumbnail('full'); ?>

<?php else: ?>

<img src="<?php bloginfo('template_url')?>/img/jade.jpg" alt="poisson">

<?php endif; ?>



<?php the_content(); ?>
<?php the_field('cylindree'); ?>
<?php the_field('marque'); ?>
<p>Les cartégories<?php the_category(' - '); ?></p>

<?php

if(has_tag()):

?>

<p>Les tags<?php the_tags(''); ?></p>

<?php

endif;
?>
