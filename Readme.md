<p align="center" target="_blank">
  <img src="https://i.imgur.com/b9HrmqJ.png" target="_blank">
</p>

> Reconhecidamente a melhor solução para serviços de entrega, com foco exclusivamente no cliente e totalmente comprometida em superar expectativas.

<p align="center" target="_blank">
  <img src="https://img.shields.io/badge/Version-0.1-blueviolet?style=plastic" target="_blank">
  <img src="https://img.shields.io/badge/ReactJS-%3E%3D16.13.0-blueviolet?style=plastic&logo=React" target="_blank">
  <img src="https://img.shields.io/badge/React%20Redux-%3E%3D7.2.0-blueviolet?style=plastic&logo=Redux" target="_blank">
</p>

<p align="center" target="_blank">
:link:| &nbsp;<a href="#page_with_curl-Descrição" target="_blank">Descrição</a> &nbsp;  | &nbsp; <a href="#books-Bibliotecas">Bibliotecas</a> &nbsp; | &nbsp; <a href="#floppy_disk-Como-Instalar">Como instalar</a> &nbsp; | &nbsp; <a href="#office-Estrutura-do-Back-End">Estrutura do Back-End</a> &nbsp; | &nbsp; <a href="https://github.com/SDamasceno-Dev/gostack-fastfeet-back_end/blob/master/LICENSE.MD">Licença </a> &nbsp; |</p>

## :page_with_curl: Descrição

O módulo Front-end do sistema FastFeet é o responsável por disponibilizar o módulo de gerenciamento do Administrador do sistema.

Por meio desse módulo o Administrador pode dentre outras coisas:

<ul>
<li>Pesquisar, cadastrar, excluir e editar encomendas;</li>
<li>Pesquisar, cadastrar, excluir e editar entregadores;</li>
<li>Pesquisar, cadastrar, excluir e editar clientes;</li>
<li>Acompanhar o status de cada uma das encomendas;</li>
<li>Verificar as situações que causaram problemas, não permitindo a entrega;</li>
<li>Etc;</li>
</ul>

## :books: Bibliotecas

Abaixo estão listadas, dentro do respectivo agrupamento, as dependências, com a sua respectiva versão, utilizadas para o desenvolvimento desse módulo Back-end do sistema Fastfeet:

