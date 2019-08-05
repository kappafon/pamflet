import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Temp } from '../../components/temp/temp'

export const testObject = {
    id: '1',
    title: 'Test Object',
}

export const actions = {
    onClicked: action('onClicked'),
}

storiesOf('Task', module)
    .add('default', () => <Temp testObject={testObject} {...actions} />)
    .add('clicked', () => <Temp testObject={{ ...testObject, title: 'CLICKED' }} {...actions} />)
