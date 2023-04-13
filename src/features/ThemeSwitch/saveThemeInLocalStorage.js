const localStorageKey = "themeState";

export const saveThemeInLocalStorage = (isDark) => {
  localStorage.setItem(localStorageKey, JSON.stringify(isDark));
};

export const getThemeFromLocalStorage = () => {
  const storedValue = localStorage.getItem(localStorageKey);
  return storedValue !== null ? JSON.parse(storedValue) : false;
};
