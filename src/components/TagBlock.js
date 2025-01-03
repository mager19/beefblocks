import React from 'react';

const TagBlock = ({ text }) => {

    text = text.replace('beefblocks/', '');

    return (
        <div className="tagBlock">
            {text}
        </div>
    );
};

export default TagBlock;