kubectl apply -f configMaps/env-config-map.yml;
echo "env-config-map is up!";
sleep 10;
kubectl apply -f mongodb/mongo-deployment.yml;
echo "nmongo-deployment is up!";
sleep 10;
kubectl apply -f mongodb/mongo-service.yml;
echo "mongo-service is up!";
sleep 10;
kubectl apply -f backend/backend-deployment.yml;
echo "backend-deployment is up!";
sleep 10;
kubectl apply -f backend/backend-service.yml;
echo "backend-service is up!";
sleep 10;
kubectl apply -f api/api-deployment.yml;
echo "api-deployment is up!";
sleep 10;
kubectl apply -f api/api-service.yml;
echo "api-service is up!";
sleep 10;
kubectl apply -f frontend/frontend-configmap.yml;
echo "frontend-configmap is up!";
sleep 10;
kubectl apply -f frontend/frontend-deployment.yml;
echo "frontend-deployment is up!";
sleep 10;
kubectl apply -f frontend/frontend-service.yml;
echo "frontend-service is up!";
echo "All up!!!"