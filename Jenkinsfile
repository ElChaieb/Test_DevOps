pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                // FIX: Explicitly specify the 'main' branch
                git branch: 'main', url: 'https://github.com/ElChaieb/Test_DevOps.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t todo-app .'
            }
        }
    }
}
