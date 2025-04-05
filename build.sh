#!/bin/bash

# Build the Docker image and tag it as "react-app"
docker build -t thiyanesh1333/react-app .

# Optional: Echo a message to confirm progress
echo "✅ Docker image built successfully"

# Log in to Docker Hub (not recommended to hardcode passwords; use secrets or stdin)
echo "🔐 Logging in to Docker Hub"
echo "THIY@2003" | docker login -u thiyanesh1333 --password-stdin

# Tag the image with "latest" tag
docker tag thiyanesh1333/react-app thiyanesh1333/react-app:latest

# Push the image to Docker Hub
echo "📦 Pushing image to Docker Hub"
docker push thiyanesh1333/react-app

# Apply Kubernetes deployment and service
echo "🚀 Deploying to Kubernetes"
kubectl apply -f deploy.yaml --validate=false
kubectl apply -f svc.yaml --validate=false

echo "🎉 Deployment completed!"
