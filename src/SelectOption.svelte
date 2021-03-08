<script lang="ts">
  export let ref: any | undefined = undefined;
  export let value: any | undefined = undefined;
  export let text: any | undefined = undefined;
</script>

<option bind:this={ref} {...$$restProps} class={$$restProps.class} {value}>
  {#if text}
    {@html text}
  {/if}
  <slot />
</option>
