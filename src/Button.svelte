<script lang="ts">
  export let ref: any | undefined = undefined;
  export let color: ButtonColor | undefined = 'primary';
  export let title: string | undefined = undefined;
  export let hint: string | undefined = undefined;
  export let icon: string | undefined = undefined;
  export let href: string | undefined = undefined;
  export let disabled: boolean | undefined = undefined;
  export let loading: boolean | undefined = undefined;
  export let loadingMessage: string | undefined = 'Carregando ...';
  export let size: ButtonSize | undefined = undefined;

  import type { ButtonSize, ButtonColor } from './common';
  import Icon from './Icon.svelte';
  import Spinner from './Spinner.svelte';
</script>

{#if href}
  <a
    bind:this={ref}
    {...$$restProps}
    {href}
    class="btn btn-{color} {$$restProps.class}"
    class:btn-sm={size === 'sm'}
    class:btn-lg={size === 'lg'}
    title={hint}
    class:disabled
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
  >
    {#if loading}
      <Spinner class="align-middle" title={loadingMessage} small />
    {:else if icon}
      <Icon {icon} />
    {/if}
    {#if title}
      {title}
    {/if}
    <slot />
  </a>
{:else}
  <button
    bind:this={ref}
    {...$$restProps}
    type="button"
    class="btn btn-{color} {$$restProps.class}"
    class:btn-sm={size === 'sm'}
    class:btn-lg={size === 'lg'}
    title={hint}
    class:disabled
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
  >
    {#if loading}
      <Spinner class="align-middle" title={loadingMessage} small />
    {:else if icon}
      <Icon {icon} />
    {/if}
    {#if title}
      {title}
    {/if}
    <slot />
  </button>
{/if}
