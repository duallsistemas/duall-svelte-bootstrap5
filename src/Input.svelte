<script lang="ts">
  export let ref: HTMLInputElement | undefined = undefined;
  export let id = makeId();
  export let list: Array<string> | undefined = undefined;
  export let listId = makeId();
  export let listClass: string | undefined = undefined;
  export let listItemClass: string | undefined = undefined;
  export let label: string | undefined = undefined;
  export let labelClass: string | undefined = undefined;

  import { makeId } from './utils';
</script>

{#if label}
  <label class={labelClass} for={id}>
    {@html label}
  </label>
{/if}
<input
  {...$$restProps}
  bind:this={ref}
  id={label ? id : undefined}
  class="form-control {$$restProps.class}"
  list={list && list.length > 0 ? listId : undefined}
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
