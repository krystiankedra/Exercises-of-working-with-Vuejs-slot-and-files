<template>
  <v-container>
    <upload-file-wrapper :upload-handler="uploadFile">
      <template v-slot:btn-name>
        Upload Image
      </template>
    </upload-file-wrapper>
    <files-wrapper :elements="images" class="mt-3">
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
      <template v-slot:btn-delete="{ index }">
        <v-btn @click="() => deleteElement(index)" class="cancel-button">
          Delete File
        </v-btn>
      </template>
    </files-wrapper>
  </v-container>
</template>

<script>
const uploadFileWrapper = () => import('~/components/Shared/UploadFileWrapper/uploadFileWrapper')
const filesWrapper = () => import('~/components/Shared/FilesWrapper/filesWrapper')
import { ADD_NEW_IMAGE_FROM_FILE, REMOVE_IMAGE } from '~/store/actionTypes'
import { DELETE_IMAGE } from '~/store/mutationTypes'
import { mapGetters, mapActions, mapMutations } from 'vuex'
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
    ...mapMutations({
      deleteImage: DELETE_IMAGE
    }),
    uploadFile(file) {
      this.addNewImageFromFile(file)
    },
    deleteElement(idx) {
      this.deleteImage(idx)
    }
  }
}
</script>