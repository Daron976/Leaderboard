const getInfo = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lo7BETKEBv4khCfPtazj/scores');

  return response;
}

export default getInfo;

