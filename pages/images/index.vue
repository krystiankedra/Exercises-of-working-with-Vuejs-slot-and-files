<template>
  <v-container p-2>
    <div class="row mb-2">
      <upload-file-wrapper :upload-handler="uploadFile" />
    </div>
    <files-wrapper :elements="images">
      <template v-slot:title>
        <h1 class="title">
          Images List
        </h1>
      </template>
      <template v-slot:header="{ item: { name, index } }">
        {{ `Img - ${index + 1}. ${name}` }}
      </template>
      <template v-slot:content="{ item: { content } }">
        <img :src="content" />
      </template>
    </files-wrapper>
  </v-container>
</template>

<script>
const uploadFileWrapper = () => import('~/components/shared/UploadFileWrapper/uploadFileWrapper')
const filesWrapper = () => import('~/components/FilesWrapper/filesWrapper')
import { ADD_NEW_IMAGE_FROM_FILE } from '~/store/actionTypes'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    uploadFileWrapper,
    filesWrapper
  },
  computed: {
    ...mapGetters({
      images: 'images'
    })
  },
  methods: {
    ...mapActions({
      addNewImageFromFile: ADD_NEW_IMAGE_FROM_FILE
    }),
    uploadFile(e) {
      this.addNewImageFromFile(e.target.files[0])
    }
  }
}
</script>