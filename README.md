# docker-letsencrypt-proxy

```
docker run --rm -d -v certs:/certs -p 80:80 -p 443:443 -p 9999:9999 -e PRODUCTION=true -e BACKEND=http://localhost:80 -e DOMAIN=example.com -e EMAIL=user@example.com breakinghash/docker-letsencrypt-proxy```
```
