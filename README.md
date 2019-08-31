# simulacao_emprestimo

Front-end: React + Redux
Banck-end: Java Springboot

Iniciar front-end:
> cd emprestimo_client/emprestimo-react-client
> npm start

Iniciar back-end:
> cd emprestimo/
> mvn spring-boot:run

----
Arquitetura:

Front-end e Back-end são completamente separados/desacoplados. O back-end fornece uma REST API que é chamado front-end.

Back-end é divido em algumas camadas, controller > service > repository > entity. A lógica de négocio fica na camada service.

----

Uso do sistema:

Ao clicar em "Clientes" a tela com a listagem de clientes já cadastrados irá aparecer, também é possível cadastrar novos clientes nessa tela clicando no botão "Criar cliente".

Após criar o cliente ele irá aparecer na listagem. Na lista é possível editar e excluir o cliente clicando nos respectivos botões. Além disso é possível "Simular Empréstimo".

Obs.: O cálculo da simulação é feito no back-end e todas as simulações são armanezadas no banco de dados. Poderia ter feito o cálculo diretamente no front-end porém pensando em deixar todas a regras de negócio em local só optei por fazer no back-end, além disso pensando que o usuário poderia eventualmente efetivar o empréstimo que foi simulado, é bom que sejam armazenadas as simulações.


