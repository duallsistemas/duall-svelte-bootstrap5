<script lang="ts">
  export let ref: any | undefined = undefined;
  import Button from './Button.svelte';
</script>

<Button
  {ref}
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
