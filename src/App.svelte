<script lang="ts">
  import { Alert, Container, Copyright, Icon } from './components';
</script>

<main>
  <Container class="mt-3">
    <h4>Alert</h4>
    <Alert type="success" message="Hello, world!" />
    <hr />
    <h4>Icon</h4>
    <Icon icon="hand-thumbs-up" />
    <hr />
    <Copyright class="text-center" />
  </Container>
</main>
