export const importCode = `
---
import { Switch } from 'free-astro-components'
---
`
export const basicUsageCode = `
---
import { Switch } from 'free-astro-components'
---

<Switch label="Toggle Switch" />
`
export const statesCode = `
---
import { Switch } from 'free-astro-components'
---

<Switch label="Switch unchecked" />
<Switch label="Switch checked" checked />
<Switch label="Switch unchecked disabled" disabled />
<Switch label="Switch checked disabled" checked disabled />
`

export const tableHead = ['Attribute', 'Type', 'Description', 'Default']

export const tableRows = [
  [
    { head: 'Attribute', label: 'label' },
    { head: 'Type', label: '<code>string</code>' },
    {
      head: 'Description',
      label: 'The text label associated with the switch.',
    },
    { head: 'Default', label: '-' },
  ],
  [
    {
      head: 'Attribute',
      label: 'checked',
    },
    {
      head: 'Type',
      label: '<code>boolean</code>',
    },
    {
      head: 'Description',
      label: 'Whether the switch is in the checked state.',
    },
    {
      head: 'Default',
      label: '<code>false</code>',
    },
  ],
  [
    {
      head: 'Attribute',
      label: 'disabled',
    },
    {
      head: 'Type',
      label: '<code>boolean</code>',
    },
    {
      head: 'Description',
      label: 'Whether the switch is disabled.',
    },
    {
      head: 'Default',
      label: '<code>false</code>',
    },
  ],
  [
    {
      head: 'Attribute',
      label: 'class',
    },
    {
      head: 'Type',
      label: '<code>string</code>',
    },
    {
      head: 'Description',
      label: 'CSS class for custom styling.',
    },
    {
      head: 'Default',
      label: '-',
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
      label:
        'Any other props will be passed to the <code>checkbox</code> element.',
    },
    {
      head: 'Default',
      label: '-',
    },
  ],
]
