export const convertFileNameToValueWithoutExtension = (fileName) => {
  const splittedName = fileName.split('.')
  return splittedName[0]
}

export const convertDropDataTransferToFile = e => e.dataTransfer.files[0]

export const convertEventTargetToFile = e => e.target.files[0]