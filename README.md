# simulacao_emprestimo

Front-end: React + Redux
Banck-end: Java Springboot

Iniciar front-end:
> cd emprestimo_client/emprestimo-react-client
> npm start

Iniciar back-end:
> cd emprestimo/
> mvn spring-boot:run

Configurar o banco de dados:

> cd /emprestimo/src/main/resources/
Abrir arquivo "application.properties" e alterar as seguiqntes properties para conectar a o banco que desejar:
URL do banco: spring.datasource.url
Usuário: spring.datasource.username
Senha: spring.datasource.password

Além disso, a porta do servidor do back-end está setada para 8082, caso precisar altera-la, terá que mudar a chamada do front-end pois até o momento as chamadas ao back-end estão hardcoded no front-end. As chamadas ao back-end ficam nos arquivos "emprestimo_client/emprestimo-react-client/src/actions/emprestimoActions.js" e "/emprestimo_client/emprestimo-react-client/src/actions/clienteActions.js"

----
Arquitetura:

Front-end e Back-end são completamente separados/desacoplados. O back-end fornece uma REST API que é chamado front-end.

Back-end é divido em algumas camadas, controller > service > repository > entity. A lógica de négocio fica na camada service.

----

Uso do sistema:

Ao clicar em "Clientes" a tela com a listagem de clientes já cadastrados irá aparecer, também é possível cadastrar novos clientes nessa tela clicando no botão "Criar cliente".

Após criar o cliente ele irá aparecer na listagem. Na lista é possível editar e excluir o cliente clicando nos respectivos botões. Além disso é possível "Simular Empréstimo".

Obs.: O cálculo da simulação é feito no back-end e todas as simulações são armanezadas no banco de dados. Poderia ter feito o cálculo diretamente no front-end porém pensando em deixar todas a regras de negócio em local só optei por fazer no back-end, além disso pensando que o usuário poderia eventualmente efetivar o empréstimo que foi simulado, é bom que sejam armazenadas as simulações.


