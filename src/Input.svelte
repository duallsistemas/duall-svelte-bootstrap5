<script lang="ts">
  export let ref: any | undefined = undefined;
  export let id: string | undefined = undefined;
  export let list: Array<string> | undefined = undefined;
  export let listId: string | undefined = undefined;
  export let listClass: string | undefined = undefined;
  export let listItemClass: string | undefined = undefined;
  export let label: string | undefined = undefined;
  export let labelClass: string | undefined = undefined;
  export let labelHidden: boolean | undefined = undefined;
  export let title: string | undefined = undefined;

  import { onMount } from 'svelte';
  import { makeId } from './utils';

  onMount(() => {
    if (!id) id = makeId();
    if (!listId) listId = makeId();
  });
</script>

{#if label || title}
  <label class={labelClass} for={id} class:visually-hidden={labelHidden}>
    {#if labelHidden && title}
      {@html title}
    {:else}
      {@html label}
    {/if}
  </label>
{/if}
<input
  bind:this={ref}
  {...$$restProps}
  id={label ? id : undefined}
  class="form-control {$$restProps.class}"
  list={list && list.length > 0 ? listId : undefined}
  {title}
  on:change
  on:input
  on:keydown
  on:keypress
  on:focus
  on:blur
/>
{#if list}
  <datalist id={listId} class={listClass}>
    {#each list as item}
      <option class={listItemClass}>{item}</option>
    {/each}
  </datalist>
{/if}
