<script lang="ts">
  import Alert from '../src/Alert.svelte';
  import Button from '../src/Button.svelte';
  import Container from '../src/Container.svelte';
  import Copyright from '../src/Copyright.svelte';
  import Icon from '../src/Icon.svelte';
  import Input from '../src/Input.svelte';
  import ListGroup from '../src/ListGroup.svelte';
  import ListGroupItem from '../src/ListGroupItem.svelte';
  import Modal from '../src/Modal.svelte';
  import Spinner from '../src/Spinner.svelte';

  let modalVisible = false;
</script>

<main>
  <Container class="mt-3">
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
    <hr />
    <Copyright class="text-center" />
  </Container>
</main>
