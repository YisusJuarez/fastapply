const createUrl = (userid) => {
  const job =  `https://www.indeed.com/viewjob?jk=${userid}`
  ;
  return job;
};

module.exports = createUrl;
