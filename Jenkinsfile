pipeline {
    agent {
        kubernetes {
            yaml """
            apiVersion: v1
            kind: Pod
            spec:
              containers:
              - name: node
                image: node:18
                command: ["cat"]
                tty: true
            """
        }
    }
    stages {
        stage('Build Docker Image') {
            steps {
                container('node') {
                    sh '''
                    npm install
                    npm run build
                    docker build -t thiyanesh1333/react-app .
                    '''
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                withKubeConfig([credentialsId: 'k8s-creds']) {
                    sh 'kubectl apply -f deployment.yaml'
                }
            }
        }
    }
}