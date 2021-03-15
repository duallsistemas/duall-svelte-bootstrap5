<script lang="ts">
  export let ref: any | undefined = undefined;
  export let fluid: boolean | undefined = undefined;
</script>

<div bind:this={ref} {...$$restProps} class="container{!!fluid ? '-fluid' : ''} {$$restProps.class}">
  <slot />
</div>
