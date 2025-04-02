node {
  stage('SCM') {
    checkout scm
  }

  stage('Install Dependencies') {
      nodejs('NodeJS') {
         sh 'npm install'
      }
  }

  stage('Run Lint') {
    catchError(buildResult: 'SUCCESS', stageResult: 'UNSTABLE') {
      nodejs('NodeJS') {
        sh 'npm run lint'
      }
    }
  }

  stage('SonarQube Analysis') {
    def scannerHome = tool 'SonarScanner';
    withSonarQubeEnv() {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
}
