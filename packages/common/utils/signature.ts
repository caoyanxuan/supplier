import crypto from 'crypto';
import Jsencrypt from 'jsencrypt';

/**
 * 1.publicKey环境区分
 * 2.其他值固定
 */
const { BUILD_ENV = 'dev' } = process.env;
const dev =
  'TUlHZk1BMEdDU3FHU0liM0RRRUJBUVVBQTRHTkFEQ0JpUUtCZ1FDWFMyQzBUUlR6dlpMY2tjK3J5MlF6cC9FR1lRd1dCb3pIMFdzTGhabWlISENZNmpHY2ZHdVp1eFdIdFlWUVRxa2xZU1Y5TzF5Y2EyaGZTMmtLVVZwUkdWcFlaeGdJYUdRRGlyZ1MxaENCMXhYdWcwT2ZzUlMyVHB0TVZMUXRva1FGUFQ5a05SVnV5T3F4UDRhV3A0Sk9YL0lyREVtcS9OdldJZGdEQzUwbjNRSURBUUFC';

const PUBLIC_KEY = {
  dev,
  qa: dev,
  pre: dev,
  stg: dev,
  prd: dev,
};

const requestSignature = {
  appkey: 'PORTAL',
  secret: 'C0328E45C6964073996D8B0081392FD6',
  publicKey: PUBLIC_KEY[BUILD_ENV],
};

const generateSignature = () => {
  const appkeyScecretMd5Hash = crypto.createHash('md5');
  appkeyScecretMd5Hash.update(
    `${requestSignature.appkey}&${requestSignature.secret}`
  );
  const appkeyScecret = appkeyScecretMd5Hash.digest('hex');

  const encrypt = new Jsencrypt({});
  encrypt.setPublicKey(`${window.atob(requestSignature.publicKey)}`);
  
  return encrypt.encrypt(
    `${requestSignature.appkey}\n${appkeyScecret}\n${Date.now()}`
  );
};

const baseURL = '/api';

export { generateSignature, baseURL };
