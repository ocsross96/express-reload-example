module.exports = {

  server: {
    port: 5000,
  },

  development: {
    url: 'http://localhost:3000/'
  },

  isProduction: process.env.NODE_ENV === 'production'

};
