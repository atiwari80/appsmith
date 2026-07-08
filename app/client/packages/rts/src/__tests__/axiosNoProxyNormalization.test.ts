46  // Create an instance of Axios with TLS disabled to test non-proxy scenario
47  const axiosInstance = axios.create({
48  baseURL: process.env.TLS_DISABLED_BASE_URL,
49    httpsAgent: new https.Agent({
50    rejectUnauthorized: false,
