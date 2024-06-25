import { uploadPhoto, createUser } from './utils';

function processPhotoData([photoData, userData]) {
  console.log(`${photoData.body} ${userData.firstName} ${userData.lastName}`);
}

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((values) => {
    processPhotoData(values);
  });
}
