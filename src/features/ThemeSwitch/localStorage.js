const localStorageItem = "themeState";

export const saveThemeInLocalStorage = (tasks) =>
  localStorage.setItem(localStorageItem, JSON.stringify(tasks));

export const getThemeFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageItem)) || [];
