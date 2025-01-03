<?php

/**
 * Plugin Name:       Beef Blocks
 * Description:       Blocks for theme BeefWP.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.2
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       beefblocks
 *
 * @package CreateBlock
 */

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_beefblocks_block_init()
{
	// wp_enqueue_style(
	// 	'beefblocks-style',
	// 	plugins_url('style.css', __FILE__),
	// 	array('wp-edit-blocks'),
	// 	filemtime(plugin_dir_path(__FILE__) . 'astyle.css')
	// );

	wp_enqueue_style(
		'beefblocks-style',
		plugin_dir_url(__FILE__) . 'style.css',

		array('wp-edit-blocks'),
		'1.0.1',
		'all'
	);


	add_filter('block_categories_all', function ($categories) {
		array_unshift($categories, [
			"slug" => "beef-blocks",
			"title" => "Beef Blocks",
		]);
		return $categories;
	});


	$blocks = glob(__DIR__ . '/build/blocks/*/block.json');
	foreach ($blocks as $block) {
		register_block_type($block);
	}

	wp_enqueue_style(
		'beefblocks-google-fonts',
		'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400;500;600;700&display=swap',
		false
	);
}
add_action('init', 'create_block_beefblocks_block_init');
