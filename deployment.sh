#!/bin/bash
echo hi123
chmod +x build.sh
./build.sh
docker login -u thiyanesh1333 -p THIY@2003
# Use non-interactive login
echo "THIY@2003" | docker login -u "thiyanesh1333" --password-stdin

# Tag and push the image
docker tag thiyanesh1333/react-app thiyanesh1333/react-app:latest

docker push thiyanesh1333/react-app:latest

# Run the Container
docker run -d -p 80:80 thiyanesh1333/react-app:latest

docker run -d -p 8000:80 --name=my-service-repo thiyanesh1333/react-app
