export const androidPermissions = {
  readExternalStorage: 'android.permission.READ_EXTERNAL_STORAGE',
  writeExternalStorage: 'android.permission.WRITE_EXTERNAL_STORAGE',
  camera: 'android.permission.CAMERA',
}

export const rationaleMap = {
  [androidPermissions.camera]: {
    title: 'No Camera Permission',
    description: 'You have to grant camera permission before you can continue. Please go to app setting and grant camera permission.',
  },
  [androidPermissions.readExternalStorage]: {
    title: 'No Storage Permission',
    description: 'You have to grant storage permission before you can continue. Please go to app setting and grant storage permission.'
  },
  [androidPermissions.writeExternalStorage]: {
    title: 'No Storage Permission',
    description: 'You have to grant storage permission before you can continue. Please go to app setting and grant storage permission.'
  }
}