export const importCode = `
---
import { ThemeSwitch } from 'free-astro-components'
---
`
export const basicUsageCode = `
---
import { ThemeSwitch } from 'free-astro-components'
---

<ThemeSwitch label="Toggle theme" />
`

export const tableHead = ['Attribute', 'Type', 'Description', 'Default']

export const tableRows = [
  [
    { head: 'Attribute', label: 'label' },
    { head: 'Type', label: '<code>string</code>' },
    {
      head: 'Description',
      label: 'The text label associated with the theme switch.',
    },
    { head: 'Default', label: '-' },
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
]
