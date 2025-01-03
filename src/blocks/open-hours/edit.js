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
import { useBlockProps, RichText, useInnerBlocksProps } from '@wordpress/block-editor';

import { useSelect } from '@wordpress/data';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import TagBlock from '../../components/TagBlock';

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

	const { title } = attributes;

	const parentBlockClientId = useSelect((select) => {
		const { getBlockParents } = select('core/block-editor');
		return getBlockParents(clientId);
	});

	const isNestedBlock = parentBlockClientId.length > 0;

	const blockProps = useBlockProps({
		className: `opening-hours  ${isNestedBlock ? 'isNestedBlock' : ''}`,
	});

	const innerBlocksProps = useInnerBlocksProps(
		{ classname: 'opening-hours__body' }
		, {

			template: [
				['beefblocks/open-hours-item', {
					day: 'Monday - Friday',
					hours: '9 am - 10 pm'
				}],
				['beefblocks/open-hours-item', {
					day: 'Saturday',
					hours: '10 am - 8 pm'
				}],
			],
			templateLock: false,
			allowedBlocks: ['beefblocks/open-hours-item'],
		}
	);

	return (
		<>
			<div {...blockProps}>

				{!isNestedBlock &&
					<TagBlock
						text={__(props.name)}
					/>
				}
				<div class="opening-hours__header">
					<RichText
						tagName='h3'
						value={title}
						onChange={(title) => setAttributes({ title })}
						className='opening-hours__title'
						placeholder={__('Opening Hours')}
					/>
				</div>
				<div {...innerBlocksProps} />
			</div>

		</>

	);
}
