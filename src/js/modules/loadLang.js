let loadLang = async (language) => {
  let data = await import(`../../store/${language}.json`);

  return data;
};
export default loadLang;
