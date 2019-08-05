import { withInfo } from '@storybook/addon-info'
import { configure } from '@storybook/react'
import { addDecorator } from '@storybook/react'
// automatically import all files ending in *.stories.tsx
const req = require.context('../src/stories', true, /\.stories\.tsx$/)

// Globally in your .storybook/config.js, or alternatively, per-chapter
addDecorator(
    withInfo({
        inline: true,
        source: false,
        styles: {
            header: {
                body: {
                    paddingBottom: 0,
                    paddingTop: 0,
                },
                h1: {
                    display: 'inline',
                    fontSize: '25px',
                    marginRight: '20px',
                },
                h2: {
                    color: '#999',
                    display: 'inline',
                },
            },
            infoBody: {
                backgroundColor: '#eee',
                lineHeight: '2',
                padding: '0px 5px',
            },
        },
    })
)

function loadStories() {
    req.keys().forEach(req)
}

configure(loadStories, module)
