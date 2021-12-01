const createUrl = (userid) => {
  //get current server url
  const baseUrl = process.env.BASE_URL;
  //create url
  const url = `${baseUrl}/apply/${userid}`;

  return url;
};

module.exports = createUrl;
