<template>
  <input type="file" @change="(e) => uploadHandler(e)" />
</template>

<script>
export default {
  props: {
    uploadHandler: {
      type: Function,
      default: () => null
    }
  }
}
</script>