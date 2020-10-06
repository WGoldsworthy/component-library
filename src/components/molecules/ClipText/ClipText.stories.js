import React from 'react';
import ClipText from './index';

export default {
    title: 'Molecules/ClipText',
    component: ClipText
};

// We create a “template” of how args map to rendering
const Template = (args) => <ClipText {...args} />;

// Each story then reuses that template
export const Original = Template.bind({});
Original.args = { value: 'CLIPTEXT', type: 'original' };

export const Fire = Template.bind({});
Fire.args = { value: 'CLIPTEXT', type: 'fire' };

export const Green = Template.bind({});
Green.args = { value: 'CLIPTEXT', type: 'green' };

export const BlueWater = Template.bind({});
BlueWater.args = { value: 'CLIPTEXT', type: 'bluewater' };

export const DNA = Template.bind({});
DNA.args = { value: 'CLIPTEXT', type: 'dna' };

export const Particles = Template.bind({});
Particles.args = { value: 'CLIPTEXT', type: 'particles' };

export const Electric = Template.bind({});
Electric.args = { value: 'CLIPTEXT', type: 'electric' };


export const Bubbles = Template.bind({});
Bubbles.args = { value: 'CLIPTEXT', type: 'bubbles' };