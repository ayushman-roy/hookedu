# hookedu

#### dependencies: mysql (8.0.0+), nodejs (16.0.0+), npm(7.20.0+)

## Server

#### [PORT: 5001]

**1.1** go to src/config/database.js, replace root and abcd1234 with your mysql user and password\
**1.2** go to mysql console and create a database named hookedu (CREATE DATABASE hookedu;) \
**2.1** create .env at root.  
**2.2** copy-paste docs/texts/ENV.txt at .env \
**2.3** assign OTP_PASS value as sent \
**3** cd to src; npm install; then npm start

## Client

#### [PORT: 3000]

**1** cd to client; npm install; then npm start
