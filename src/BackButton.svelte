<script lang="ts">
  import Button from './Button.svelte';
</script>

<Button href="/" icon="arrow-left" {...$$restProps} on:click on:mouseover on:mouseenter on:mouseleave>Voltar</Button>
