<script lang="ts">
  export let ref: any | undefined = undefined;
  export let size: ModalSize | undefined = undefined;
  export let title: string | undefined = undefined;
  export let visible: boolean | undefined = undefined;
  export let body: string | undefined = undefined;
  export let closable: boolean = true;
  export let disabled: boolean | undefined = undefined;

  import { createEventDispatcher } from 'svelte';
  import type { ModalSize } from './common';

  const dispatch = createEventDispatcher();

  function close(): void {
    visible = false;
    dispatch('close');
  }
</script>

<!-- Issue: https://github.com/sveltejs/svelte/issues/4546 -->
{#if false}<slot />{/if}

{#if visible}
  <div bind:this={ref} {...$$restProps} class="d-block modal {$$restProps.class}">
    <div class="modal-dialog modal-{size}">
      <div class="modal-content">
        <div class="modal-header">
          <span class="modal-title" class:h5={size !== 'sm'} class:h6={size === 'sm'}>
            {#if title}
              {title}
            {/if}
            <slot name="title" />
          </span>
          {#if closable}
            <button
              type="button"
              class="btn-close shadow-none"
              aria-label="Fechar"
              {disabled}
              on:click={() => close()}
            />
          {/if}
        </div>
        <div class="modal-body">
          {#if body}
            {@html body}
          {/if}
          <slot name="body" />
        </div>
        <div class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>

  <div class="modal-backdrop show" />
{/if}
