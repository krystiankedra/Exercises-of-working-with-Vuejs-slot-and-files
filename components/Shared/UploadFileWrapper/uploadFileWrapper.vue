<template>
  <div>
    <v-btn class="ghost-button" @click="openHandler">
      <slot name="btn-name">
        Upload
      </slot>
    </v-btn>
    <input
      v-show="false"
      id="file-uploader"
      type="file"
      @change="(e) => uploadHandler(e)"
    />
  </div>
</template>

<script>
export default {
  props: {
    uploadHandler: {
      type: Function,
      default: () => null
    }
  },
  methods: {
    openHandler() {
      document.getElementById('file-uploader').click()
    }
  }
}
</script>
