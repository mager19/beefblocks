<?php
$day = isset($attributes['day']) ? esc_html($attributes['day']) : 'Monday - Friday';
$hours = isset($attributes['hours']) ? esc_html($attributes['hours']) : '9 am - 10 pm';
?>
<div <?php echo get_block_wrapper_attributes(['class' => 'opening-hours__item']); ?>>
    <div class="opening-hours__item-day"><?php echo $day; ?></div>
    <div class="opening-hours__item-time"><?php echo $hours; ?></div>
</div>