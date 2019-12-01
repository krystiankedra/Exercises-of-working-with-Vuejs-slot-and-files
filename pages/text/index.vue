<template>
  <v-container>
    <div class="row mb-2">
      <upload-file-wrapper :upload-handler="uploadFile">
        <template v-slot:btnName>
          Upload File
        </template>
      </upload-file-wrapper>
    </div>
    <files-wrapper :elements="posts">
      <template v-slot:title>
        <h1 class="title">
          Posts List
        </h1>
      </template>
      <template v-slot:header="{ item: { name, index } }">
        {{ `File - ${index + 1}. ${name}` }}
      </template>
      <template v-slot:content="{ item: { content } }">
        <span>
          {{ content }}
        </span>
      </template>
    </files-wrapper>
  </v-container>
</template>

<script>
const uploadFileWrapper = () => import('~/components/Shared/UploadFileWrapper/uploadFileWrapper')
const filesWrapper = () => import('~/components/Shared/FilesWrapper/filesWrapper')
import { ADD_NEW_POST_FROM_FILE } from '~/store/actionTypes'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    uploadFileWrapper,
    filesWrapper
  },
  computed: {
    ...mapGetters({
      posts: 'posts'
    })
  },
  methods: {
    ...mapActions({
      addNewPostFromFile: ADD_NEW_POST_FROM_FILE
    }),
    uploadFile(e) {
      this.addNewPostFromFile(e.target.files[0])
    }
  }
}
</script>