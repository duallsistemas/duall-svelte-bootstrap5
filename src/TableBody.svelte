<script lang="ts">
  export let ref: any | undefined = undefined;
</script>

<tbody bind:this={ref} {...$$restProps}>
  <slot />
</tbody>
