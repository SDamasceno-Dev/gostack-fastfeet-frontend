<p align="center">
  <img src="https://i.imgur.com/b9HrmqJ.png">
</p>

# Módulo Frontend

> Reconhecidamente a melhor solução para serviços de entrega, com foco exclusivamente no cliente e totalmente comprometida em superar expectativas.

<p align="center">
  <img src="https://img.shields.io/badge/Version-0.1-blueviolet?style=plastic">
  <img src="https://img.shields.io/badge/ReactJS-%3E%3D16.13.0-blueviolet?style=plastic&logo=React">
  <img src="https://img.shields.io/badge/Redux-%3E%3D4.0.5-blueviolet?style=plastic&logo=Redux">
</p>

<p align="center">
:link:| &nbsp;<a href="#page_with_curl-Descrição">Descrição</a> &nbsp;  | &nbsp; <a href="#books-Bibliotecas">Bibliotecas</a> &nbsp; | &nbsp; <a href="#shell-ambiente-de-desenvolvimento-teste-e-uso">Ambiente de teste e uso</a> &nbsp; | &nbsp; <a href="#floppy_disk-Como-Instalar">Como instalar</a> &nbsp; | &nbsp; <a href="#mortar_board-Como-usar">Como usar</a> &nbsp; | &nbsp; <a href="https://github.com/SDamasceno-Dev/gostack-fastfeet-frontend/blob/master/LICENSE.MD">Licença</a> &nbsp; |</p>

# :page_with_curl: Descrição

O módulo Frontend do Sistema Fastfeet é o responsável por disponibilizar o módulo de Gerenciamento do Administrador.

Por meio desse módulo o Administrador pode, dentre outras coisas:

* Pesquisar, cadastrar, excluir e editar encomendas;
* Pesquisar, cadastrar, excluir e editar entregadores;
* Pesquisar, cadastrar, excluir e editar clientes;
* Acompanhar o status de cada uma das encomendas;
* Verificar as situações que causaram problemas, e cancelar a entrega da encomenda caso necessário;

# :books: Bibliotecas

Abaixo estão listadas as dependências, com a sua respectiva versão, utilizadas para o desenvolvimento desse módulo Frontend do Sistema Fastfeet:

<details><summary>Dependências</summary>
  <ul>
    <li><a href="https://www.npmjs.com/package/@rocketseat/unform">@rocketseat/unform</a> [^1.6.2]</li>
    <li><a href="https://www.npmjs.com/package/@testing-library/jest-dom">@testing-library/jest-dom</a> [^4.2.4]</li>
    <li><a href="https://www.npmjs.com/package/@testing-library/react">@testing-library/react</a> [^9.3.2]</li>
    <li><a href="https://www.npmjs.com/package/@testing-library/user-event">@testing-library/user-event</a> [^7.1.2]</li>
    <li><a href="https://www.npmjs.com/package/axios">axios</a> [^0.19.2]</li>
    <li><a href="https://www.npmjs.com/package/date-fns">date-fns</a> [^2.11.0]</li>
    <li><a href="https://www.npmjs.com/package/date-fns-tz">date-fns-tz</a> [^1.0.10]</li>
    <li><a href="https://www.npmjs.com/package/history">history</a> [^4.10.1]</li>
    <li><a href="https://www.npmjs.com/package/immer">immer</a> [^6.0.1]</li>
    <li><a href="https://www.npmjs.com/package/polished">polished</a> [^3.4.4]</li>
    <li><a href="https://www.npmjs.com/package/prop-types">prop-types</a> [^15.7.2]</li>
    <li><a href="https://www.npmjs.com/package/react">react</a> [^16.13.0]</li>
    <li><a href="https://www.npmjs.com/package/react-dom">react-dom</a> [^16.13.0]</li>
    <li><a href="https://www.npmjs.com/package/react-icons">react-icons</a> [^3.9.0]</li>
    <li><a href="https://www.npmjs.com/package/react-redux">react-redux</a> [^7.2.0]</li>
    <li><a href="https://www.npmjs.com/package/react-router-dom">react-router-dom</a> [^5.1.2]</li>
    <li><a href="https://www.npmjs.com/package/react-scripts">react-scripts</a> "3.4.0]</li>
    <li><a href="https://www.npmjs.com/package/react-select">react-select</a> [^3.0.8]</li>
    <li><a href="https://www.npmjs.com/package/react-toastify">react-toastify</a> [^5.5.0]</li>
    <li><a href="https://www.npmjs.com/package/reactotron-react-js">reactotron-react-js</a> [^3.3.7]</li>
    <li><a href="https://www.npmjs.com/package/reactotron-redux">reactotron-redux</a> [^3.1.2]</li>
    <li><a href="https://www.npmjs.com/package/reactotron-redux-saga">reactotron-redux-saga</a> [^4.2.3]</li>
    <li><a href="https://www.npmjs.com/package/redux">redux</a> [^4.0.5]</li>
    <li><a href="https://www.npmjs.com/package/redux-persist">redux-persist</a> [^6.0.0]</li>
    <li><a href="https://www.npmjs.com/package/redux-saga">redux-saga</a> [^1.1.3]</li>
    <li><a href="https://www.npmjs.com/package/styled-components">styled-components</a> [^5.0.1]</li>
    <li><a href="https://www.npmjs.com/package/yup">yup</a> [^0.28.3]</li>
  </ul>
