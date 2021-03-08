<script lang="ts">
  export let ref: any | undefined = undefined;
  export let icon: string = 'app';
</script>

<i bind:this={ref} {...$$restProps} class="bi bi-{icon} bi-my-auto me-1 {$$restProps.class}" />
