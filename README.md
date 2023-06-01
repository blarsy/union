# union
Website and web tooling for "Re-Union", my current coworking

## How to generate a free SSL certificate from Let's encrypt - through its Certbot utility, and apply it to a docker-hosted NGinx container

**Assuming:**
* the IP address of the remote server with Docker installed is 45.91.169.85
* the url we are securing with https is admin.homeostasis.pro

First ensure your web server does not systematically redirect everything to SSL, as Certbot will need the Letsencrypt servers to query for challenge files on HTTP. So, comment out the https redirection line in /docker/prod/nginx.conf, so that it looks like:

`server {`

`    listen 80;`

`    location /.well-known/ {`

`        root /var/local;`

`    }`

`    #return 301 https://$host$request_uri;`

`}`

make sure you uploaded your SSH key to the target server first (should be done only once in the server's lifetime)

`ssh-copy-id -i ~/.ssh/id_rsa.pub root@45.91.169.85`

connect to the server

`ssh root@45.91.169.85`

Generate the certificates

`certbot certonly --webroot --domains admin.homeostasis.pro`

You'll have to provide the path where to create the challenge files required for Letsencrypt to verify you actually control the public IP address you request the certificates for. Thus, when prompted:

`Input the webroot for admin.homeostasis.pro: (Enter 'c' to cancel):`

Type

`/etc/letsencrypt`

Make sure the certificate files are accessible to the web proxy docker container:

`cd /etc/letsencrypt`

`chmod -R 705 archive`

`chmod -R 705 live`

Should be good to go ...