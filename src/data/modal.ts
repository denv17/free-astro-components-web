export const importCode = `
---
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'free-astro-components'
---
`
export const basicUsageCode = `
---
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'free-astro-components'
---

<Button label="Open Modal" data-modal-trigger="modal-id" />

<Modal id="modal-id">
  <ModalHeader>
    <h4>Modal Title</h4>
  </ModalHeader>
  <ModalBody>
    <p>
      This is the modal body. You can add any content here.
    </p>
  </ModalBody>
  <ModalFooter>
    <Button label="Close" data-modal-close />
  </ModalFooter>
</Modal>
`

export const openModalExampleCode = `
---
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button } from 'free-astro-components'
---

<form id="example-form">
  <Input label="Name" placeholder="Enter your name" required />
  <Button type="submit" label="Submit" />
</form>

<Modal id="modal-example">
  <ModalHeader>
    <h3>Form Submitted Successfully</h3>
  </ModalHeader>
  <ModalBody>
    <p>Thank you for submitting the form. This modal will close automatically after a few seconds.</p>
  </ModalBody>
  <ModalFooter>
    <Button label="Close now" data-modal-close>
  </ModalFooter>
</Modal>

<script>
  import { openModal, closeModal } from 'free-astro-components';

  const form = document.querySelector('#example-form');
  const modal = document.querySelector('#modal-example');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    openModal(modal);

    setTimeout(() => {
      closeModal(modal)
    }, 3000);
  });
</script>
`

export const sizesCode = `
---
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'free-astro-components'

const modalSizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', 'full']
---

{
  modalSizes.map((size) => (
    <Button
      label={'Open' + size}
      data-modal-trigger={'modal-' + size}
    />
  ))
}

{
  modalSizes.map((size) => (
    <Modal id={'modal-' + size} size={size}>
      <ModalHeader>
        <Heading level={4} text={'Modal ' + size} />
      </ModalHeader>
      <ModalBody>
        <Text>
          This is the modal body. You can add any content here.
        </Text>
      </ModalBody>
      <ModalFooter>
        <Button label="Close" data-modal-close />
      </ModalFooter>
    </Modal>
  ))
}
`

export const overflowScrollCode = `
---
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'free-astro-components'
---

<Button label="Open Modal" data-modal-trigger="modal-overflow" />

<Modal id="modal-overflow">
  <ModalHeader>
    <h4>Modal Overflow</h4>
  </ModalHeader>
  <ModalBody>
    {
      Array.from({ length: 10 }).map((_) => (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Obcaecati tenetur voluptatibus vero similique
          alias ab odio commodi sint maiores facere voluptate
          nostrum atque magni, delectus perferendis laborum
          minima saepe asperiores.
        </p>
      ))
    }
  </ModalBody>
  <ModalFooter>
    <Button label="Close" data-modal-close />
  </ModalFooter>
</Modal>
`

export const customVariablesCode = `
--ac-modal-backdrop-color
--ac-modal-backdrop-filter
--ac-modal-background-color
--ac-modal-border-radius
--ac-modal-width-xs
--ac-modal-width-sm
--ac-modal-width-md
--ac-modal-width-lg
--ac-modal-width-xl
--ac-modal-width-2xl
--ac-modal-width-3xl
--ac-modal-width-4xl
`

export const customStylesCode = `
---
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'free-astro-components'
---

<Button label="Open Modal" data-modal-trigger="modal-custom" />

<Modal id="modal-custom" class="custom-modal">
  <ModalHeader>
    <h4>Custom Modal</h4>
  </ModalHeader>
  <ModalBody>
    <p>
      This is the modal body. You can add any content here.
    </p>
  </ModalBody>
  <ModalFooter>
    <Button label="Close" data-modal-close />
  </ModalFooter>
</Modal>

<style>
  .custom-modal {
    --ac-modal-border-radius: 0;
    --ac-modal-backdrop-filter: grayscale(100%);
  }
</style>
`

export const tableHead = ['Attribute', 'Type', 'Description', 'Default']

export const tableRows = [
  [
    { head: 'Attribute', label: 'id' },
    { head: 'Type', label: '<code>string</code>' },
    {
      head: 'Description',
      label: 'The unique identifier for the modal.',
    },
    { head: 'Default', label: '-' },
  ],
  [
    { head: 'Attribute', label: 'size' },
    {
      head: 'Type',
      label:
        "<code>'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full'</code>",
    },
    {
      head: 'Description',
      label: 'The size of the modal.',
    },
    { head: 'Default', label: '<code>md</code>' },
  ],
  [
    { head: 'Attribute', label: 'children' },
    {
      head: 'Type',
      label:
        '<code>ModalHeader | ModalBody | ModalFooter | [ModalHeader, ModalBody, ModalFooter]</code>',
    },
    {
      head: 'Description',
      label:
        'The content of the modal, including <code>ModalHeader</code>, <code>ModalBody</code>, and <code>ModalFooter</code> components.',
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

export const tableHeaderRows = [
  [
    { head: 'Attribute', label: 'children' },
    {
      head: 'Type',
      label: '<code>any</code>',
    },
    {
      head: 'Description',
      label: 'The content of the header. Typically includes a title.',
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

export const tableBodyRows = [
  [
    { head: 'Attribute', label: 'children' },
    {
      head: 'Type',
      label: '<code>any</code>',
    },
    {
      head: 'Description',
      label: 'The content of the body. Supports scrollable content.',
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

export const tableFooterRows = [
  [
    { head: 'Attribute', label: 'children' },
    {
      head: 'Type',
      label: '<code>any</code>',
    },
    {
      head: 'Description',
      label: 'The content of the footer. Typically includes action buttons.',
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
