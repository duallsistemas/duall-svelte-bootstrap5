<script lang="ts">
  export let ref: HTMLDivElement | undefined = undefined;
</script>

<div bind:this={ref} {...$$restProps} class="container {$$restProps.class}">
  <slot />
</div>
