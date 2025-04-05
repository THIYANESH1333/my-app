pipeline {
    agent {
        docker {
            image 'docker:20.10.16-dind'
            args '--privileged -v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    stages {
        stage('Build and Push Docker Image') {
            steps {
                sh 'apk add --no-cache docker-cli curl bash' // Install required tools
                sh 'chmod +x build.sh'
                sh './build.sh'
            }
        }
    }
}
