<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { AlertType } from '../helpers/types';

  export let type: AlertType | undefined = 'primary';
  export let closable = true;
  export let visible = true;
  export let message: string | undefined = undefined;
  export let small = false;
  export let timeout = 5000;

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
    class="alert alert-dismissible alert-{type} mb-0 {$$restProps.class}"
    class:py-2={small}
    class:show={visible}
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
        on:click={() => closeHandle()}
      />
    {/if}
  </div>
{/if}
