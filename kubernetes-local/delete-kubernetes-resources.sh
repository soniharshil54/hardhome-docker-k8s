kubectl delete -f configMaps/env-config-map.yml;
sleep 10;
kubectl delete -f secrets/secret.yml;
sleep 10;
kubectl delete -f mongodb/mongo-deployment.yml;
sleep 10;
kubectl delete -f mongodb/mongo-pv.yml;
sleep 10;
kubectl delete -f mongodb/mongo-pvc.yml;
sleep 10;
kubectl delete -f mongodb/mongo-service.yml;
sleep 10;
kubectl delete -f backend/backend-deployment.yml;
sleep 10;
kubectl delete -f backend/backend-service.yml;
sleep 10;
kubectl delete -f api/api-deployment.yml;
sleep 10;
kubectl delete -f api/api-service.yml;
sleep 10;
kubectl delete -f frontend/frontend-deployment.yml;
sleep 10;
kubectl delete -f frontend/frontend-service.yml;
sleep 10;
kubectl delete -f frontend/frontend-configmap.yml;
sleep 10;