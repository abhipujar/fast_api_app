# fast_api_app
## creating fastapi application
# git commit -m "test git"
<!-- status codes
200 ok
201 created
204 no content
400 bad request
401 unauthorized
403 forbidden
404 not found
405 method not allowed 
409 conflict
500 internet server error  -->

# Architecture of fastapi application
<!-- model     ->  tabels creation
    router ->      routes requesta tp controllers
    controller ->  controller logic
    service ->     business logic
    repository->   data access layer
    middleware ->  request processing pipeline 
    schema ->      pydantic models for validation
 -->

 # database 
 ## relational database
 # mysql
 # postgresql
 # sqlite
 # sql server

 <!-- # constraints in database
 primary key :->eg. student id 
 foreign key :->dept_id in student table
 unique      :->eg. phone number
 not null     :-> eg. name
 check        :-> eg. salary>0
 default   :-> 
 -->
 <!-- student_db-> database -->
 <!-- # day-4 -->
<!-- 
 pip install alembic
 pip freeze requirements.txt
 alembic init alembic -->
 #javascript->ES6->

 <!-- npm install vite@letest
 node -v , npm -v
 npm install -g typescript
 npm create vite@latest talentspark
 react -> typescript -> e....

npm install axios

ui -> axios -> localhost:8000 ->fastapi -> db -> useeffect -> setstate -> rerender -> ui -->
<!-- useeffect -> which is used to call the api or which is used to fetch the data from the api automatically when the page is loaded

usestate -> which is used to store the data in the companent and which will update then companent when the data is updated or changed -->

#promise ->which is used to handle the asynchronous operations 
#asynv /await -> which is used to handle the asyncronous opeartions in a synchronous way


RBAC -> role based access control 
eg: admin can do anything,  user







<!-- 
## flow of application 
1. login -->create access token
2. access token -> get current user
3. current user -> get role -->role_requried -->

##Architecture
##backend/
    ##app/
        ##--main.py
        ##--database.py
        ##models.py
        ##--users.py
        ##--company.py
        ##--job.py
        ##schemas/
        ##--users.py
        ##--company.py
        ##--job.py
        ##routers/
        ##--users.py
        ##--company.py
        ##--job.py
        ##utils/
        ##--token.py
        ##--security.py
        ##--oauth2.py
        ##--
    ##alembic.ini
    ##alembic/env.py

#task.
#1.push to gitgub
#2.try run application  ./env/Scripts/activate -->uvicorn app.main:app --reload  ->http://localhost:8000/docs
#3.don't dlindly trusting on AI
#4.read the error look for our file name dont care of other files errors like library files errors
#5.if files doesnt have error if its like unprocessible
#identifier or dependency error not to correct-register->login->create company->create job have two variants #->rolel:admin
#role2->candidate->try test all anis with both roles

<!-- 
flow of full app 
react -> login ->oauthform ->accesstoken ->store in local ->send with every request ->logout

react->axios->
fastapi_url->token->header->response->store in local browser to remeber the login-> 
then you can call or use the apis you want--> 
then for all the apis like createjob.jsx use this axios function to call the apis->
fetchcompany() use axios.get(url)->fastapi->postgresql_db ->
return response to axios-> store in local state and show in UI ->


 
<!-- LLM-Large Language Models Tokenization-sentence into words in list ->like this ["" "",""]

Embeddings-sentence into vector numbers -> like this [1,2,3,4,5]

Transformer-it do the prediction of next word on basis of previous words embeddings

transformer -> self atention mechanism->it is used to give the weights to the words in the sentence

SSE-Server sent events ->it is used to send the response from server to client in form of chunks of text so that we can show the response in form of chunks of text like chatbot ui

RAG-Retrieval Augmented Generation-it is used to increase the accuracy of llm by providing relevant information to the llm

context-window-it is the maximum number of words that the llm can process at a time

Langchain->it's a framework to build llms ,its useful to connect llm to external sources of information->like database,files,websites ->it is used to create complex workflows of llm->like chatbot that can answer questions about specific documents -->
<!-- Architecture of fastapi application
Model -- tables creation
Router -- routes requests to controllers
Controller -- controller logic
Service -- business logic
Repository -- data access layer
Middleware -- request processing pipeline
schema -- pydantic models for validation
database
relational database
mysql
postgresql
sqlite
sql server
non-relational database
mongodb
cassandra
redis
dynamodb
constraints in database
primary key -- eg: student_id
foreign key -- eg: department_id in student table
unique --eg: email, phonenumber
not null --eg: name
check -- eg: salary > 0
default -- eg: timestamp: func.now()
mysql example
CREATE TABLE Students( Student_ID int PRIMARY KEY, LastName varchar(255) NOT NULL, FirstName varchar(255) );

modules
sqlalchemy -- orm (object relational mapping)
fastapi -- web framework
<!-- uvicorn -- server for running fastapi application --> uvicorn app.main:app --reload
<!-- psycopg2 -- postgresql driver
pydantic -- data validation
alembic -- database migration
typing-extensions -- type hints
Concepts:
ORM
Object Relational Mapping -> to convert python code to sql commands without writing sql commands
Depends
Dependency injection -> to inject dependencies into route handlers
Sessionmaker
To create a session with the database
SessionLocal
To create a session with the database for a single request
declartive_base
To create a base class for all the models

pip install alembic alembic init alembic alembic-> env.py -> from imported model ->metadata data alembic.ini->sqlalchemy.url to postgresql database url -> 
postgresql://user:password@host:port/database_name alembic revision -autogenerate -m "initial migration" you will have a new version update with def upgrade() in
 that for eg:713e98317319.py before doing upgrade check that. alembic upgrade head

pip install passlib pip install python-jose[cryptography]

passlib- used to encrypt passwords

hashing algorithm
argon2 bcrypt

python-jose[cryptography]- used to create jwt tokens jwt tokens -> used to authenticate and authorize users its in format xxxx.yyyyy.zzzz basically 3 parts 1.header -> algo + token type:{alg:HS256,typ:JWT} 2.payload -> data, for eg: {user_id:1,role:admin} 3.signature -> used to verify the token:{hash(header+payload+secretkey)} access token -> used to access protected resources refresh token -> used to refresh access token

pip install python-multipart

RBAC
Role Based Access Control -> used to give different permissions to different roles -> eg: admin can do anything, user can do only specific things use oauth2 module to implement RBAC ->get_current_user() - for authenticated user ->role_required() - for role based access control create_access_token() - for creating access token with (secret_key,algorithm,payload) - token created then verify_access_token() - for decoding access token with (secret_key,algorithm,token) - token decoded then
flow of application
1.login -> create access token 2.access token -> get current user 3.current user -> get role -> role_required -> access protected resources -->