</details>

# :shell: Ambiente de desenvolvimento, teste e uso

Este módulo foi desenvolvido utilizando

```bash
Visual Studio Code
Version: 1.44.0
```

testado e utilizado com o seguinte browser

```bash
Google Chrome
Version: 81.0.4044.92 (Official Build) (64-bit)
```

# :floppy_disk: Como Instalar

Para o bom funcionamento deste módulo, após a clonagem do Github, são necessárias algumas ações para a adequação da estrutura.

Antes de listar o passo a passo para o preparo do ambiente, é necessário que o computador onde irá rodar este módulo, já tenha instalado e devidamente configurado o [Git](https://git-scm.com/), [Node.JS >=v12.14.0 LTS](https://nodejs.org/en/) e o [Yarn >=v1.22.4](https://yarnpkg.com/).

Todos esses pacotes podem ser instalados utilizando um **Gerenciador de pacotes** compatível com o seu sistema operacional ([Homebrew](https://brew.sh/) para macOS, [Chocolatey](https://chocolatey.org/) para Windows).

Com essa estrutura pronta, pode-se iniciar o preparo do ambiente para se rodar este módulo Frontend do Sistema Fastfeet.

**1º Clonar o repositório**

Para se efetuar a clonagem desse repositório, de dentro da pasta  criada para o Sistema Fastfeet, a mesma pasta onde já foi clonado o [Backend](https://github.com/SDamasceno-Dev/gostack-fastfeet-backend), abra uma sessão no terminal do computador, de dentro dessa pasta, e execute o seguinte comando:

```bash
# Clona a pasta Frontend do Sistema Fastfeet
$ git clone https://github.com/SDamasceno-Dev/gostack-fastfeet-frontend
```

**2º Acessar a pasta**

Em seguida acessar a pasta clonada

```bash
# Acessa a pasta clonada
$ cd gostack-fastfeet-frontend
```

**3º Instalar as dependências**

Agora execute o Yarn para que todas as dependências sejam corretamente instaladas

```bash
# Instala todas as dependências necessárias
$ yarn
```

**4º Iniciar o módulo**

Após a instalação das dependências necessárias, basta iniciar o módulo Frontend (web). Para isso executar o seguinte comando:

```bash
# Iniciar o módulo Frontend
$ yarn start
```

Com isso, o servidor web irá se inicializar, e automaticamente uma nova janela do seu navegador padrão irá se abrir exibindo a tela de login do Sistema Fastfeet.

:warning: **Obs:** Para que o módulo **Frontend**, do Sistema Fastfeet execute de forma correta é obrigatório que o módulo **Backend** esteja sendo executado e tendo acesso aos bancos de dados (Postgres e Redis).

Qualquer dúvida, basta acessar a documentação de como instalar e executar o módulo **Backend** [aqui](https://github.com/SDamasceno-Dev/gostack-fastfeet-backend)

# :mortar_board: Como usar

O módulo Frontend possui 5 grandes seções, vamos analisar e entender como funciona cada uma delas:

## :rocket: Seção "Login"

![Screen#01](https://user-images.githubusercontent.com/58818002/79156329-0d0b2280-7da9-11ea-9036-6f8e47b4d33d.png)

Essa seção tem a função de permitir o acesso do usuário ao módulo Frontend do Sistema Fastfeet.

Para que esse acesso ocorra, é necessário a entrada de dois dados, o **E-MAIL** e a **SENHA** cadastrados no sistema.

Observe abaixo uma animação demonstrando como efetuar o login no Sistema Fastfeet

![Login-01](https://user-images.githubusercontent.com/58818002/79160430-24014300-7db0-11ea-9b31-7943d6dccec2.gif)

:heavy_exclamation_mark: **Regras de negócio**

* Somente serão autorizados os logins no módulo de Gerenciamento do Sistema Fastfeet, os perfis de **Administradores** que tenham sido previamente cadastrados no Banco de Dados.

# :rocket: Seção "Gerenciando encomendas"

Assim que o login é efetuado com sucesso, será exibida a tela na Seção "Gerenciando encomendas", conforme mostrada abaixo

![Screen#02 00](https://user-images.githubusercontent.com/58818002/79161025-2adc8580-7db1-11ea-9159-b233f5a7c8db.png)

Nessa seção são acompanhadas as diversas situações das encomendas cadastradas.

Para que seja possível o cadastramento da encomenda, é necessário que antes já tenham sido cadastrados o **Cliente** e o **Entregador**. Esses cadastros serão demonstrados adiante.

Uma vez que uma ou mais encomendas estejam cadastradas no sistema, elas estarão listadas, conforme pode ser visualizado na figura a seguir

![Screen#02 01](https://user-images.githubusercontent.com/58818002/79620541-8fb41a80-80e6-11ea-89a2-63b55645fc71.png)

Essa listagem exibe todas as informações básicas sobre a encomenda, tais como os dados do Destinatário, Entregador responsável, Cidade, Estado, bem como o Status dessa encomenda.

Está seção é dividida em 3 grandes partes conforme mostrado abaixo

![Screen#02 02](https://user-images.githubusercontent.com/58818002/79180291-f633f280-7ddf-11ea-8829-6ab7d58073c2.png)

As áreas indicadas são as seguintes:

* **1- Pesquisa de encomendas**

  Nessa área é possível efetuar a pesquisa das encomendas cadastradas inserindo o nome ou parte do nome da encomenda. Ao clicar no botão com a figura da lupa :mag: o resultado será mostrado na área indicada com o número **3- Listagem das encomendas**

  Caso o campo "Buscar por encomendas" esteja vazio e se efetue uma pesquisa, serão retornadas todas as encomendas cadastradas no sistema.

* **2- Cadastro das encomendas**

  Ao clicar no botão **"Cadastrar"**, aparecerá a tela para **Cadastramento de encomendas**, conforme exibida abaixo

  ![Screen#02 03](https://user-images.githubusercontent.com/58818002/79180460-65a9e200-7de0-11ea-86ed-deb95953b6ec.png)

O Cadastramento de encomendas é muito simples e basta seguir os seguintes passos:

* Selecionar o Destinatário da encomenda, por meio da lista exibida ou digitando o nome dele, no campo destinado;
* Selecionar o Entregador da encomenda, por meio da lista exibida ou digitando o nome dele, no campo destinado;
* Inserir o nome do produto a ser entregue
* Clicar em Salvar.

Cadastro efetuado com sucesso! :tada:

:pushpin: **Obs.**: Para que o Destinatário e o Entregador possam ser selecionados, é necessário que eles tenha sido previamente cadastrados nos Sistema Fastfeet. Nas próximas seções será demonstrado como efetuar esses cadastros.

Abaixo existe uma animação demonstrando o cadastro de uma encomenda

![#03_CadEncomenda](https://user-images.githubusercontent.com/58818002/79180878-6c852480-7de1-11ea-99d5-39606d5b6e94.gif)

* **3- Listagem das encomendas**
Nessa área são listadas as encomendas cadastradas. Nela temos ainda as informações acerca do **Status** da encomenda e ainda as **Ações** a serem tomadas a respeito da mesma.

### Coluna Status

A coluna **Status**, é a responsável por exibir a situação da encomenda naquele momento.

Existem 4 tipos de status:

|Status|Explicação do status|
|:---|:---|
|![Screen#02 01 1](https://user-images.githubusercontent.com/58818002/79181366-9428bc80-7de2-11ea-8c6b-18a8c839bc0e.png) | Quando uma encomenda estiver no status de **Pendente**, significa que ela foi cadastrada no sistema e ainda não foi retirada pelo entregador |
|![Screen#02 01 2](https://user-images.githubusercontent.com/58818002/79181368-94c15300-7de2-11ea-8b5d-2f83442e73d2.png)| Quando a encomenda estiver no status de **Retirada**, significa que o entregador já efetuou a retirada da encomenda para a realização da entrega.|
|![Screen#02 01 3](https://user-images.githubusercontent.com/58818002/79181369-9559e980-7de2-11ea-9fea-333f4587e2e6.png)| Quando a encomenda estiver no status de **Entregue**, significa que o entregador já efetuou a entrega ao destinatário. |
|![Screen#02 01 4](https://user-images.githubusercontent.com/58818002/79181371-95f28000-7de2-11ea-8380-9635f2240fe7.png)| Quando a encomenda estiver no status de **Cancelada**, significa que o **Administrador** do sistema considerou que a entrega, devido aos problemas cadastrados, não pode ser mais realizada.|

### Coluna Ações

Na coluna **Ações** é possível utilizar alguns recursos para cada um dos registros listados.

Para isso, basta clicar nos **...** (3 pontos), localizados na coluna **Ações** de cada um dos registros, conforme indicado na figura abaixo

![Screen#02 04](https://user-images.githubusercontent.com/58818002/79620770-68aa1880-80e7-11ea-827a-0cbbf9438ab1.png)

Ao se clicar nos **...** (3 pontos) será exibido um menu com as Opções Visualizar, Editar e Excluir, conforme a tela abaixo:

![Screen#02 05](https://user-images.githubusercontent.com/58818002/79620847-bc1c6680-80e7-11ea-9bc4-ae64950fadd7.png)

Descrição das opções:

* **Visualizar**: Permite a visualização dos detalhes da encomenda.

    Caso a encomenda esteja com status **Entregue** é possível visualizar, além dos dados cadastrais, a assinatura capturada do recebedor.

    Um exemplo dessa visualização é exibido na figura abaixo

![Screen#02 06](https://user-images.githubusercontent.com/58818002/79186573-68acce80-7df0-11ea-97ed-e72e9e3d2356.png)

* **Editar**: Permite a edição dos dados da encomenda;
* **Excluir**: Permite a exclusão do registro da encomenda cadastrada. Uma vez que o registro é excluído, essa ação é irreversível.

:heavy_exclamation_mark: **Regras de negócio**

* Uma encomenda que possua problemas cadastrados ou que tenha sido entregue, não pode ser mais excluída do Sistema Fastfeet;
* Quando uma encomenda é cadastrada no sistema, o entregador o qual está vinculado a esta encomenda receberá um e-mail informado que existe uma nova encomenda cadastrada para ele retirar;
* Quando uma encomenda é cancelada no sistema, o entregador o qual está vinculado a esta encomenda, receberá um e-mail informado que a entrega dessa encomenda foi cancelada;

# :rocket: Seção "Entregadores"

Seção destinada ao cadastro e gerenciamento de entregadores. Está dividida em três áreas, conforme exibido na figura abaixo:

![Screen#03 02](https://user-images.githubusercontent.com/58818002/79169553-228d4600-7dc3-11ea-999d-e83197c93bda.png)

As áreas indicadas são as seguintes:

* **1- Pesquisa de entregadores**

  Nessa área é possível efetuar a pesquisa dos entregadores cadastrados inserindo o nome ou parte do nome. Ao clicar no botão com a figura da lupa :mag: o resultado será mostrado na área indicada com o número **3- Listagem dos entregadores**.

  Caso o campo "Buscar por entregadores" esteja vazio e se efetue uma pesquisa, serão retornados todos os entregadores cadastrados no sistema.

* **2- Cadastro dos entregadores**

  Ao clicar no botão “Cadastrar”, aparecerá a tela para **Cadastramento de entregadores**, conforme figura X abaixo

![Screen#03 03](https://user-images.githubusercontent.com/58818002/79165282-24520c00-7db9-11ea-804a-c0c5511a8900.png)

Para se efetuar o cadastro de um entregador, é muito simples e basta seguir os seguintes passos:

* Clicar na imagem com a descrição "Adicionar foto" e selecionar, no  computador, a foto de avatar do entregador;
* Inserir o nome dele no campo **Nome**;
* Inserir o email dele no campo **Email**;
* Clicar em Salvar.

  Cadastro efetuado com sucesso! :tada:

Abaixo existe uma animação demonstrando o cadastro de um entregador

![#02_CadEntregador](https://user-images.githubusercontent.com/58818002/79165441-84e14900-7db9-11ea-8b82-6194a390da96.gif)

* **3- Listagem dos entregadores**
Nessa área, além de exibir a listagem dos entregadores cadastrados, é possível realizar algumas ações para cada um desses registros.

Para isso, basta clicar nos **...** (3 pontos), localizados na coluna **Ações**, conforme indicado na figura abaixo

![Screen#03 04](https://user-images.githubusercontent.com/58818002/79621149-ba06d780-80e8-11ea-9961-8f8605a6be39.png)

Ao se clicar nos **...** (3 pontos) será exibido um menu com as Opções **Editar** e **Excluir** conforme exibido na figura abaixo

![Screen#03 05](https://user-images.githubusercontent.com/58818002/79621217-f0445700-80e8-11ea-9437-b8fd8ca434b6.png)

Descrição das opções:

* **Editar**: Permite a edição dos dados do entregador;
* **Excluir**: Permite a exclusão do registro do entregador cadastrado.

:heavy_exclamation_mark: **Regras de negócio**

* Dois entregadores não podem ter o mesmo e-mail no cadastro. Caso se tente cadastrar um entregador com um e-mail já existente no Banco de Dados, será retornado um erro;
* O registro de um entregador só pode ser excluído caso não existam entregas vinculadas ao seu registro. Caso existam encomendas, para se excluir o registro desse entregador, é necessário primeiro retirar todas as encomendas vinculadas a esse entregador antes de poder excluir o seu registro. Caso esse entregador tenha entregas concluídas em seus registros, ele não poderá ser mais excluído do sistema.

# :rocket: Seção "Destinatários"

Seção destinada ao cadastro e gerenciamento de Destinatários/Clientes. Está dividida em três áreas, conforme exibido na figura abaixo:

![Screen#03 02](https://user-images.githubusercontent.com/58818002/79164756-10f27100-7db8-11ea-9901-5f8818264585.png)

As áreas indicadas são as seguintes:

* **1- Pesquisa de destinatários**

  Nessa área é possível efetuar a pesquisa dos destinatários cadastrados, inserindo o nome ou parte do nome no campo de pesquisa. Ao clicar no botão com a figura da lupa :mag: o resultado será mostrado na área indicada com o número **3- Listagem dos destinatários**
  Caso o campo "Buscar por destinatários" esteja vazio e se efetue uma pesquisa, serão retornados todos os destinatários cadastrados no sistema.

* **2- Cadastro dos destinatários**

  Ao clicar no botão **“Cadastrar”**, aparecerá a tela para **Cadastramento de destinatários/clientes**, conforme exibido na figura abaixo:

  ![Screen#04 03](https://user-images.githubusercontent.com/58818002/79169771-ad6e4080-7dc3-11ea-919b-59a45bacc2b6.png)

Para se efetuar o cadastro de um destinatário, é muito simples. Basta seguir os seguintes passos:

* Preencher todos os campos existentes na tela de formulário com os dados do recipiente;
* Clicar em Salvar

Cadastro efetuado com sucesso! :tada:

Abaixo existe uma animação demonstrando o cadastro de um destinatário

![#03_CadDestinatario](https://user-images.githubusercontent.com/58818002/79170097-be6b8180-7dc4-11ea-8012-bf75e5f05ba5.gif)

:heavy_exclamation_mark: **Regras de negócio**

* No cadastro de um destinatário **Todos** os campos são obrigatórios. Caso o campo **Complemento** não exista, colocar um **-** ou inserir **não existe** como informação.

* **3- Listagem dos destinatários**
Nessa área, além de exibir a listagem dos destinatários cadastrados, é possível realizar algumas ações para cada um desses registros.

  Para isso, basta clicar nos **...** (3 pontos), localizados na coluna **Ações**, conforme indicado na figura abaixo

  ![Screen#04 04](https://user-images.githubusercontent.com/58818002/79183131-f84d7f80-7de6-11ea-86cb-b73b1d7d886c.png)

  Ao se clicar nos **...** (3 pontos) será exibido um menu com as Opções **Editar** e **Excluir** conforme exibido na figura abaixo:

  ![Screen#04 05](https://user-images.githubusercontent.com/58818002/79170384-9e888d80-7dc5-11ea-953f-523d389f8990.png)

  Descrição das opções:

* **Editar**: Permite a edição dos dados do entregador;
* **Excluir**: Permite a exclusão do registro do entregador cadastrado.

# :rocket: Seção "Problemas na entrega"

Seção destinada a visualização dos problemas nas entregas (o seu cadastro é realizado pelo entregador no módulo **Mobile**), conforme exibido na figura abaixo:

![Screen#05 01](https://user-images.githubusercontent.com/58818002/79173193-3473e680-7dcd-11ea-99d3-af97aca66a29.png)

Conforme os problemas são exibidos, é possível realizar algumas ações para cada um desses registros.

Para isso, basta clicar nos **...** (3 pontos), localizados na coluna **Ações**, conforme indicado na figura abaixo

![Screen#05 02](https://user-images.githubusercontent.com/58818002/79174819-3f7d4580-7dd2-11ea-81d1-daa168a76478.png)

Ao se clicar nos **...** (3 pontos) será exibido um menu com as Opções **Visualizar** e **Cancelar Encomenda** conforme a figura X abaixo

![Screen#05 03](https://user-images.githubusercontent.com/58818002/79174847-57ed6000-7dd2-11ea-8c6e-360bb64a34d1.png)

com as seguintes opções:

* **Visualizar**: Permite a visualização do problema cadastrado, conforme é exibido na figura abaixo

![Screen#05 04](https://user-images.githubusercontent.com/58818002/79174936-a3a00980-7dd2-11ea-86e7-96104f64979a.png)

* **Cancelar encomenda**: Permite a exclusão do registro da entrega. Esta ação tem como objetivo, mediante a algum problema crítico que impeça a realização da entrega, o administrador do sistema poder decidir pelo cancelamento dela.

No momento que uma entrega é cancelada, o entregador vinculado a esta encomenda irá receber um e-mail informando do cancelamento da entrega dessa encomenda.

Assim, todo o conteúdo referente ao Módulo Frontend do Sistema Fastfeet está concluído. Caso tenha interesse, pode conhecer o Módulo Mobile do Sistema Fastfeet clicando [aqui](https://github.com/SDamasceno-Dev/gostack-fastfeet-mobile)

---
Elaborado, criado e editado por **Sandro de Oliveira Damasceno** :space_invader:   [github!](https://github.com/SDamasceno-Dev) :octocat:
