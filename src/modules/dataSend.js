async function postInfo(url, dataObj) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(dataObj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  });

  return response.json()
}

export default postInfo;