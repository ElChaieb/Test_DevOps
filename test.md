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

<img src="https://drive.google.com/file/d/1oF8JsoNBFOl1e-SLjjNcRuZ08Ce8MEoZ/view?usp=drive_link" alt="Alt Text" width="1600" height="900" style="display: block; margin: 0 auto;">

<img src="https://drive.google.com/file/d/18B7AzRc63ydM2r_IunMIdKjRcWQCH4m4/view?usp=drive_link" alt="Alt Text" width="1600" height="900" style="display: block; margin: 0 auto;">

<img src="https://drive.google.com/file/d/1grezeAzt-7UpttaMtWSCZzoDahYQIBs5/view?usp=drive_link" alt="Alt Text" width="1600" height="900" style="display: block; margin: 0 auto;">

<img src="https://drive.google.com/file/d/18_He4GNGT-HK7uPRpSCO7V4Nvr9AGtZZ/view?usp=drive_link" alt="Alt Text" width="1600" height="900" style="display: block; margin: 0 auto;">

<img src="https://drive.google.com/file/d/1IgsNB248fu2bNlG5Ul83oKCqjpbSZt7c/view?usp=drive_link" alt="Alt Text" width="1600" height="900" style="display: block; margin: 0 auto;">

<img src="https://drive.google.com/file/d/1IgsNB248fu2bNlG5Ul83oKCqjpbSZt7c/view?usp=drive_link" alt="Alt Text" width="1600" height="900" style="display: block; margin: 0 auto;">

<img src="https://drive.google.com/file/d/1BD-jtQ9g3HFFFuKatcpRiRi0UcWVvA1K/view?usp=drive_link" alt="Alt Text" width="1600" height="900" style="display: block; margin: 0 auto;">

<img src="https://drive.google.com/file/d/1SUeY_sMpTCHid4-5Oswx4iYLJhIfZnyB/view?usp=drive_link" alt="Alt Text" width="1600" height="900" style="display: block; margin: 0 auto;">

<img src="https://drive.google.com/file/d/185UpSvfKuf4GQqZpELs9-CQz0xM8pw56/view?usp=drive_link" alt="Alt Text" width="1600" height="900" style="display: block; margin: 0 auto;">

<img src="https://drive.google.com/file/d/1D40ve03TkyWvul8vXuMNdod61beeBcw7/view?usp=drive_link" alt="Alt Text" width="1600" height="900" style="display: block; margin: 0 auto;">
