export const importCode = `
---
import { Radio } from 'free-astro-components'
---
`
export const basicUsageCode = `
---
import { Radio } from 'free-astro-components'
---

<Radio label='Radio' />
`
export const statesCode = `
---
import { Radio } from 'free-astro-components'
---

<Radio label="Radio unselected" />
<Radio label="Radio selected" checked />
<Radio label="Radio unselected disabled" disabled />
<Radio label="Radio selected disabled" checked disabled />
<Radio label="Radio error" error />
`

export const tableHead = ['Attribute', 'Type', 'Description', 'Default']

export const tableRows = [
  [
    {head: 'Attribute', label:'label'},
    {head: 'Type', label:'<code>string</code>'},
    {head: 'Description', label:'The text label associated with the Radio.'},
    {head: 'Default', label:'-'}
  ],
  [
    {
      head: 'Attribute',
      label: 'error',
    },
    {
      head: 'Type',
      label: '<code>boolean</code>',
    },
    {
      head: 'Description',
      label: 'Applies an error class if <code>true</code>. Useful for indicating validation errors.',
    },
    {
      head: 'Default',
      label: '<code>false</code>',
    },
  ],
  [
    {
      head: 'Attribute',
      label: 'other',
    },
    {
      head: 'Type',
      label: '<code>any</code>',
    },
    {
      head: 'Description',
      label: 'Any other props will be passed to the Radio element',
    },
    {
      head: 'Default',
      label: '-',
    },
  ],
]