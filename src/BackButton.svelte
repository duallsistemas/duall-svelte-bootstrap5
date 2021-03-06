<script lang="ts">
  import Button from './Button.svelte';
</script>

<Button
  {...$$restProps}
  href="/"
  class={$$restProps.class}
  icon="arrow-left"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
>
  Voltar
</Button>
