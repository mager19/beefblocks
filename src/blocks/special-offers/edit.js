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

	const { } = attributes;

	const blockProps = useBlockProps();

	const innerBlocksProps = useInnerBlocksProps({}, {
		template: [
			['beefblocks/section-header', { title: 'Try our Special Offers', showSubtitle: false, showDescription: true, description: 'The first restaurant proprietor is believed to have been one A. Boulanger, a soup vendor, who opened his business in 1765.' }],
			["beefblocks/special-offers-slider"]],
		templateLock: false
	});

	return (
		<>


			<div {...blockProps}>
				<TagBlock
					text={__(props.name)}
				/>
				<div class="special-offers bg-coarseWool-800">
					<div class="special-offers__container">


						{/* Slider Special Offers  */}
						<div {...innerBlocksProps} />
					</div>
				</div>
			</div>

		</>

	);
}
