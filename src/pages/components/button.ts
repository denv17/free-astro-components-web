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
<Button label='Button disabled' disabled />
`
export const sizesCode = `
<Button label='Button small' size='small' />
<Button label='Button medium' size='medium' />
`
export const variantsCode = `
<Button label='Button primary' variant='primary' />
<Button label='Button secondary' variant='secondary' />
<Button label='Button dark' variant='dark' />
<Button label='Button light' variant='light' />
`
export const withIconCode = `
<Button label='Button' icon='arrow-left' iconPosition='left' />
<Button label='Button' icon='arrow-right' iconPosition='right' />
`
export const iconOnlyCode = `
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