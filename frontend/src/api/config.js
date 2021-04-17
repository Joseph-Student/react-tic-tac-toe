async function callApi(endpoint, options) {
  const baseUrl = "http://localhost:8000/";
  const url = baseUrl + endpoint;
  let init = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options
  }

  const response = await fetch(url, init);

  if (!response.ok) {
    const message = `An error has ocurred: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
}

export default callApi;