module.exports = {

  server: {
    port: 4000,
  },

  development: {
    url: 'http://localhost:3000/'
  },

  isProduction: process.env.NODE_ENV === 'production'

};
