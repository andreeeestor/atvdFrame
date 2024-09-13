# Instruções pra mim msm pq sou burro

=> na pasta servidor dê os seguintes comandos:
    - npm init -y
    - npm i bcryptjs
    - npm i sequelize
    - npm i mysql2
    - npm i cors
    - npm i express

=> Crie o diretório: 'config/config.js' e dentro dela faça a configuração do sequelize

=> Crie a pasta models

# caso use o import ao invés do require vai no package.json e escreva:
    "type": "module"

# ordem para conectar o mysql workbench
wamp > restaurar mysql > iniciar todos > abrir o workbench

# NO MYSQL WORKBENCH:
create database <nome-db>;
use <nome-db>;

create table usuario(
    id int primary key
)

