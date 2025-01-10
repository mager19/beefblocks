/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, useInnerBlocksProps, RichText, InspectorControls } from '@wordpress/block-editor';

import { Panel, PanelBody, PanelRow, ToggleControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	const { attributes, setAttributes } = props;

	const {
		item_title,
		show_item_price,
		item_price,
		item_description,
		item_more_info
	} = attributes;

	const blockProps = useBlockProps();

	const innerBlocksProps = useInnerBlocksProps({
		style: {
			width: "678",
			height: "426"
		},

	}, {
		template: [
			['core/image', { url: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }]
		],
		templateLock: true
	}
	);

	return (
		<>	<InspectorControls>
			<Panel>
				<PanelBody title="Special Offers Slider Item Settings">
					<PanelRow>
						<ToggleControl
							label="Show Item Price"
							checked={show_item_price}
							onChange={(value) => setAttributes({ show_item_price: value })}
						/>
					</PanelRow>

				</PanelBody>
			</Panel>
		</InspectorControls>
			<div {...blockProps}>
				<div>
					<div class="special-offers__item">
						<div class="special-offers__item-image">
							<div {...innerBlocksProps} />
						</div>

						<div class="special-offers__item-info">
							<div className='special-offers__item-info-content'>
								<RichText
									tagName="h3"
									value={item_title}
									onChange={(value) => setAttributes({ item_title: value })}
									placeholder={__('Four cheese garlic bread')}
								/>
								{show_item_price && (
									<div className='special-offers__item-price'>
										<RichText
											tagName="span"
											value={item_price}
											onChange={(value) => setAttributes({ item_price: value })}
											placeholder={__('32.00')}
										/>
									</div>
								)}
							</div>

							<RichText
								tagName="p"
								value={item_description}
								onChange={(value) => setAttributes({ item_description: value })}
								placeholder={__('Proin gravida nibh vel velit auctor aliquet.')}
							/>

							<RichText
								tagName="p"
								value={item_more_info}
								onChange={(value) => setAttributes({ item_more_info: value })}
								placeholder={__('Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. san ipsum velit.')}
							/>
						</div>
					</div>
				</div>
			</div>

		</>

	);
}
