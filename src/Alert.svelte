<script lang="ts">
  export let ref: any | undefined = undefined;
  export let color: AlertColor | undefined = 'primary';
  export let closable: boolean = true;
  export let visible: boolean = true;
  export let message: string | undefined = undefined;
  export let small: boolean | undefined = undefined;
  export let timeout: number = 5000;
  export let center: boolean | undefined = undefined;

  import { createEventDispatcher } from 'svelte';
  import type { AlertColor } from './common';

  const dispatch = createEventDispatcher();

  let timeoutHandle: number;

  function closeHandle() {
    visible = false;
    dispatch('close');
  }

  $: if (visible) {
    if (timeoutHandle !== 0) clearTimeout(timeoutHandle);
    timeoutHandle = setTimeout(() => dispatch('timeout'), timeout);
  }
</script>

{#if visible}
  <div
    bind:this={ref}
    {...$$restProps}
    class="alert alert-dismissible alert-{color} mb-0 {$$restProps.class}"
    class:py-2={small}
    class:show={visible}
    class:position-absolute={center}
    class:top-50={center}
    class:start-50={center}
    class:translate-middle={center}
    class:d-table={center}
    role="alert"
  >
    <h6 class="my-0">
      {#if message}
        {#if small}
          <small>
            {@html message}
          </small>
        {:else}
          {@html message}
        {/if}
      {/if}
      <slot />
    </h6>
    {#if closable}
      <button
        type="button"
        class="btn-close shadow-none"
        class:py-2={small}
        class:pe-0={small}
        aria-label="Fechar"
        on:mouseover
        on:mouseenter
        on:mouseleave
        on:click={() => closeHandle()}
      />
    {/if}
  </div>
{/if}
