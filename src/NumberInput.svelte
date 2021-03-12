<script>
  export let ref = undefined;
  export let value = 0;
  export let min = -10000;
  export let max = 10000;
  export let digits = 2;

  import imask from 'svelte-imask/src/action';

  const options = {
    mask: Number,
    scale: digits,
    signed: false,
    thousandsSeparator: '.',
    padFractionalZeros: true,
    normalizeZeros: true,
    radix: ',',
    mapToRadix: ['.'],
    min,
    max,
  };

  let internalValue = value;

  $: valueChanged(value);

  function valueChanged(value) {
    if (!value) internalValue = '';
  }

  function accept(event) {
    value = event.detail.typedValue;
    internalValue = event.detail.value;
  }
</script>

<input
  bind:this={ref}
  {...$$restProps}
  class={$$restProps.class}
  use:imask={options}
  bind:value={internalValue}
  on:accept={accept}
  on:accept
  on:blur
  on:keydown
  on:input
  on:click
  on:complete
  on:focus
/>
