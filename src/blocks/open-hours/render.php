<?php
$title = isset($attributes['title']) ? esc_html($attributes['title']) : 'Opening Hours';
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
    <div class="opening-hours ">
        <div class="opening-hours__header">
            <h3><?php echo $title; ?></h3>
        </div>
        <div class="opening-hours__body">
            <?php echo $content; ?>
        </div>
    </div>
</div>