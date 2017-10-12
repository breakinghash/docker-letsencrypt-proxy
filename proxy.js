var proxy = require('redbird')({
  letsencrypt: {
    path: '/certs',
    port:9999
  },
  ssl: {
    http2: true,
  }
});

// LetsEncrypt support
// With Redbird you can get zero conf and automatic SSL certificates for your domains
redbird.register(process.env.DOMAIN, process.env.BACKEND, {
	ssl: {
    letsencrypt: {
      email: process.env.EMAIL, // Domain owner/admin email
      production: process.env.PRODUCTION || false, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
    }
  }
});
