await axios.get("https://localhost.:65534", { timeout: 300 }).catch(() => null);
await axios.get("https://[::1]:65534", { timeout: 300 }).catch(() => null);