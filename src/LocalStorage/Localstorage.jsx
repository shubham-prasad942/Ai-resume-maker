export const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {

  }
};

export const getLocalStorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    if (!item) return null;
    return JSON.parse(item) ;
  } catch (err) {
    return null;
  }
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};
