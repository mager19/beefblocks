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
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

import TagBlock from '../../components/TagBlock';

const { useSelect } = wp.data;

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
	const { attributes, setAttributes, clientId } = props;

	const { } = attributes;

	const blockProps = useBlockProps();

	const innerBlockProps = useInnerBlocksProps({},
		{
			template: [
				["beefblocks/special-offers-slider-item"]
				,
			],
			allowedBlocks: ["beefblocks/special-offers-slider-item"],
		}
	);

	const parentBlockClientId = useSelect((select) => {
		const { getBlockParents } = select('core/block-editor');
		return getBlockParents(clientId);
	});

	const isNestedBlock = parentBlockClientId.length > 0;

	return (
		<>
			{!isNestedBlock &&
				<TagBlock
					text={__(props.name)}
				/>
			}
			<div {...blockProps}>
				<div class="special-offers__slider">
					<div class="special-offers__content">
						<div {...innerBlockProps} />
					</div>


					<div class="slider-nav-arrows">
						<a
							href="javascript:void(0);"
							aria-label="Next attractions"
							class="slider-arrow slick-next JS-slick-nextSlider"
						></a>
						<a
							href="javascript:void(0);"
							aria-label="Prev attractions"
							class="slider-arrow slick-prev JS-slick-prevSlider"
						></a>
					</div>
				</div>
			</div>

		</>

	);
}
