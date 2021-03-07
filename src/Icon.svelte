<script lang="ts">
  export let icon: string = 'app';
</script>

<i {...$$restProps} class="bi bi-{icon} bi-my-auto me-1 {$$restProps.class}" />
