export const importCode = `
---
import { Checkbox } from 'free-astro-components'
---
`
export const basicUsageCode = `
---
import { Checkbox } from 'free-astro-components'
---

<Checkbox label='Checkbox' />
`
export const statesCode = `
---
import { Checkbox } from 'free-astro-components'
---

<CheckboxAc label="Checkbox unchecked" />
<CheckboxAc label="Checkbox checked" checked />
<CheckboxAc label="Checkbox unchecked disabled" disabled />
<CheckboxAc label="Checkbox checked disabled" checked disabled />
<CheckboxAc label="Checkbox error" error />
`

export const tableHead = ['Attribute', 'Type', 'Description', 'Default']

export const tableRows = [
  [
    {head: 'Attribute', label:'label'},
    {head: 'Type', label:'<code>string</code>'},
    {head: 'Description', label:'The text label associated with the checkbox.'},
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
      label: 'Any other props will be passed to the Checkbox element',
    },
    {
      head: 'Default',
      label: '-',
    },
  ],
]