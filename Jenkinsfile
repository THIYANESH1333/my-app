pipeline {
    agent any

    stages {
        stage('Build & Deploy') {
            steps {
                sh '''
                    chmod +x build.sh
                    ./build.sh
                '''
            }
        }
    }
}
