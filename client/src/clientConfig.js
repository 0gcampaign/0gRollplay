const config = {
  isProduction: process.env.NODE_ENV === 'production',
  contentfulSpaceId: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  contentfulAccessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  socketURI:
    process.env.REACT_APP_SERVER_URI ||
    (process.env.NODE_ENV === 'production'
      ? window.location.origin
      : `http://${window.location.hostname}:5001/`),
  serverURI: 
    process.env.REACT_APP_SERVER_URI || 
    (process.env.NODE_ENV === 'production' 
      ? window.location.origin + '/api'
      : `http://${window.location.hostname}:5001/api`),
};

export default config;