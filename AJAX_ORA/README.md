# How to run this file
The following guide is for running the server inside a **docker container**. Please note that if you're configuring your own apache server, you'll have to either set the port to **3000**, or **4525( my ID)**, and manualy copy the files iside the `src` directory into `/var/www/html/` or whatever you have in `httpd.conf`.
# Requirements
* Docker or Docker-Desktop
* Chromium Browser or Firefox

# Prerequisites
You need to change the API and CLIENT_ID in the `src/scripts/main.js` file to your own api key and CLIENT_ID.Make sure to include `http://localhost:3000 or 4525` or `http://127.0.0.1:3000 or 4525` as your authorized **URL** and **Redirected URI** in google console Credentials tab. Also make sure to have `https://www.googleapis.com/auth/gmail.readonly` `https://www.googleapis.com/auth/gmail.modify` as your allowed scope.

**Any additional information needed about seting up, please contact to me via email dac.bui308@gmail.com or dac.bmh204525@sis.hust.edu.vn**
# Build Docker Image

```
docker build -t my-app .
```
**To run the image**

```
docker run -dit --name my-apache-server -p 4525:80 my-app
```



