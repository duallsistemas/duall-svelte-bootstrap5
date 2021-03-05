<script lang="ts">
  import Container from '../src/components/Container.svelte';
  import Alert from '../src/components/Alert.svelte';
</script>

<main>
  <Container class="mt-3">
    <h1>Alert</h1>
    <Alert type="success" message="Hello, world!" />
  </Container>
</main>
