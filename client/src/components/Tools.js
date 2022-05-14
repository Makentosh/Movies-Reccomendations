export const formatDate = (date) => {
  let options = { year: 'numeric', month: 'short', day: 'numeric' };

  return new Date(date).toLocaleDateString("ru-RU", options)
}
