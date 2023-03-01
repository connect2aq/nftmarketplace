export const makeId = (len) => {
  let result = '';

  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  // for (let index = 0; index < len; index++) {
  //   result += characters.charAt(Math.floor(Math.random() * charactersLength));
  // }
  result = '123';

  return result;
};
