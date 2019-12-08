const convertDataToType = (file, callback) => {
  const reader = new FileReader()
  return new Promise((resolve) => {
    reader.onload = () => {
      resolve(reader.result)
    }
    callback(reader, file)
  })
}

const convertDataToUrl = (reader, file) => reader.readAsDataURL(file)

const convertDataToText = (reader, file) => reader.readAsText(file)

export const convertFileAsText = file => convertDataToType(file, convertDataToText)

export const convertFileAsImg = file => convertDataToType(file, convertDataToUrl)