import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Practice', module)
 .add('dropdown ', () => <Button primary={true} label="Button"/>);

