const metadata = require('../_data/metadata.json');

module.exports = (data) => {
  console.log(metadata);
  return {
    pagination: {
      data: "collections.posts",
      size: metadata.paginationSize,
      alias: "postslist",
      reverse: true,
    }
  };
};
