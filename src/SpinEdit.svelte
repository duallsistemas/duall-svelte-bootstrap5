<!-- TODO: allow to inform decimal separator -->
<script lang="ts">
  export let ref: any | undefined = undefined;
  export let color: ButtonColor | undefined = 'secondary';
  export let value: number = 0;
  export let max: number = Number.MAX_SAFE_INTEGER;
  export let min: number = Number.MIN_SAFE_INTEGER;
  export let step: number = 1;
  export let readOnly: boolean | undefined = false;
  export let removable: boolean | undefined = true;
  export let inputGroup: boolean | undefined = true;
  export let disabled: boolean | undefined = false;

  import { createEventDispatcher } from 'svelte';
  import type { ButtonColor } from './common';

  const dispatch = createEventDispatcher();

  function dec(): void {
    if (value > min) {
      value -= step;
      dispatch('dec', value);
    } else {
      dispatch('remove', value);
    }
  }

  function inc(): void {
    if (value < max) {
      value += step;
      dispatch('inc', value);
    }
  }

  $: if (value) {
    if (value < min) {
      value = min;
    } else if (value > max) {
      value = max;
    }
    dispatch('input', value);
  }
</script>

<div bind:this={ref} {...$$restProps} class:input-group={inputGroup} class="d-print-none {$$restProps.class}">
  <button
    type="button"
    class="btn btn-sm btn-{color} shadow-none rounded-end rounded-pill px-1"
    disabled={disabled || (!removable && (!value || value <= min))}
    on:click={() => dec()}
  >
    {#if removable}
      <span class="bi bi-{value <= min ? 'trash' : 'dash'} bi-my-auto h5 ms-1" />
    {:else}
      <span class="bi bi-dash bi-my-auto h5 ms-1" />
    {/if}
  </button>
  <input
    bind:value
    type="number"
    class="hide-spin-button form-control form-control-sm shadow-none text-center"
    class:input-white-read-only={readOnly && !disabled}
    class:input-text-grey-disabled={disabled}
    {disabled}
    {min}
    {max}
    {step}
    {readOnly}
    on:mouseover
    on:mouseenter
    on:mouseleave
  />
  <button
    type="button"
    class="btn btn-sm btn-{color} shadow-none rounded-start rounded-pill px-1"
    disabled={disabled || value >= max}
    on:click={() => inc()}
  >
    <span class="bi bi-plus bi-my-auto h5 me-1" />
  </button>
</div>

<style>
  /* Chrome, Safari, Edge, Opera */
  .hide-spin-button::-webkit-outer-spin-button,
  .hide-spin-button::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  .hide-spin-button[type='number'] {
    -moz-appearance: textfield;
  }

  .input-white-read-only:read-only {
    background-color: white;
  }

  .input-text-grey-disabled:disabled {
    color: #6c757d;
  }
</style>
