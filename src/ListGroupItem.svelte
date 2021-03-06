<script lang="ts">
  export let ref: HTMLLIElement | HTMLButtonElement | HTMLAnchorElement | undefined = undefined;
  export let title: string | undefined = undefined;
  export let icon: string | undefined = undefined;
  export let action: boolean | undefined = undefined;
  export let href: string | undefined = undefined;
  export let hint: string | undefined = undefined;
  export let disabled: boolean | undefined = undefined;

  import Icon from './Icon.svelte';
</script>

{#if action}
  {#if href}
    <a
      bind:this={ref}
      {...$$restProps}
      {href}
      class="list-group-item list-group-item-action {$$restProps.class}"
      class:disabled
      title={hint}
      on:click
      on:mouseover
      on:mouseenter
      on:mouseleave
    >
      <Icon {icon} />
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
      class="list-group-item list-group-item-action {$$restProps.class}"
      title={hint}
      {disabled}
      on:click
      on:mouseover
      on:mouseenter
      on:mouseleave
    >
      {#if icon}
        <Icon {icon} />
      {/if}
      {#if title}
        {title}
      {/if}
      <slot />
    </button>
  {/if}
{:else}
  <li bind:this={ref} class="list-group-item" class:disabled title={hint} {...$$restProps} on:click>
    {#if title}
      {@html title}
    {/if}
    <slot />
  </li>
{/if}
