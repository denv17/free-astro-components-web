export const importCode = `
---
import { Button } from 'free-astro-components'
---
`
export const basicUsageCode = `
---
import { Button } from 'free-astro-components'
---

<Button label='Button' />
`
export const disabledCode = `
---
import { Button } from 'free-astro-components'
---

<Button label='Button disabled' disabled />
`
export const sizesCode = `
---
import { Button } from 'free-astro-components'
---

<Button label='Button small' size='small' />
<Button label='Button medium' size='medium' />
`
export const variantsCode = `
---
import { Button } from 'free-astro-components'
---

<Button label='Button primary' variant='primary' />
<Button label='Button secondary' variant='secondary' />
<Button label='Button dark' variant='dark' />
<Button label='Button light' variant='light' />
`
export const withIconCode = `
---
import { Button } from 'free-astro-components'
---

<Button label='Button' icon='arrow-left' iconPosition='left' />
<Button label='Button' icon='arrow-right' iconPosition='right' />
`
export const iconOnlyCode = `
---
import { Button } from 'free-astro-components'
---

<Button icon='star' />
`
export const customVariablesCode = `
--ac-btn-border-radius
--ac-btn-font-weight
--ac-btn-gap
--ac-btn-icon-medium-size
--ac-btn-icon-small-size
--ac-btn-medium-font-size
--ac-btn-medium-height
--ac-btn-medium-icon-size
--ac-btn-medium-padding
--ac-btn-small-font-size
--ac-btn-small-height
--ac-btn-small-icon-size
--ac-btn-small-padding
`
export const customStylesCode = `
---
import { Button } from 'free-astro-components'
---

<Button label='Click me' class='custom-button' />

<style>
/* Example of custom button styles */
.custom-button {
  --ac-btn-border-radius: 999px;
  --ac-btn-font-weight: 600;
  border-width: 0;
  background-image: linear-gradient(
    90deg,
    rgb(var(--ac-primary)) 0%,
    rgb(var(--ac-secondary)) 100%
  );
}
</style>
`

export const tableHead = ['Attribute', 'Type', 'Description', 'Default']

export const tableRows = [
  [
    { head: 'Attribute', label: 'label' },
    { head: 'Type', label: '<code>string</code>' },
    { head: 'Description', label: 'The text displayed on the button' },
    { head: 'Default', label: '-' },
  ],
  [
    {
      head: 'Attribute',
      label: 'size',
    },
    {
      head: 'Type',
      label: '<code>small | medium</code>',
    },
    {
      head: 'Description',
      label: 'The size of the button',
    },
    {
      head: 'Default',
      label: '<code>medium</code>',
    },
  ],
  [
    {
      head: 'Attribute',
      label: 'variant',
    },
    {
      head: 'Type',
      label: '<code>primary | secondary | dark | light</code>',
    },
    {
      head: 'Description',
      label: 'The visual variant of the button',
    },
    {
      head: 'Default',
      label: '<code>primary</code>',
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
        'The name of the icon to display on the button from the available <a href="/components/icon" class="text-primary hover:text-primary/90 hover:underline underline-offset-2 transition duration-300">icon list.</a>',
    },
    {
      head: 'Default',
      label: '-',
    },
  ],
  [
    {
      head: 'Attribute',
      label: 'iconPosition',
    },
    {
      head: 'Type',
      label: '<code>left | right</code>',
    },
    {
      head: 'Description',
      label: 'The position of the icon relative to the label',
    },
    {
      head: 'Default',
      label: '<code>right</code>',
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
        'Any other props will be passed to the <code>button</code> element',
    },
    {
      head: 'Default',
      label: '-',
    },
  ],
]
