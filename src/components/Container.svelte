<script lang="ts">
  export let ref: HTMLDivElement | undefined = undefined;
</script>

<div bind:this={ref} class="container {$$restProps.class}">
  <slot />
</div>
