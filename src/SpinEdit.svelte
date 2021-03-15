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
  export let showEditor: boolean | undefined = true;
  export let editorTitle: string | undefined = undefined;

  import { createEventDispatcher } from 'svelte';

  import type { ButtonColor } from './common';
  import Modal from './Modal.svelte';

  const dispatch = createEventDispatcher();

  let showingEditor = false;
  let editorValue: number;

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

  function openEditor(value: number): void {
    editorValue = value;
    showingEditor = true;
  }

  function closeEditor(): void {
    showingEditor = false;
  }

  function applyEditorValue(newValue: number): void {
    value = newValue;
    closeEditor();
    dispatch('edit', value);
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

<Modal title={editorTitle} visible={showingEditor} size="sm" on:close={() => closeEditor()}>
  <div slot="body" class="d-inline-flex">
    <input bind:value={editorValue} type="number" class="hide-spin-button form-control text-center shadow-none" />
    <button type="button" class="btn btn-primary btn-sm shadow-none ms-1" on:click={() => editorValue++}>+1</button>
    <button type="button" class="btn btn-primary btn-sm shadow-none ms-1" on:click={() => (editorValue += 10)}>
      +10
    </button>
    <button type="button" class="btn btn-primary btn-sm shadow-none ms-1" on:click={() => (editorValue += 50)}>
      +50
    </button>
  </div>
  <div slot="footer">
    <button type="button" class="btn btn-primary btn-sm shadow-none" on:click={() => closeEditor()}>Voltar</button>
    <button type="button" class="btn btn-primary btn-sm shadow-none" on:click={() => applyEditorValue(editorValue)}>
      Aplicar
    </button>
  </div>
</Modal>

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
    class:pointer={showEditor}
    {disabled}
    {min}
    {max}
    {step}
    {readOnly}
    on:click={() => openEditor(value)}
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

  .pointer {
    cursor: pointer;
  }
</style>
