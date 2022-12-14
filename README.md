# Blogs API

O projeto Blogs API desenvolvido na <a href="https://www.betrybe.com">Trybe</a> utiliza as tecnologias NodeJS, express, MYSQL e Sequelize como ORM.
Com foco na arquitetura MSC (Model, Service, Controller) a aplicação (API RESTful) disponibiliza requisições do tipo GET, POST, PUT, DELETE onde é possível visualizar, cadastrar, editar e excluir usuários e posts num banco de dados em MYSQL.

## Instruções para instalação

Faça o clone do projeto:

```
git clone git@github.com:lucasrodrigges/blogs-api.git
cd blogs-api
```

Certifique-se de preencher o '.env' com as informações corretas. Via Docker, nomeie o MYSQL_HOST de 'db', localemnte 'localhost'.

Para rodar localmente certifique-se de ter o MYSQL instalado em sua máquina e rode os comandos:

```
npm run migration && npm run seed
```

Para levantar o servidor instale as dependências e inicie o server com os comandos:

```
npm install && npm run dev
```

Para rodar via Docker certifique-se de ter o Docker e o docker-compose isntalados na máquina e rode os comandos:

```
docker compose up -d; docker exec -it blogs_api bash
```

Dentro do container rode os comandos:

```
npm install; npm run dev
```

## Rotas

### User

<ul>
<li>GET: /user/ => retorna todos os usuários cadastrados</li>
<li>GET: /user/:id => retorna o usuário referente ao id informado</li>
<li>POST: /login => cadastra usuário no banco de dados</li>
<li>DELETE: /user/me => deleta usuário que fez a solicitação</li>
</ul>

### Posts

<ul>
<li>GET: /post/ => retorna todos os posts cadastrados</li>
<li>GET: /post/:id => retorna o post referente ao id informado</li>
<li>POST: /post => cadastra novo post no banco de dados</li>
<li>PUT: /post/:id => realiza update de post específico no banco de dados</li>
<li>DELETE: /post/:id => deleta post específico do banco de dados, desde que quem fez a requisição seja o dono do mesmo</li>
</ul>
