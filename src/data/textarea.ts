export const importCode = `
---
import { Textarea } from 'free-astro-components'
---
`
export const basicUsageCode = `
---
import { Textarea } from 'free-astro-components'
---

<Textarea label="Basic Textarea" placeholder="Enter your text..." />
`
export const disabledCode = `
---
import { Textarea } from 'free-astro-components'
---

<Textarea
  label="Disabled Textarea"
  placeholder="Disabled Textarea"
  disabled
/>
<Textarea
  label="Disabled Textarea"
  value="Disabled Textarea"
  placeholder="Disabled Textarea"
  disabled
/>
`
export const readonlyCode = `
---
import { Textarea } from 'free-astro-components'
---

<Textarea
  label="Readonly Textarea"
  value="This textarea is read-only"
  placeholder="This textarea is read-only"
  readonly
/>
`
export const withIconCode = `
---
import { Textarea } from 'free-astro-components'
---

<Textarea
  icon="star"
  label="Textarea with icon"
  placeholder="Enter your text..."
/>
`
export const helperTextCode = `
---
import { Textarea } from 'free-astro-components'
---

<Textarea
  label="Textarea with Helper Text"
  placeholder="Enter your text..."
  helperText="This is some helper text."
/>
`
export const statusCode = `
---
import { Textarea } from 'free-astro-components'
---

<Textarea
  label="Default State"
  placeholder="Default state"
  status="default"
/>
<Textarea
  label="Success State"
  value="Success state"
  placeholder="Success state"
  status="success"
  helperText="This is a success message."
/>
<Textarea
  label="Error State"
  placeholder="Error state"
  status="error"
  helperText="This is an error message."
/>
`

export const tableHead = ['Attribute', 'Type', 'Description', 'Default']

export const tableRows = [
  [
    { head: 'Attribute', label: 'label' },
    { head: 'Type', label: '<code>string</code>' },
    {
      head: 'Description',
      label: 'The text label associated with the textarea field.',
    },
    { head: 'Default', label: '-' },
  ],
  [
    { head: 'Attribute', label: 'placeholder' },
    { head: 'Type', label: '<code>string</code>' },
    {
      head: 'Description',
      label: 'The placeholder text for the textarea field.',
    },
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
      label: 'Whether the textarea field is disabled.',
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
      label: 'Whether the textarea field is read-only.',
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
        'The icon to display in the textarea field, on the right side. The icon can be selected from a list of available icons.',
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
      label: 'The status of the textarea field.',
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
        'Any other props will be passed to the <code>textarea</code> element.',
    },
    {
      head: 'Default',
      label: '-',
    },
  ],
]
