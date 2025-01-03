<?php
$blocks = parse_blocks($content);


?>
<div <?php echo get_block_wrapper_attributes(); ?>>
    <div class="about__image-info">
        <div class="about-content">
            <!--About image -->
            <?php echo $content; ?>
        </div>
    </div>
</div>