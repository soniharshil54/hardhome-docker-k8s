aws ecr get-login-password --region us-east-1 --profile harshil-hardhome | docker login --username AWS --password-stdin 121487958432.dkr.ecr.us-east-1.amazonaws.com

docker-compose -f docker-compose.build.yml build

docker tag hardhome-backend-service-image-build:latest 121487958432.dkr.ecr.us-east-1.amazonaws.com/hardhome-backend-service-image-prod:latest
docker push 121487958432.dkr.ecr.us-east-1.amazonaws.com/hardhome-backend-service-image-prod:latest