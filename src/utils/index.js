export const cache = {
  get: (key) => {
    if(localStorage[key] === null || typeof(localStorage[key]) === 'undefined')
      return null;
    return JSON.parse(localStorage[key]);
  },
  set: (key, value) => {
    localStorage[key] = JSON.stringify(value);
  }
};
