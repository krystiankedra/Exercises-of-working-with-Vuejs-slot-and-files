export const convertFileNameToValueWithoutExtension = (fileName) => {
  const splittedName = fileName.split('.')
  return splittedName[0]
}