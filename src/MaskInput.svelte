<script>
  export let ref = undefined;
  export let value = '';
  export let options = {};

  import { tick } from 'svelte';
  import imask from 'svelte-imask/src/action';

  function accept(event) {
    value = event.detail.unmaskedValue;
    tick().then(() => (event.detail.typedValue = value));
  }
</script>

<input
  bind:this={ref}
  {...$$restProps}
  value={value || ''}
  class={$$restProps.class}
  use:imask={options}
  on:accept={accept}
  on:accept
  on:complete
  on:blur
  on:keydown
  on:input
  on:click
  on:focus
/>
