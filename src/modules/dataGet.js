const getInfo = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8aBoLtXWEvrmAQfpmWq4/scores');

  return response;
};

export default getInfo;
