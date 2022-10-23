export const formatDate = (date, locale) => {
  let options = { year: 'numeric', month: 'short', day: 'numeric' };

  return new Date(date).toLocaleDateString(locale, options);

};
