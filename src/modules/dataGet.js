const getInfo = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MfLH1qYVhqkJ6fhkqaxK/scores');

  return response;
};

export default getInfo;
