docker-compose -f docker-compose.build.yml build;

docker tag hardhome-backend-service-image-build:latest hardhome-backend-service-image-prod:latest

docker tag hardhome-api-service-image-build:latest hardhome-api-service-image-prod:latest

docker tag hardhome-frontend-service-image-build:latest hardhome-frontend-service-image-prod:latest

minikube image load hardhome-backend-service-image-prod:latest;
minikube image load hardhome-api-service-image-prod:latest;
minikube image load hardhome-frontend-service-image-prod:latest;