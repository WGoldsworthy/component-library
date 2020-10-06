import React from 'react';
import ByrdMenu from './index';

export default {
    title: 'organisms/ByrdMenu',
    component: ByrdMenu
};

// We create a “template” of how args map to rendering
const Template = (args) => <ByrdMenu {...args} />;

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { isMenuOpen: false, links: [
    {
        label: 'Who we are'
    },
    {
        label: 'Approach'
    },
    {
        label: 'Our Work'
    }
] };
