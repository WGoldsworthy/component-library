import React from 'react';
import RedSlideBackgroundText from './index';

export default {
    title: 'Molecules/RedSlideBackgroundText',
    component: RedSlideBackgroundText
};

// We create a “template” of how args map to rendering
const Template = (args) => <RedSlideBackgroundText {...args} />;

// Each story then reuses that template
export const Original = Template.bind({});
Original.args = { textLines: ['MultiLine', 'Background Animation Text']};
