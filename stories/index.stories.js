import React from 'react';

import '../src/App.css'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import FieldInput from '../src/components/FieldInput/FieldInput'

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));


storiesOf('FieldInput', module)
	.add('standard', () => 
		<div style={{width: '500px'}}>
			<FieldInput type="text" placeholder="Text Input" validation_message="Please enter a valid something"></FieldInput>
		</div>
	)