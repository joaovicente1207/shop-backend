# backend from shop-app

## Shop App

To run this project, install docker and run these follow commands:

sudo docker build . -f Dockerfile.dev -t shop-app-backend
sudo docker run -dp 3080:3080 shop-app-backend