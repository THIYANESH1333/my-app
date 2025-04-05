docker build -t task37 .
echo Hyyy
docker login -u thiyanesh1333 -p THIY@2003
docker tag task37 thiyanesh1333/react-app
docker push thiyanesh1333/react-app
kubectl apply -f  deploy.yaml --validate=false
kubectl apply -f svc.yaml --validate=false
