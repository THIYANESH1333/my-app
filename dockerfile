FROM nginx:latest
# Copy the built files from the previous stage
# Dockerfile
FROM docker:latest

RUN apk add --no-cache bash curl \
 && curl -LO "https://dl.k8s.io/release/v1.20.0/bin/linux/amd64/kubectl" \
 && chmod +x kubectl && mv kubectl /usr/local/bin/

# Add any other tools you need

COPY build/ /usr/share/nginx/html
# Expose port 80 (the default HTTP port)
EXPOSE 80
# Start Nginx and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]
