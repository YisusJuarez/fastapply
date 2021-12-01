const createUrl = (userid, protocol, host) => {
  //get current server url
  //const baseUrl = process.env.BASE_URL;
  //create url
  const url = `${protocol}://${host}/apply/${userid}`;

  return url;
};

module.exports = createUrl;
