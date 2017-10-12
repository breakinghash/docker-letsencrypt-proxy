var proxy = require('redbird')({
  letsencrypt: {
    path: '/certs',
    port:9999
  },
  ssl: {
		port: 443,
  },
	port:80,
});

// LetsEncrypt support
// With Redbird you can get zero conf and automatic SSL certificates for your domains

proxy.register(process.env.DOMAIN, process.env.BACKEND, {
	ssl: {
    letsencrypt: {
      email: process.env.EMAIL, // Domain owner/admin email
      production: process.env.PRODUCTION || false, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
    }
  }
});
