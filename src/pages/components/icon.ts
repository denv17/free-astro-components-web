export const importCode = `
---
import { Icon } from 'free-astro-components'
---
`
export const basicUsageCode = `
---
import { Icon } from 'free-astro-components'
---

<Icon icon='star' class="icon-class" />

<style>
  .icon-class {
    width: 2rem;
    height: 2rem;
    color: rgb(64, 93, 255);
  }
<style>
`
export const customizationCode = `
---
import { Icon } from 'free-astro-components'
---

<Icon icon='star' class="icon-small" />
<Icon icon='star' class="icon-medium" />
<Icon icon='star' class="icon-large" />

<style>
  .icon-small {
    width: 1.5rem;
    height: 1.5rem;
    color: rgb(64, 93, 255);
  }

  .icon-medium {
    width: 2rem;
    height: 2rem;
    color: rgb(64, 93, 255);
  }

  .icon-large {
    width: 2.5rem;
    height: 2.5rem;
    color: rgb(64, 93, 255);
  }
<style>
`

export const tableHead = ['Attribute', 'Type', 'Description', 'Default']

export const tableRows = [
  [
    {head: 'Attribute', label:'icon'},
    {head: 'Type', label:'<code>string</code>'},
    {head: 'Description', label:'The name of the icon to display.'},
    {head: 'Default', label:'-'}
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
      label: 'CSS class to apply to the icon for defining size and color.',
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
      label: 'Any other props will be passed to the <code>svg</code> element of the icon.',
    },
    {
      head: 'Default',
      label: '-',
    },
  ],
]