pipeline {
    agent { node { label 'master' } }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                bat 'mvn install -f ./employee-management-back/pom.xml'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'

            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}