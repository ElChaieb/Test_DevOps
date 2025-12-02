# Test Pratique DevOps -- Todo List App



#####  Par:  Hamdi Chaieb G2     &      Alaeddine Charrada G2



## 1. Clonage du projet

J'ai commencé par cloner le dépôt GitHub fourni :

    git clone https://github.com/wiem-kb/exam.git
    cd exam

## 2. Mise en place du Dockerfile

J'ai créé un fichier `Dockerfile` à la racine du projet contenant :

    FROM node:18-alpine
    WORKDIR /app
    COPY package*.json ./
    RUN npm install
    COPY . .
    EXPOSE 3000
    CMD ["npm", "start"]

### Commandes utilisées :

    docker build -t todo-app .
    docker run -p 3000:3000 todo-app


## 3. Création du docker-compose.yml

    version: "3"

    services:
      app:
        build: .
        container_name: todo-app
        ports:
          - "3000:3000"
        restart: always

### Commande utilisée :

    docker-compose up --build


## 4. Jenkinsfile

    pipeline {
        agent any

        stages {
            stage('Checkout') {
                steps {
                    git 'https://github.com/wiem-kb/exam.git'
                }
            }

            stage('Install dependencies') {
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


## 5. Résumé

-   Clonage du projet ✔\
-   Exécution locale de l'app ✔\
-   Dockerfile ✔\
-   Build + Run Docker ✔\
-   docker-compose.yml ✔\
-   Pipeline Jenkins ✔

## 6. Commandes principales

    git clone https://github.com/wiem-kb/exam.git
    docker build -t todo-app .
    docker run -p 3000:3000 todo-app
    docker-compose up --build
    npm install
    npm test


### Screenshots :

<img src="https://imgur.com/45ZGeJj.png" alt="Alt Text" width="1600" height="900" style="display: block; margin: 0 auto;">

<img src="https://imgur.com/67E2DZV" alt="Alt Text" width="1600" height="900" style="display: block; margin: 0 auto;">

<img src="https://imgur.com/SjTXCTU" alt="Alt Text" width="1600" height="900" style="display: block; margin: 0 auto;">

<img src="https://imgur.com/2B6eV9h" alt="Alt Text" width="1600" height="900" style="display: block; margin: 0 auto;">

<img src="https://imgur.com/26eH9sp" alt="Alt Text" width="1600" height="900" style="display: block; margin: 0 auto;">

<img src="https://imgur.com/aqn11jg" alt="Alt Text" width="1600" height="900" style="display: block; margin: 0 auto;">

<img src="https://imgur.com/aqn11jg" alt="Alt Text" width="1600" height="900" style="display: block; margin: 0 auto;">

<img src="https://imgur.com/7DOZOwb" alt="Alt Text" width="1600" height="900" style="display: block; margin: 0 auto;">

<img src="https://imgur.com/9gZQQWr" alt="Alt Text" width="1600" height="900" style="display: block; margin: 0 auto;">

<img src="https://imgur.com/cXgxFoq" alt="Alt Text" width="1600" height="900" style="display: block; margin: 0 auto;">