<details><summary>Dependências</summary>
  <ul>
    <li><a href="https://www.npmjs.com/package/@rocketseat/unform" target="_blank">@rocketseat/unform</a> [^1.6.2]</li>
    <li><a href="https://www.npmjs.com/package/@testing-library/jest-dom" target="_blank">@testing-library/jest-dom</a> [^4.2.4]</li>
    <li><a href="https://www.npmjs.com/package/@testing-library/react" target="_blank">@testing-library/react</a> [^9.3.2]</li>
    <li><a href="https://www.npmjs.com/package/@testing-library/user-event" target="_blank">@testing-library/user-event</a> [^7.1.2]</li>
    <li><a href="https://www.npmjs.com/package/axios" target="_blank">axios</a> [^0.19.2]</li>
    <li><a href="https://www.npmjs.com/package/date-fns" target="_blank">date-fns</a> [^2.11.0]</li>
    <li><a href="https://www.npmjs.com/package/date-fns-tz" target="_blank">date-fns-tz</a> [^1.0.10]</li>
    <li><a href="https://www.npmjs.com/package/history" target="_blank">history</a> [^4.10.1]</li>
    <li><a href="https://www.npmjs.com/package/immer" target="_blank">immer</a> [^6.0.1]</li>
    <li><a href="https://www.npmjs.com/package/polished" target="_blank">polished</a> [^3.4.4]</li>
    <li><a href="https://www.npmjs.com/package/prop-types" target="_blank">prop-types</a> [^15.7.2]</li>
    <li><a href="https://www.npmjs.com/package/react" target="_blank">react</a> [^16.13.0]</li>
    <li><a href="https://www.npmjs.com/package/react-dom" target="_blank">react-dom</a> [^16.13.0]</li>
    <li><a href="https://www.npmjs.com/package/react-icons" target="_blank">react-icons</a> [^3.9.0]</li>
    <li><a href="https://www.npmjs.com/package/react-redux" target="_blank">react-redux</a> [^7.2.0]</li>
    <li><a href="https://www.npmjs.com/package/react-router-dom" target="_blank">react-router-dom</a> [^5.1.2]</li>
    <li><a href="https://www.npmjs.com/package/react-scripts" target="_blank">react-scripts</a> "3.4.0]</li>
    <li><a href="https://www.npmjs.com/package/react-select" target="_blank">react-select</a> [^3.0.8]</li>
    <li><a href="https://www.npmjs.com/package/react-toastify" target="_blank">react-toastify</a> [^5.5.0]</li>
    <li><a href="https://www.npmjs.com/package/reactotron-react-js" target="_blank">reactotron-react-js</a> [^3.3.7]</li>
    <li><a href="https://www.npmjs.com/package/reactotron-redux" target="_blank">reactotron-redux</a> [^3.1.2]</li>
    <li><a href="https://www.npmjs.com/package/reactotron-redux-saga" target="_blank">reactotron-redux-saga</a> [^4.2.3]</li>
    <li><a href="https://www.npmjs.com/package/redux" target="_blank">redux</a> [^4.0.5]</li>
    <li><a href="https://www.npmjs.com/package/redux-persist" target="_blank">redux-persist</a> [^6.0.0]</li>
    <li><a href="https://www.npmjs.com/package/redux-saga" target="_blank">redux-saga</a> [^1.1.3]</li>
    <li><a href="https://www.npmjs.com/package/styled-components" target="_blank">styled-components</a> [^5.0.1]</li>
    <li><a href="https://www.npmjs.com/package/yup" target="_blank">yup</a> [^0.28.3]</li>
  </ul>
</details>

## :floppy_disk: Como Instalar

Para que após a clonagem este módulo funcione de forma correta, serão necessárias algumas ações para que toda a estrutura fique adequada para o seu bom funcionamento. Antes de listar os passos necessários para o preparo do ambiente, é necessário que o computador onde irá rodar este módulo, já tenha instalado o [Git](https://git-scm.com/), [Node.JS >=v12.14.0 LTS](https://nodejs.org/en/) e o [Yarn >=v1.22.4](https://yarnpkg.com/).
Com essa estrutura pronta, pode-se iniciar o preparo do ambiente para se rodar este módulo Back-end do sistema FastFeet.

1º Clonar este respoitório
Para se efetuar a clonagem desse repositório, crie uma pasta onde for o local adequado no seu computador, abra uma sessão do terminal de dentro dessa pasta e execute o seguinte comando

```bash
# Clona a pasta back-end do sistema FastFeet
$ git clone https://github.com/SDamasceno-Dev/gostack-fastfeet-frontend
```

Em seguida acessa a pasta clonada

```bash
# Acessa a pasta clonada
$ cd gostack-fastfeet-frontend
```

Agora execute o Yarn para que todas as dependências sejam corretamente instaladas

```bash
# Instala todas as dependências necessárias
$ yarn
```

Após a instalação das dependências necessárias, basta iniciar o módulo Frontend (web). Para isso executar o seguinte comando:

```bash
# Iniciar o módulo Frontend
$ yarn start
```

:warning: **Obs:** Para que o módulo **Frontend**, do Sistema Fastfeet execute de forma correta é obrigatório que o módulo **Backend** esteja sendo executado o acesso aos bancos de dados (Postgres e Redis). Qualquer dúvida, basta acessar a documentação de como instalar e executar o **Backend** [aqui](#https://github.com/SDamasceno-Dev/gostack-fastfeet-backend)
