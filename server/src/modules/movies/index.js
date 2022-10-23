const axios = require('axios');
const { Movies } = require('./entities/Movies');

const { API_KEY, API_BASE_URL } = require('../../config');

const getPopular = async (page, language) => {
  const url = `${ API_BASE_URL }movie/popular?api_key=${ API_KEY }&language=${ language }&page=${ page }&query=avengers`;
  const result = await axios.get(url);

  return new Movies(result.data);
};

const getDetails = (id, language) => {
  return axios.get(`${ API_BASE_URL }movie/${ id }?api_key=${ API_KEY }&language=${ language }`);
};

module.exports = {
  getPopular,
  getDetails
};
