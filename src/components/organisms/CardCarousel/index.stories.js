import React from 'react';
import { Card } from 'reactstrap';
import CardCarousel from './index';

export default {
    title: 'organisms/CardCarousel',
    component: CardCarousel,
    decorators: [(CardCarousel) => <div style={{
        marginTop: '50px',
        marginLeft: '5em'
    }}><CardCarousel /></div>]
};

// We create a “template” of how args map to rendering
export const Primary = (args) => <CardCarousel {...args} />;
