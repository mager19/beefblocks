<?php
$showSubtitle = isset($attributes['showSubtitle']) ? (bool) $attributes['showSubtitle'] : false;
$subtitle = isset($attributes['subtitle']) ? esc_html($attributes['subtitle']) : 'About Us';
$title = isset($attributes['title']) ? esc_html($attributes['title']) : 'Discover Lorem From <br />Flavors Within Wines.';



?>
<div <?php echo get_block_wrapper_attributes(
            [
                'class' => 'beefblocks__section-header',
            ]
        ); ?>>
    <!-- Info title -->
    <div class="section-title">
        <?php
        if (!empty($subtitle) && $showSubtitle) {
            echo "<p class='section-title__subtitle'>$subtitle</p>";
        }
        ?>
        <h2 class="section-title__title">
            <?php echo $title; ?>
        </h2>
    </div>
    <!--/ Info title -->
</div>