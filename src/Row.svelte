<script lang="ts">
  export let ref: any | undefined = undefined;
</script>

<div bind:this={ref} {...$$restProps} class="row {$$restProps.class}">
  <slot />
</div>
