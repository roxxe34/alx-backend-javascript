import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let res = {};
  try {
    const result = await Promise.all([uploadPhoto(), createUser()]);
    res = {
      photo: result[0],
      user: result[1],
    };
  } catch (error) {
    res = { photo: null, user: null };
  }
  return res;
}
