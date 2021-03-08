<script lang="ts">
  export let ref: any | undefined = undefined;
  export let id: string | undefined = undefined;
  export let value: any | undefined = undefined;
  export let label: string | undefined = undefined;
  export let labelClass: string | undefined = undefined;
  export let labelHidden: boolean | undefined = undefined;
  export let title: string | undefined = undefined;
  export let defaultItem: string | undefined = undefined;
</script>

{#if id && (label || title)}
  <label class={labelClass} for={id} class:visually-hidden={labelHidden}>
    {#if labelHidden && title}
      {@html title}
    {:else}
      {@html label}
    {/if}
  </label>
{/if}
<select
  bind:this={ref}
  bind:value
  {...$$restProps}
  {id}
  {title}
  class="form-select {$$restProps.class}"
  on:change
  on:input
  on:keydown
  on:keypress
  on:focus
  on:blur
>
  {#if !!defaultItem}
    <option disabled selected>{defaultItem}</option>
  {/if}
  <slot />
</select>
