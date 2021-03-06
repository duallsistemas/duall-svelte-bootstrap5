<script lang="ts">
  export let ref: HTMLParagraphElement | undefined = undefined;
</script>

<p {...$$restProps} bind:this={ref} class="mt-3 {$$restProps.class}">
  <small class="text-muted">Duall Sistemas LTDA &copy; 2021</small>
</p>
