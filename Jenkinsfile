pipeline {
    agent { node { label 'master' } }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                bat 'cd employee-management-back &&  mvn install'
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