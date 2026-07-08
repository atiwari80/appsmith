47:             await proxyServer.close((error) => (error ? reject(error) : resolve()));
48:     }
49:     await axios.get(`https://localhost:65534`, { timeout: 300 }).catch(() => null);
50:     await axios.get(`https://[::1]:65534`, { timeout: 300 }).catch(() => null);
