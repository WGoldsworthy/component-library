import React from 'react';
import { Earth2 } from './index';
import CanvasWrapper from '../CanvasWrapper';

export default {
    title: 'threejs/Earth',
    component: Earth2,
    decorators: [(Earth2) =>  
        <CanvasWrapper>
            <Earth2 />
        </CanvasWrapper>
        ]
};

// We create a “template” of how args map to rendering
export const Primary = (args) => <Earth2 />;
