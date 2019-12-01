import { ADD_NEW_POST_FROM_FILE, ADD_NEW_IMAGE_FROM_FILE } from '~/store/mutationTypes'
import { convertFileAsText, convertFileAsImg } from '~/management/FileReader/fileReader'
import { convertFileNameToValueWithoutExtension } from '~/management/File/file'

export default {
  async addNewPostFromFile({ commit }, payload) {
    const convertedFiletoText = await convertFileAsText(payload)
    const name = convertFileNameToValueWithoutExtension(payload.name)
    commit(ADD_NEW_POST_FROM_FILE, { name, content: convertedFiletoText })
  },
  async addNewImageFromFile({ commit }, payload) {
    const convertedFileToImg = await convertFileAsImg(payload)
    const name = convertFileNameToValueWithoutExtension(payload.name)
    commit(ADD_NEW_IMAGE_FROM_FILE, { name, content: convertedFileToImg })
  }
}