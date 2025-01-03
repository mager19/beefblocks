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
import { useBlockProps, useInnerBlocksProps, RichText, InspectorControls, InnerBlocks } from '@wordpress/block-editor';

import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';

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

	const {
		showDescription,
		description,
		imageRight

	} = attributes;

	const blockProps = useBlockProps({
		className: 'about__image-info'
	});

	const innerBlocksProps = useInnerBlocksProps(
		blockProps
		,
		{
			template: [

				['beefblocks/about-content-left'],
				['beefblocks/about-content-right'],
			],
			templateLock: true
		}
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('About Content Settings')}>
					<PanelRow>
						<ToggleControl
							label="Show Description"
							checked={showDescription}
							onChange={(showDescription) => setAttributes({ showDescription: showDescription })}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Image Right"
							checked={imageRight}
							onChange={(imageRight) => setAttributes({ imageRight: imageRight })}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div className='relative'>
				<TagBlock
					text={__(props.name)}
				/>
				<div {...innerBlocksProps} />

			</div>
		</>
	);
}
