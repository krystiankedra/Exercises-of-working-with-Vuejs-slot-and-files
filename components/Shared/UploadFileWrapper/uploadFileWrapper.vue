<template>
  <div id="upload-file-wrapper" class="upload-file-wrapper" @click="openUploader">
    <v-layout row wrap>
      <v-flex xs12 md5>
        <v-btn class="ghost-button">
          <slot name="btn-name">
            Upload
          </slot>
        </v-btn>
      </v-flex>
      <v-flex xs12 md7>
        <span>
          Drag & Drop
        </span>
        <v-icon>
          cloud_upload
        </v-icon>
      </v-flex>
    </v-layout>
    <input
      v-show="false"
      id="file-uploader"
      type="file"
      @change="changeUploadedEventTargetToFile"
    />
  </div>
</template>

<script>
import { convertDropDataTransferToFile, convertEventTargetToFile } from '~/management/File/file'
export default {
  props: {
    uploadHandler: {
      type: Function,
      default: () => null
    }
  },
  methods: {
    openUploader() {
      document.getElementById('file-uploader').click()
    },
    changeUploadedEventTargetToFile(e) {
      this.uploadHandler(convertEventTargetToFile(e))
    },
    unnecessaryCallsFromEvent(e) {
      e.preventDefault()
      e.stopPropagation()
    },
    dropHandler(e) {
      this.unnecessaryCallsFromEvent(e)
      this.uploadHandler(convertDropDataTransferToFile(e))
    }
  },
  mounted() {
    const uploadFileWrapper = document.getElementById('upload-file-wrapper')
    uploadFileWrapper.addEventListener('dragover', this.unnecessaryCallsFromEvent)
    uploadFileWrapper.addEventListener('drop', this.dropHandler)
  },
  beforeDestroy() {
    const uploadFileWrapper = document.getElementById('upload-file-wrapper')
    uploadFileWrapper.removeEventListener('dragover', this.unnecessaryCallsFromEvent)
    uploadFileWrapper.removeEventListener('drop', this.dropHandler)
  }
}
</script>

<style scoped>
.upload-file-wrapper {
  min-width: 80%;
  min-height: 10%;
  border-radius: 25px;
  border: 2px dashed #0d47a1;
  padding: 10px 0;
  cursor: pointer;
  background-color: rgb(243, 245, 245);
}
</style>