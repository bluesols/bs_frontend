server {
    listen 80;
    listen [::]:80;
    root /var/www/stage.bluesols.com/html;
    server_name stage.bluesols.com www.stage.bluesols.com;
    return 302 https://$server_name$request_uri;
}

server {

    # SSL configuration

    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    ssl_certificate         /etc/ssl/cert.pem;
    ssl_certificate_key     /etc/ssl/key.pem;
    ssl_client_certificate /etc/ssl/cloudflare.crt;
    ssl_verify_client on;
    server_name stage.bluesols.com www.stage.bluesols.com;

    root /var/www/stage.bluesols.com/html;
    index index.html index.htm index.nginx-debian.html;


    location / {
            try_files $uri $uri/ =404;
    }
}
