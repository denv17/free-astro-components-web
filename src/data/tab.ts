export const importCode = `
---
import { Tab, TabItem } from 'free-astro-components'
---
`
export const basicUsageCode = `
---
import { Tab, TabItem } from 'free-astro-components'
---

<Tab
  tabs={[{ label: 'Tab 1', active: true }, { label: 'Tab 2' }]}
>
  <TabItem active>Content for Tab 1</TabItem>
  <TabItem>Content for Tab 2</TabItem>
</Tab>
`

export const tableTabHead = ['Attribute', 'Type', 'Description', 'Default']

export const tableTabRows = [
  [
    { head: 'Attribute', label: 'tabs' },
    {
      head: 'Type',
      label: '<code>{ label: string, active?: boolean }[]</code>',
    },
    {
      head: 'Description',
      label:
        'An array of objects defining the tabs. Each object should have a <code>label</code> for the tab title and an optional <code>active</code> boolean to indicate the active tab.',
    },
    {
      head: 'Default',
      label:
        "<code>[{ label: 'tab 1', active: true }, { label: 'tab 2' }]</code>",
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
]

export const tableTabItemHead = ['Attribute', 'Type', 'Description', 'Default']

export const tableTabItemRows = [
  [
    { head: 'Attribute', label: 'active' },
    { head: 'Type', label: '<code>boolean</code>' },
    { head: 'Description', label: 'Indicates whether the tab is active.' },
    { head: 'Default', label: '<code>false</code>' },
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