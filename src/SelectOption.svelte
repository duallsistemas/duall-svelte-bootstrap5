<script lang="ts">
  export let ref: any | undefined = undefined;
  export let value: number | boolean | string | undefined = undefined;
  export let text: number | boolean | string | undefined = undefined;
</script>

<option bind:this={ref} {...$$restProps} class={$$restProps.class} {value}>
  {#if text}
    {@html text}
  {/if}
  <slot />
</option>
