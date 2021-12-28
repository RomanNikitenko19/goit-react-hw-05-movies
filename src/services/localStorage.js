const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Set state error: ", error.message);
    return null;
  }
};

const get = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error("Get state error: ", error.message);
    return null;
  }
};

const remove = (key) => {
  try {
    return localStorage.removeItem(key);
  } catch (error) {
    console.error("Remove state error: ", error.message);
    return null;
  }
};

export { save, get, remove };
