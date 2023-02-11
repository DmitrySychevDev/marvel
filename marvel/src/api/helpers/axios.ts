import axios from 'axios';
import md5 from 'md5';

// Config
import envs from 'config/environments';

const dateNow = Date.now();

const instance = axios.create({
  baseURL: envs.baseApiUrl,
  params: {
    offset: 0,
    ts: dateNow,
    apikey: envs.publicKey,
    hash: md5(`${dateNow}${envs.privateKey}${envs.publicKey}`)
  }
});

export default instance;
