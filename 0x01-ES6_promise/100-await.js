import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const result = await Promise.all([uploadPhoto(), createUser()]);
  return {
    photo: result[0],
    user: result[1],
  };
}
