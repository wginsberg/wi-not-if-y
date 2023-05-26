## Setup

This project requires HTTPS to work correctly. Instructions derived from https://web.dev/how-to-use-local-https/

```
brew install mkcert
mkcert -install
npm run cert
```

Serve the app locally with HTTPS:
```
npm run https-server
```

If you get SSL errors with Google Chrome, trying opening the browser in this way:
```
/Applications/Google\/ Chrome.app/Contents/MacOS/Google\/ Chrome --user-data-dir=/tmp/wifiapp --ignore-certificate-errors
```
