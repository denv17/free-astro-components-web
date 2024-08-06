export const importCode = `
---
import { Input } from 'free-astro-components'
---
`
export const basicUsageCode = `
---
import { Input } from 'free-astro-components'
---

<Input label="Basic input" placeholder="Enter text..." />
`
export const disabledCode = `
---
import { Input } from 'free-astro-components'
---

<Input
  label="Disabled Input"
  placeholder="Disabled input"
  disabled
/>
<Input
  label="Disabled Input"
  value="Disabled input"
  placeholder="Disabled input"
  disabled
/>
`
export const readonlyCode = `
---
import { Input } from 'free-astro-components'
---

<Input
  label="Readonly Input"
  value="Readonly Input"
  readonly
/>
`
export const searchCode = `
---
import { Input } from 'free-astro-components'
---

<Input
  label="Search"
  placeholder="Search..."
  type="search"
/>
`
export const passwordCode = `
---
import { Input } from 'free-astro-components'
---

<Input
  label="Password"
  placeholder="Password..."
  type="password"
/>
`
export const helperTextCode = `
---
import { Input } from 'free-astro-components'
---

<Input
  label="Input with Helper Text"
  placeholder="Enter text..."
  helperText="This is some helper text."
/>
`
export const withIconCode = `
---
import { Input } from 'free-astro-components'
---
<Input
  icon="star"
  label="Input with Icon"
  placeholder="Enter text..."
/>
`
export const statusCode = `
---
import { Input } from 'free-astro-components'
---

<Input
  label="Default State"
  placeholder="Default state"
  status="default"
  helperText="This is some helper text."
/>
<Input
  label="Success State"
  value="Success state"
  placeholder="Success state"
  status="success"
  helperText="This is a success message."
/>
<Input
  label="Error State"
  placeholder="Error state"
  status="error"
  helperText="This is an error message."
/>
`

export const tableHead = ['Attribute', 'Type', 'Description', 'Default']

export const tableRows = [
  [
    { head: 'Attribute', label: 'type' },
    { head: 'Type', label: '<code>string</code>' },
    {
      head: 'Description',
      label: 'The type of the input (text, search, password, etc.).',
    },
    { head: 'Default', label: 'text' },
  ],
  [
    { head: 'Attribute', label: 'label' },
    { head: 'Type', label: '<code>string</code>' },
    {
      head: 'Description',
      label: 'The text label associated with the input field.',
    },
    { head: 'Default', label: '-' },
  ],
  [
    { head: 'Attribute', label: 'placeholder' },
    { head: 'Type', label: '<code>string</code>' },
    { head: 'Description', label: 'The placeholder text for the input field.' },
    { head: 'Default', label: '-' },
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
      label: 'Disables the input field.',
    },
    {
      head: 'Default',
      label: '<code>false</code>',
    },
  ],
  [
    {
      head: 'Attribute',
      label: 'readonly',
    },
    {
      head: 'Type',
      label: '<code>boolean</code>',
    },
    {
      head: 'Description',
      label: 'Makes the input field read-only.',
    },
    {
      head: 'Default',
      label: '<code>false</code>',
    },
  ],
  [
    {
      head: 'Attribute',
      label: 'icon',
    },
    {
      head: 'Type',
      label: '<code>string</code>',
    },
    {
      head: 'Description',
      label:
        'The icon to display in the input field, on the right side. The icon can be selected from a list of available icons.',
    },
    {
      head: 'Default',
      label: '-',
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
      label: 'The status of the input field.',
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
      label:
        'Any other props will be passed to the <code>input</code> element.',
    },
    {
      head: 'Default',
      label: '-',
    },
  ],
]
