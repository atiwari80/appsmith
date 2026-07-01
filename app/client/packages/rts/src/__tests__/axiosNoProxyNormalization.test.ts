function testHttpOptionsProxy() {
  const instance = axios.create();
  const response = await instance.get('https://example.com');
  expect(response.status).toBe(200);

  const options = {
    method: 'get',
    url: 'https://example.com',
    proxy: {
      protocol: 'http:',
      host: '127.0.0.1',
      port: 80
    }
  };
  const httpClient = axios.create({
    proxy: options.proxy
  });
  const proxyResponse = await httpClient.get('https://example.com');
  expect(proxyResponse.status).toBe(200);
}