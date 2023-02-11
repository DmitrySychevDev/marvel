const envs = import.meta.env;

export default {
  publicKey: envs.VITE_PUBLIC_API_KEY,
  privateKey: envs.VITE_PRIVATE_API_KEY,
  baseApiUrl: envs.VITE_BASE_API_URL
};
