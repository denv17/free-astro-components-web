export const importCode = `
---
import { Select } from 'free-astro-components'
---
`
export const basicUsageCode = `
---
import { Select } from 'free-astro-components'
---

<Select
  label="Select an option"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ]}
  placeholder="Choose an option"
/>
`
export const disabledCode = `
---
import { Select } from 'free-astro-components'
---

<Select
  label="Disabled Select"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ]}
  disabled
  placeholder="Cannot select"
/>
<Select
  label="Disabled Select"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2', selected: true },
    { value: '3', label: 'Option 3' },
  ]}
  disabled
  placeholder="Cannot select"
/>
`
export const helperTextCode = `
---
import { Select } from 'free-astro-components'
---

<Select
  label="Select with Helper Text"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ]}
  helperText="Choose an option from the list."
  placeholder="Choose an option"
/>
`
export const statusCode = `
---
import { Select } from 'free-astro-components'
---

<Select
  label="Default State"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]}
  status="default"
  placeholder="Select an option"
/>
<Select
  label="Success State"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2', selected: true },
  ]}
  status="success"
  helperText="Selection successful."
  placeholder="Select an option"
/>
<Select
  label="Error State"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]}
  status="error"
  helperText="There was an error with your selection."
  placeholder="Select an option"
/>
`

export const tableHead = ['Attribute', 'Type', 'Description', 'Default']

export const tableRows = [
  [
    { head: 'Attribute', label: 'label' },
    { head: 'Type', label: '<code>string</code>' },
    {
      head: 'Description',
      label: 'The text label associated with the select field.',
    },
    { head: 'Default', label: '-' },
  ],
  [
    { head: 'Attribute', label: 'options' },
    {
      head: 'Type',
      label:
        '<code>{ value: string, label: string, selected?: boolean }[]</code>',
    },
    {
      head: 'Description',
      label:
        'The list of options available for selection. The selected property indicates the pre-selected option.',
    },
    {
      head: 'Default',
      label:
        "<code>[{ value: '1', label: 'Option 1' },{ value: '2', label: 'Option 2' },{ value: '3', label: 'Option 3' },]</code>",
    },
  ],
  [
    {
      head: 'Attribute',
      label: 'placeholder',
    },
    {
      head: 'Type',
      label: '<code>string</code>',
    },
    {
      head: 'Description',
      label: 'A placeholder text displayed when no option is selected.',
    },
    {
      head: 'Default',
      label: '-',
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
      label: 'Whether the select field is disabled.',
    },
    {
      head: 'Default',
      label: '<code>false</code>',
    },
  ],
  [
    {
      head: 'Attribute',
      label: 'helperText',
    },
    {
      head: 'Type',
      label: '<code>string</code>',
    },
    {
      head: 'Description',
      label: 'Additional text to assist the user.',
    },
    {
      head: 'Default',
      label: '-',
    },
  ],
  [
    {
      head: 'Attribute',
      label: 'status',
    },
    {
      head: 'Type',
      label: '<code>default | success | error</code>',
    },
    {
      head: 'Description',
      label: 'The status of the select field.',
    },
    {
      head: 'Default',
      label: '<code>default</code>',
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
      label: 'Any other props will be passed to the select element.',
    },
    {
      head: 'Default',
      label: '-',
    },
  ],
]
