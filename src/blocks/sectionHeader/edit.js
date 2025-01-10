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

import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';

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

	const {
		title,
		subtitle,
		showSubtitle,
		showDescription,
		description
	} = attributes;

	const blockProps = useBlockProps({
		className: 'beefBlocks__section__header flex items-center text-white ',
	});

	const parentBlockClientId = useSelect((select) => {
		const { getBlockParents } = select('core/block-editor');
		return getBlockParents(clientId);
	});

	const isNestedBlock = parentBlockClientId.length > 0;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Section Header Settings')}>
					<PanelRow>
						<ToggleControl
							label="Show Subtitle"
							checked={showSubtitle}
							onChange={(showSubtitle) => setAttributes({ showSubtitle: showSubtitle })}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Show Description"
							checked={showDescription}
							onChange={(showDescription) => setAttributes({ showDescription: showDescription })}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className="w-full">
					{!isNestedBlock &&
						<TagBlock
							text={__(props.name)}
						/>
					}
					{/* todo: poner las clases que son en la vista de edit */}
					<div className="content">
						{
							showSubtitle && (
								<RichText
									tagName='p'
									value={subtitle}
									onChange={(subtitle) => setAttributes({ subtitle })}
									className='section-title__subtitle'
								/>
							)
						}
						<RichText
							tagName='h2'
							value={title}
							onChange={(title) => setAttributes({ title })}
							className='section-title__title'
						/>

						{showDescription && (
							<RichText
								tagName='p'
								value={description}
								onChange={(description) => setAttributes({ description })}
								className='section-title__description'
							/>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
