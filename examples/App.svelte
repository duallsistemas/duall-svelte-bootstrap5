<script lang="ts">
  import {
    Alert,
    Button,
    Container,
    Copyright,
    Icon,
    Input,
    ListGroup,
    ListGroupItem,
    Modal,
    Spinner,
    Window,
  } from '..';

  let modalVisible = false;
</script>

<Container class="d-flex justify-content-center align-items-center h-100">
  <Window title="Examples" class="py-2" width={800} returnable={false}>
    <h4>Alert</h4>
    <Alert type="success" message="Hello, world!" />
    <hr />
    <h4>Button</h4>
    <Button title="Button" on:click={() => alert('Button clicked')} />
    <hr />
    <h4>Icon</h4>
    <Icon icon="hand-thumbs-up" />
    <hr />
    <Input label="Input" list={['Item 1', 'Item 2', 'Item 3']} placeholder="Text" />
    <hr />
    <ListGroup>
      <ListGroupItem>Item 1</ListGroupItem>
      <ListGroupItem>Item 2</ListGroupItem>
      <ListGroupItem>Item 3</ListGroupItem>
    </ListGroup>
    <hr />
    <Button on:click={() => (modalVisible = true)}>Open modal</Button>
    <Modal title="Modal" visible={modalVisible} on:close={() => (modalVisible = false)}>
      <span slot="body">Some text</span>
      <Button slot="footer" on:click={() => (modalVisible = false)}>OK</Button>
    </Modal>
    <hr />
    <Spinner />
    <Copyright slot="footer" class="text-center mt-3" />
  </Window>
</Container>
