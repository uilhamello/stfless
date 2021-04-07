# stefaless

Employee API built with Lambda Nodejs DynamoDB Serverless Framework


## Modo de Instalação local

1) Clone o repositório:
<br> - git clone git@github.com:uilhamello/stfless.git

2) No terminal, instale dependencias do nodejs
<br> - npm install

3) Deploy a aplicação utilizando Serverless Framework
<br> - sls deploy

## Descrição técnica do projeto

#### O provisionador Serverless Framework configura toda estrutura do projeto na AWS.
Sendo o mesmo responsável por:
<br> - criação das funções Lambda;
<br> - Criação da tabela "Employee" no DynamoDB;
<br> - Criação das APIs Gateway;
<br> - Permissões de escrita e leitura no DynamoDB através das funções no Lambda;


## Arquitetura do Projeto

Tentando respeitar ao Máximo o conceito de Clean Architecture, o projeto separa a camada de Use Case 
dos recursos tecnologicos utilizado na aplicação. 
Uma pasta "Repository" foi criada para abstrair as instruções no banco de dados dos casos de uso, facilitando possíveis alterações do mesmo.
Cada Lambda Function tem uma específica responsabilidade, o que torna seus recursos não concorrentes a mais de um endpoint.

## O que não foi possível de concluir
No momento em que esse projeto está sendo entregue, ainda há bugs que não estão permitindo que o sistema funcione corretamente, 
e os mesmos ainda estão sendo investigados, e não consigo apresentar os motivos desses erros no momento da entrega.

## O que falta adicionar dos requisitos

Estrutura de Teste utilizando JEST

## O que falta adicionar para melhorar o projeto ( do que pode ser pensado até o momento)

JWT para garantir segurança nas execuções das ações


## Principal desavio ao candidato

As requisições técnicas para desenvolver o projeto ainda não havia sido utilizadas por mim, o que precisou um pouco mais de tempo para estudá-las.









