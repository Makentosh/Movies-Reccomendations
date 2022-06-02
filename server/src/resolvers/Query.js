const { getPopular } = require('../modules/movies');

async function movies(parent, args) {

  return await getPopular(args.page);
}

module.exports = {
  movies,
};
