pipeline {
    post {
        always {
            archiveArtifacts artifacts: '*.txt'
            // Workspace()
        }  
    }
    agent {
        node {
            label 'master'
        }
    }
    parameters {
        // stashedFile 'NewAlias.txt'
        string(name: 'IDAlias', defaultValue: '249', description: 'Add ID of alias from Wiser')
        // stashedFile 'fileRead.js'
        // stashedFile 'package.json'
        // stashedFile 'postman_collection.json'
        // choice(
        //     choices: ['Sandbox' , 'Prod'],
        //     description: 'Sandbox -- https://sandbox.driveroo.com/ \n Prod -- https://lp.driveroo.com/driveroo',
        //     name: 'ENVIRONMENT')
    }
    stages {
        stage('Preparation') {
            agent none
            steps {
                cleanWs()
                script {
                    currentBuild.displayName="#${BUILD_NUMBER}, ${params.ActionToRun}, ${params.DESCRIPTION}"
                }
                dir("./") {
                    // git branch: 'main', url: 'git@github.com:Slon-ua/backupAndSaveAlias2.git', credentialsId: 'Jenkins-GitHub-SSH-Key'
            		git 'https://github.com/Slon-ua/backupAndSaveAlias2.git'
                    

                }
                
                // unstash 'NewAlias.txt'
            		git 'https://github.com/Slon-ua/backupAndSaveAlias2.git'

                sh 'ls -la'
                sh 'pwd'
                // sh 'echo "NewAlias.txt"'
                // sh 'cat NewAlias.txt'
                sh 'npm install'
                sh 'npm list --depth=0'
                // sh 'npm install newman'
                // sh 'cat fileRead.js'
                // sh 'newman -v'
                // sh 'newman run postman_collection.json -d test.csv'
                sh 'echo "IDAlias = " + $IDAlias'
                sh 'node backupAlias_workWithHTML.js --idAlias $IDAlias'
                sh 'php -v'
                // sh 'php -f URLencode.php'
                // sh 'npm run api-provider_sand'
                sh 'node editAliases.js --idAlias $IDAlias'

                // sh 'npm run api-tests-production'
            }
        }
    }
}