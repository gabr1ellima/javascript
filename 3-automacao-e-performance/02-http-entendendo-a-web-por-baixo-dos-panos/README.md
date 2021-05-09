# HTTP: Entendendo a web por baixo dos panos

1. [O que é HTTP?](#http)
2. [A web segura - HTTPS](#https)
3. [Endereços sob seu domínio](#enderecos)
4. [O cliente pede e o servidor responde](requisicao-resposta)
5. [Depurando a requisição HTTP](#metodo-http)
6. [Parâmetros da requisição](#get-post)
7. [Serviços na web com REST](#web-service-rest)
8. [HTTP2 - Por uma web mais eficiente](#http2)

<h2 id="http">O que é o HTTP</h2>

Quando se fala em HTTP, o primeiro pensamento que vem a nossa mente é sobre a utilização da **internet**, é o cenário onde vemos realmente na prática a utilização do HTTP. Nós acessamos sites em que seus endereços iniciam com *http://* e por isso precisamos conhecer o que realmente está acontecendo ao fazer isso.

No momento em que acessou este curso, esta aula, entre o navegador e a Alura aconteceu uma comunicação, e esta comunicação tem duas partes bem conhecidas que chamamos de **Client-Server** ou em português **Cliente-Servidor**. Este é um modelo arquitetural, ou seja, a internet inteira é baseada nesta arquitetura onde há um cliente que solicita e um servidor que responde.

![https://s3.amazonaws.com/caelum-online-public/http/http-cliente_servidor.png](https://s3.amazonaws.com/caelum-online-public/http/http-cliente_servidor.png)

Em qualquer comunicação é preciso existir algumas regras para que as duas partes consigam se entender com sucesso. Pensando na comunicação do seu navegador entre a Alura ou algum outro site esse conjunto de regras é basicamente um **protocolo**, onde neste cenário é o **HTTP**.

> Os protocolos são definidos, especificados e disponibilizados para implementação em ambas as partes, para consultar a especificação do HTTP, você pode utilizar o seguinte endereço: https://tools.ietf.org/html/rfc2616

![https://s3.amazonaws.com/caelum-online-public/http/http-cliente_servidor-regras.png](https://s3.amazonaws.com/caelum-online-public/http/http-cliente_servidor-regras.png)

Resumindo: O **HTTP é um protocolo** que define as **regras de comunicação** entre **cliente e servidor** na internet. Vamos focar nos próximos vídeos e entender melhor esse protocolo tão importante. mãos a obra!

![https://s3.amazonaws.com/caelum-online-public/http/http-cliente-servidor-protocolo.png](https://s3.amazonaws.com/caelum-online-public/http/http-cliente-servidor-protocolo.png)

### Peer-To-Peer

Você já usou *torrent* para baixar algum arquivo na internet? Caso sim, aproveitou um outro modelo de comunicação, o **P2P** ou *Peer-To-Peer*!

O modelo **Cliente-Servidor** não é o único modelo de comunicação na rede, nem sempre o mais adequado. Por exemplo, imagine que precisemos contar as letras de 20 palavras. No caso do modelo *Cliente-Servidor*, quem fará esse trabalho é o servidor, certo? E se precisar contar as letras de 1 milhão de palavras? Muito trabalhoso para o servidor, não?

O modelo **Cliente-Servidor** tenta centralizar o trabalho no servidor, mas isso também pode gerar gargalos. Se cada Cliente pudesse ajudar no trabalho, ou seja, assumir um pouco da responsabilidade do servidor, seria muito mais rápido. Essa é a ideia do P2P! Não há mais uma clara divisão entre *Cliente-Servidor*, cada cliente também é servidor e vice-versa!

Isto é útil quando você precisa distribuir um trabalho ou necessita baixar algo de vários lugares diferentes. Faz sentido?

Usando algum aplicativo de Torrent, o protocolo utilizado não é o HTTP, e sim o protocolo **P2P**, como *BitTorrent* ou *Gnutella*.

<h2 id="https">HTTPS</h2>

Sabendo que o HTTP é o protocolo que define as regras de comunicação na web, precisamos observar algumas coisas. Quando usamos o HTTP, todos os dados enviados entre cliente e servidor são *transmitidos em texto puro*, inclusive dados sensíveis, como login e senha!

Quando acessamos a Alura por exemplo, precisamos fornecer informações de autenticação, essas informações são nosso email e senha, que são enviadas e validadas pela plataforma para que assim consigamos assistir as aulas. Estas informações são enviadas em texto limpo e é possível visualizá-las pelas ferramentas do desenvolvedor do navegador. A aba *network* nos possibilita isso.

![https://s3.amazonaws.com/caelum-online-public/http/a2v1-dados-em-texto-http.png](https://s3.amazonaws.com/caelum-online-public/http/a2v1-dados-em-texto-http.png)

Mas por que é importante sabermos isso? Quando o navegador pede informações da Alura, nessa comunicação há vários intermediários. Por exemplo, usando uma conexão Wi-Fi, os dados do navegador passam primeiro para o roteador Wi-Fi, e do roteador passam para o modem do provedor, do modem para algum servidor do provedor de internet, como Oi ou NET.

É muito provável que existam outros servidores intermediários no provedor antes que os dados realmente cheguem no servidor da Alura. Com a resposta é a mesma coisa, ela volta passando por esses servidores no meio antes de chegar até nosso navegador. O problema é, quando usamos HTTP, qualquer servidor no meio pode espionar os dados enviados, algo totalmente inseguro! Imagine se essas informações fossem relativas a contas bancárias. Não seria nada seguro!

Para estes outros cenários, existe o HTTP**S**, que basicamente é o HTTP comum, porém com uma camada adicional de segurança/criptografia que antes era SSL, mas posteriormente passou a ser também TLS. É muito comum que estas duas siglas sejam encontradas juntas como SSL/TLS por se tratarem da mesma questão de segurança. Sendo assim, temos dois termos:

1. HTTP: HyperText Transfer Protocol
2. SSL/TLS: Secure Sockets Layer / Transport Layer Security

### Funcionamento do HTTPS

Ao acessarmos o [site da Alura](https://www.alura.com.br/) pelo navegador podemos perceber que ele já usa o protocolo **HTTPS**:

![https://s3.amazonaws.com/caelum-online-public/http/alura-https.png](https://s3.amazonaws.com/caelum-online-public/http/alura-https.png)

Reparem que no navegador, ao lado do `https`, aparece um cadeado e que ao clicarmos no cadeado podemos ver mais informações sobre HTTPS. Uma dessas informações indica que a Alura tem uma identidade confirmada. O que isso quer dizer?

O HTTPS para garantir segurança usa criptografia baseada em chaves públicas e privadas e para gerar essas chaves publicas e privadas é preciso garantir a identidade de quem possui essas chaves e isso é feito a partir de um **certificado digital**, ou seja, um certificado digital é utilizado para **identificar** determinada entidade e ainda é utilizada para geração das chaves de criptografia.

Apesar disso, ainda é necessário que uma **autoridade certificadora**, que nada mais é que um órgão ou entidade confiável, garanta não apenas a identidade do site mas também a validade do certificado. No caso da Alura a autoridade certificadora é a *COMODO RSA Domain Validation*, mas existem outras.

![https://s3.amazonaws.com/caelum-online-public/http/alura-https-certificado.png](https://s3.amazonaws.com/caelum-online-public/http/alura-https-certificado.png)

Dito isso, como tudo funciona? Os navegadores em posse da chave pública criptografam as informações e as enviam para o servidor que as descriptografa com a chave privada. É importante notar que apenas a chave privada descriptografa as informações criptografadas com a pública, e também que deve-se manter a chave privada segura.

## As chaves do HTTPS

Aprendemos no vídeo que o HTTPS usa uma **chave pública** e uma **chave privada**. As chaves estão *ligadas* matematicamente, o que foi cifrado pela chave pública só pode ser decifrado pela chave privada. Isso garante que os dados cifrados pelo navegador (chave pública) só podem ser lidos pelo servidor (chave privada). Como temos duas chaves diferentes envolvidas, esse método de criptografia é chamado de **criptografia assimétrica**. No entanto, a criptografia assimétrica tem um problema, ela é **lenta**.

![https://s3.amazonaws.com/caelum-online-public/http/cripto-assimetrica.png](https://s3.amazonaws.com/caelum-online-public/http/cripto-assimetrica.png)

Por outro lado, temos a **criptografia simétrica**, que usa a mesma chave para cifrar e decifrar os dados, como na vida real, onde usamos a mesma chave para abrir e fechar a porta. A criptografia simétrica é muito **mais rápida**, mas infelizmente não **tão segura**. Como existe apenas uma chave, ela ficará espalhada pelos clientes (navegadores) e qualquer um, que tem a posse dessa chave, pode decifrar a comunicação.

![https://s3.amazonaws.com/caelum-online-public/http/cripto-simetrica.png](https://s3.amazonaws.com/caelum-online-public/http/cripto-simetrica.png)

Agora, o interessante é que o **HTTPS usa ambos os métodos de criptografia, assimétrica e simétrica**. Como assim? Muita calma, tudo o que aprendemos é verdade! Só faltou o grande final :)

No certificado, vem a chave pública para o cliente utilizar, certo? E o servidor continua na posse da chave privada, ok? Isso é seguro, mas lento e por isso o cliente gera uma chave simétrica ao vivo. Uma chave só para ele e o servidor com o qual está se comunicando naquele momento! Essa chave exclusiva (e simétrica) é então enviada para o servidor utilizando a criptografia assimétrica (chave privada e pública) e então é utilizada para o restante da comunicação.

Então, HTTPS **começa** com criptografia **assimétrica** para **depois** mudar para criptografia **simétrica**. Essa chave simétrica será gerada no início da comunicação e será reaproveitada nas requisições seguintes.

<h2 id="enderecos">Endereços<h2>

### Analisando o domínio

https://www.alura.com.br

Olhando da direita para esquerda, o domínio começa com `br`, indicando um site do Brasil. O `br` representa o *top level domain*, que está na raiz do domínio. Depois vem o `com`, abreviação de *comercial* e `alura`. O `com` e o `alura` são sub-domínios.

![https://s3.amazonaws.com/caelum-online-public/http/domain-hierarquia.png](https://s3.amazonaws.com/caelum-online-public/http/domain-hierarquia.png)

O www representa também um sub-domínio, no entanto seu uso é opcional, tanto que `alura.com.br` e `www.alura.com.br` funcionam e mostram a mesma página. A maioria dos site usam o prefixo www e podemos dizer que isso é algo legado que continua ser popular apesar de não ser necessário.

### Subdomínios

Existem também a ideia de subdomínios, que representam sessões específicas dentro de um site. Por exemplo, no caso do Gmail temos o endereço: `mail.google.com`, ou ainda no caso do Google Drive: `drive.google.com`. Tanto Gmail como Drive são subdomínios do domínio Google.

Perceba que esses subdomínios apotem para páginas diferentes dentro do mesmo domínio (Google).

### Endereços IP's

O nome do domínio  é organizado em uma hierarquia que foi criada para organizar os sites na internet e para a gente ter algo fácil para lembrar. Para se correto, a internet funciona na verdade sem esses domínios. Aqueles nomes são coisas dos humanos, as máquinas na internet têm outra forma de se endereçar. Elas usam o que se chama endereços de IP, que nada mais são do que números - muito difícil para a gente decorar.

### DNS

Mas a gente não acessa a Google ou a Alura por um número como 52.206.164.173 e sim pela URL.

Acontece que por baixo dos panos quando realizamos uma requisição essa URL é transformada em um número por um serviço transparente chamado de DNS (Domain Name System). 

Esse serviço age como um grande banco de dados de domínios. Portanto quando fazemos uma requisição para alura.com.br o DNS age transformando para um IP e a requisição prossegue.

Podemos inclusive escolher um servidor DNS de preferência na nossa internet. Um bastante usado é o da própria Google: [https://developers.google.com/speed/public-dns/](https://developers.google.com/speed/public-dns/)

### URL

Repare que estamos usando umas regras bem definidas para descrever a localização de um recurso na web. Todos os endereços na web sempre seguem esse mesmo padrão: **`protocolo://dominio:porta/caminho/recurso`**. Esse padrão, na verdade, segue uma especificação que foi batizada de ***Uniform Resource Locator***, abreviada como ***URL***. Então, as URLs são os endereços na web!

![https://s3.amazonaws.com/caelum-online-public/http/http-url.png](https://s3.amazonaws.com/caelum-online-public/http/http-url.png)

### Recursos

- **URL** são endereços da **WEB**
- Uma URL começa com o **protocolo**(http://) seguido pelo **domínio** (www.alura.com.br)
- Após o domínio é especificado o **caminho** para um **recurso**(course/introducao-html-css)
- Um **recurso** é algo concreto que queremos acessar

### URI e URL

Muitas vezes, desenvolvedores usam a sigla **URI** (***U**niform* ***R**esource* ***I**dentifier*) quando falam de endereços na web. Alguns preferem **URL** (***U**niform* ***R**esource* ***L**ocator*), e alguns misturam as duas siglas à vontade. Há uma certa confusão no mercado a respeito e mesmo desenvolvedores experientes não sabem explicar a diferença. Então, qual é a diferença?

**Resposta 1 (fácil):** Uma **URL** é uma **URI**. No contexto do desenvolvimento web, ambas as siglas são válidas para falar de endereços na web. As siglas são praticamente sinônimos e são utilizadas dessa forma.

**Resposta 2 (mais elaborada):** Uma **URL** é uma **URI**, mas nem todas as **URI's** são **URL's**! Existem **URI's** que identificam um recurso sem definir o endereço, nem o protocolo. Em outras palavras, uma **URL** representa uma *identificação* de um recurso (**URI**) através do endereço, mas nem todas as identificações são **URL's**.

Humm ... ficou claro? Não? Vamos dar um exemplo! Existe um outro padrão que se chama **URN** (***U**niform* ***R**esource* ***N**ame*). Agora adivinha, os **URN's** também são **URI's**! Um **URN** segue também uma sintaxe bem definida, algo assim **`urn:cursos:alura:course:introducao-html-css`**. Repare que criamos uma outra identificação do curso **Introdução ao HTML e CSS** da Alura, mas essa identificação não é um endereço.

![https://s3.amazonaws.com/caelum-online-public/http/http-uri-urn-url.png](https://s3.amazonaws.com/caelum-online-public/http/http-uri-urn-url.png)

Novamente, a resposta 2 vai muito além do que você realmente precisa no dia a dia. *Normalmente **URL** e **URI** são usados como sinônimos*.

<h2 id="requisicao-resposta"> Modelo Requisição e Resposta</h2>

O HTTP é um protocolo que define as regras de comunicação entre cliente e servidor e de que as URLs são constituídas. Vejamos mais alguns detalhes sobre o funcionamento da Web e do HTTP.

No mundo HTTP, a requisição enviada pelo navegador é chamada de **HTTP REQUEST**. Recebemos a página */dashboard* como resposta já que enviamos login e senha válidos. No mundo HTTP essa resposta é chamada de **HTTP RESPONSE.**

A comunicação segue sempre esse modelo: o cliente envia uma requisição e o servidor responde. Requisição e Resposta ou em inglês: Request-Response. Aqui é importante saber que a comunicação sempre começa com o cliente: é ele quem pede as informações. O servidor responde apenas o que foi requisitado e nunca inicia a comunicação!

![https://s3.amazonaws.com/caelum-online-public/http/alura-request-response.png](https://s3.amazonaws.com/caelum-online-public/http/alura-request-response.png)

### **Comunicação sem estado**

Vamos acessar rapidamente outro site: `http://g1.globo.com`. Para este acesso estamos enviando uma requisição para *g1* e recebemos como resposta a página inicial.

Agora vamos navegar dentro do site e acessar algum artigo. Ao clicarmos enviamos uma nova requisição e percebemos que TODA página foi trocada. Fica mais claro ainda se acessarmos do menu acima algum link (*globo esporte* ou *globo show*). Podemos ver que todo o conteúdo do site foi trocado.

Isso também acontece no caso da Alura (talvez um pouco mais difícil de perceber). Ao acessarmos recursos diferentes todo o conteúdo no navegador foi trocado (apesar do menu parecer o mesmo, ele também foi trocado). A ideia do HTTP é justamente essa, cada recurso é independente do outro e não depende do anterior. Isso também se aplica para os dados enviados na requisição. Cada requisição é independente da outra e ela sempre deve conter todas informações para o servidor responder.

Pense que HTTP funciona como o envio de cartas pelo correio e uma carta representa uma requisição. Você fez uma viagem e gostaria de enviar 3 cartas para sua mãe. Adianta falar para os correios "eu vou colocar o endereço apenas na primeira carta, ai vocês já sabem para onde enviar a segunda e terceira carta"? Não adianta pois os correios tratam cada carta independentemente, e assim também funciona o HTTP. Cada requisição (carta) precisa ter todas as informações. A mesma coisa se aplica para a resposta, precisa ter todas as informações.

Essa característica de cada requisição ser independente é chamada de **stateless**. É esse nome bonito mesmo! O HTTP é um *protocolo que não mantém o estado de requisições*. Isso significa que só com HTTP não há como se lembrar das requisições anteriores enviadas para o servidor. Por isso precisamos incluir em cada requisição todas as informações, sempre. Para o desenvolvedor este conhecimento é importante pois é justamente essa característica stateless que o atrapalha no dia a dia. Ele precisa preparar a aplicação web para que funcione bem usando o protocolo HTTP, algo que veremos nos treinamentos da Alura.

### **Lidando com Sessões**

Reparem que, mesmo após termos realizado o login e termos enviado várias requisições, aparece o ícone com a minha imagem no menu principal.

![https://s3.amazonaws.com/caelum-online-public/http/alura-icone-logado.jpg](https://s3.amazonaws.com/caelum-online-public/http/alura-icone-logado.jpg)

Ou seja, a Alura se lembra de alguma forma que eu fiz login em alguma requisição anterior. Como falamos antes, cada requisição deve enviar todas as informações para gerar a resposta. Isso significa que o navegador envia em cada requisição informações sobre o meu usuário! Se cada requisição for independente uma da outra, e não tiver como se lembrar das requisições anteriores, não tem outra explicação a não ser que o navegador envie os dados sobre o meu usuário em cada requisição! Lembre-se da carta postal, ela sempre precisa ter os dados do remetente e aqui não é diferente!

Então o navegador *envia o login e senha em cada requisição*? Não, não seria muito elegante nem seguro fazer isso. Mas ele faz algo parecido, acreditem ou não. Quando efetuamos o login, a Alura valida os nossos dados, certo? Nesse momento, o servidor tem certeza que o usuário existe e gera uma identificação quase aleatória para o usuário. Essa identificação é um número criado ao vivo e muito difícil de adivinhar. Esse numero é a identificação temporária do usuário e ele será devolvido na resposta.

![https://s3.amazonaws.com/caelum-online-public/http/alura-req-res-cookie.png](https://s3.amazonaws.com/caelum-online-public/http/alura-req-res-cookie.png)

### **Conhecendo cookies**

Então onde está esse número? O navegador grava esse número em um arquivo especial para cada site, são os famosos **cookies**. Como acessar esse cookie depende um pouco do navegador em uso. O mais importante é entender o porquê da existência desse número e onde ele foi gravado.

No Chrome podemos ver todos os cookies armazenados nas ***Configurações -> Privacidade -> Configurações de conteúdo... -> Todos os cookies e dados de site...***. Se procurarmos por **Alura**, em **cursos.alura.com.br**, lá temos um cookie com o nome **`caelum.login.token`**, que contém o número da identificação. Se apagarmos esse cookie, perderemos nossa identificação, sendo assim, a Alura exigirá um novo login pois não saberá que já tínhamos logado.

![https://s3.amazonaws.com/caelum-online-public/http/alura-cookie-navegador.png](https://s3.amazonaws.com/caelum-online-public/http/alura-cookie-navegador.png)

Normalmente o nome do cookie é algo como `session-id`, dependendo da plataforma de desenvolvimento utilizada ele pode se chamar de `PHPSESSID` ou `ASP.NET_SessionId` ou `JSESSIONID` ou outro nome que foi inventado! O Cookie será gerado de forma transparente pela tecnologia que você for utilizar para criar aplicativos web. Esse nome, `PHPSESSIONID`, `JSESSIONID` ou outro, é gerado pela ferramenta de gerenciamento de Sessão. Por isso ela muda o nome. Se você está usando PHP, então o PHP gerará o nome do Cookie e seu identificador (número aleatório) e chamará o cookie `PHPSESSIONID`. No Java já será usado o nome `JSESSIONID`.

Resumindo, todas as plataformas ajudam a gerar esse número e a criar o cookie de maneira transparente. É dessa forma que as plataformas gerenciam as **SESSÕES** com o usuário. Como isso funciona de modo concreto você aprenderá nos cursos e carreiras específicas.

A ideia de manter dados entre requisições é algo muito comum no desenvolvimento de aplicações na web. Um usuário que se loga no sistema web causa a criação de uma sessão. Uma sessão então é útil para guardar informações sobre o usuário e ações dele. Um exemplo clássico é um carrinho de compras. Entre várias requisições estamos usando o mesmo carrinho de compras que guarda os nossos produtos escolhidos (fizemos uma sessão de compras online).

Quando falamos de **Cookies** na verdade queremos dizer **Cookies HTTP** ou **Cookie web**. Um cookie é um pequeno arquivo de texto, normalmente criado pela aplicação web, para guardar algumas informações sobre usuário no navegador. Quais são essas informações depende um pouco da aplicação. Pode ser que fique gravado alguma preferência do usuário. Ou algumas informações sobre as compras na loja virtual ou, como vimos no vídeo, a identificação do usuário. Isso depende da utilidade para a aplicação web.

Um cookie pode ser manipulado e até apagado pelo navegador e, quando for salvo no navegador, fica associado com um domínio. Ou seja, podemos ter um cookie para `www.alura.com.br`, e outro para `www.caelum.com.br`. Aliás, um site ou web app pode ter vários cookies!

Resumindo teremos:

- O HTTP usa sessões para salvar informações do usuário
- Sessões só são possíveis por uso de Cookies
- Cookies são pequenos arquivos que guardam informações no navegador
- O HTTP é stateless, não mantem estado.

<h2 id="metodo-http">Depurando o método HTTP</h2>

### Método GET do HTTP

Vamos abrir o console de desenvolvedor e acessar o [http://www.alura.com.br](http://www.alura.com.br/). Aqui usaremos o navegador Chrome, mas nos outros navegadores o comportamento é bem parecido.

No console podemos ver todas as requisições HTTP executadas pelo Chrome. Mas não só isso, também aparecem alguns códigos e métodos, além do tempo de execução para cada requisição. Repare que chamamos apenas o `http://www.alura.com.br`, mas foram feitas várias outras requisições em seguida.

![https://s3.amazonaws.com/caelum-online-public/http/a5v1-alura-http-responselog.png](https://s3.amazonaws.com/caelum-online-public/http/a5v1-alura-http-responselog.png)

Na primeira coluna aparece a URL (o endereço) e na segunda coluna o método HTTP. O método HTTP indica qual é a **intenção ou ação dessa requisição**. Enviamos uma requisição com o método **GET**. Queremos receber informações, sem modificar algo no servidor, que é justamente a ideia do método *GET*.

### Primeiro código da resposta

Como resposta recebemos o código de status `301`. O protocolo HTTP define alguns códigos padrões para esclarecer a resposta. Indo com o mouse em cima do `301` o Chrome mostra o significado desse código: **Moved Permanently**. Ou seja, o site Alura foi movido para outro lugar! Eis a questão: Onde então está o site Alura?

A localização ou a URL concreta está na resposta HTTP. Vamos clicar em cima do código de status `301` para receber mais informações. Aqui o Chrome mostra todos os cabeçalhos da requisição e da resposta. São muitos (nem tantos) mas o que nos interessa é a nova localização do site. Dentro do item *Response Headers* podemos ver todos os cabeçalhos que o servidor devolveu e logo logo apareceu um com o nome **Location**. Esse cabeçalho indica a nova URL, só que agora usando **https**.

Quando o navegador recebe o status `301` ele já sabe que é preciso enviar uma nova requisição e procura a nova URL no cabeçalho de resposta `Location`.

![https://s3.amazonaws.com/caelum-online-public/http/a5v1-alura-http-responde.png](https://s3.amazonaws.com/caelum-online-public/http/a5v1-alura-http-responde.png)

### Redirecionando entre sites

Se alguém acessa a Alura usando `http` (lembrando, *inseguro*) automaticamente é chamado o site seguro (`https`). Isto é um comportamento muito comum para garantir que usamos `https` sempre. Se esquecermos de usar `https`, o servidor devolve o status `301` com a nova localização, mas agora usando `https`.

O navegador, ao receber `301`, chama automaticamente a nova URL. No mundo de desenvolvimento web este comportamento é chamado de *Redirecionamento pelo navegador*, ou **Redirecionamento no lado do cliente**. Fomos redirecionados para o recurso correto. A tarefa do desenvolvedor é definir o código de resposta e, no caso em que algum recurso tenha mudado a URL, o código `301` será usado com o cabeçalho `Location`.

### O código 200

Continuando no console, a segunda requisição foi para `https://www.alura.com.br`, novamente usando o método `HTTP GET` com a intenção de receber dados. Agora o código de resposta foi `200`. Este é um dos códigos mais comuns e significa que tudo deu certo! Dessa vez não foi preciso fazer um redirecionamento (não tem o cabeçalho `Location` na resposta) e não deu nenhum outro problema. A requisição foi aceita e processada corretamente - código `200`. Perfeito.

### Tipos de dados diferentes

No console podemos ver que aparecem mais requisições (cada linha representa um novo request). Quando o servidor Alura devolve a resposta para o navegador vem o conteúdo da página inicial em um formato especial, chamado de HTML. O HTML define a estrutura da nossa página, define os menus, botões, links, rodapé etc. Mas dentro do HTML não vêm as imagens e outros arquivos necessários para deixar o site perfeito. Dentro dele vem apenas a URL (endereço) desses outros recursos.

Então, ao receber o HTML, o navegador dispara várias outras requisições para carregar as imagens, fontes e outros dados. Como também são requisições HTTP, o console mostra suas informações. Podemos ver que na resposta vem o tipo do conteúdo, por exemplo `text/html`, `text/css`, `image/svg+xml`, entre outros.

O importante é saber que o protocolo HTTP não está preso em algum formato específico. Podemos trafegar qualquer informação com ele, seja texto ou binário!

### Depurando os códigos de resposta HTTP

Vamos fazer um teste e acessar um recurso que não existe, por exemplo: `https://www.alura.com.br/nao-existe`. Bom, a Alura mostra uma imagem que indica que não achou o que procuramos, mas vamos dar uma olhada no console. Repare que o código agora é `404`. No mundo HTTP `404` significa que o servidor não encontrou o recurso (*Not Found*).

![https://s3.amazonaws.com/caelum-online-public/http/a5v2-nao-existe.png](https://s3.amazonaws.com/caelum-online-public/http/a5v2-nao-existe.png)

Durante o desenvolvimento de uma aplicação web podem acontecer problemas no lado do servidor. Isto é normal pois alguma lógica pode falhar, erros acontecem no desenvolvimento! A notícia boa é que o protocolo HTTP vem preparado para isso. Quando algum problema no servidor acontecer, podemos avisar o cliente através do protocolo HTTP. O código mais comum para este tipo de problema é o 500 que significa: "deu pau no servidor :)". Talvez um ou outro aluno já tenha visto um erro 500 na Alura. Isso não deveria acontecer, mas onde há humanos também há problemas, não é mesmo?

### **Categorias de códigos**

Existem muitos códigos de resposta definidos no protocolo HTTP. Há tabelas disponíveis na web que mostram esses códigos, descrevendo o significado de cada um deles. No entanto, no dia a dia, o desenvolvedor não precisa decorar todos esses códigos. Basta consultar quando for necessário, por exemplo [aqui](http://www.w3schools.com/tags/ref_httpmessages.asp).

O importante é saber que algo que começa com **2xx** significa coisa boa, a requisição foi executada com sucesso. Quando recebemos algo como **3xx** normalmente significa que o navegador precisa fazer algo a mais (o cliente precisa agir) pois algo mudou ou um recurso não existe mais. **4xx** significa que o navegador enviou dados errados, como por exemplo uma URL errada. Caso o servidor gere algum problema, serão utilizados os códigos **5xx**.

No dia a dia os códigos 200, 404 e 500 são de longe os mais utilizados!

200 - OK

301 - Moved Permanently

404 - Not Found

500 - Internal Server Error

2XX - Successful responses (Respostas de sucesso)

3XX - Redirection messages (Mensagem de redirecionamento)

4XX - Client error responses (Respostas de erro do cliente)

5XX - Server error responses (Respostas de erro do servidor)

HTTP é o protocolo mais utilizado na internet e há muita documentação disponível. Segue um link que explica os códigos HTTP de forma divertida: [httpstatusdogs](https://httpstatusdogs.com/) ou se você preferir gatos [httpcats](https://http.cat/)

Documentação mais completa e detalhada neste link: [https://httpstatuses.com/](https://httpstatuses.com/)

<h2 id="get-post">Parâmetros de requisição com métodos GET e POST</h2>

Vamos ver um outro exemplo de uma URL e acessar [http://www.youtube.com](http://www.youtube.com/). Vamos pesquisar, por exemplo por *Ayrton Senna.* Repare que, ao pesquisar no YouTube, a URL mudou um pouco. O recurso acessado pela busca se chama `/results` (os resultados da pesquisa) mas agora temos um **parâmetro da requisição**, indicado pela **?:** [`https://www.youtube.com/results?search_query=Ayrton+Senna`](https://www.youtube.com/results?search_query=Ayrton+Senna)

O parâmetro se chama `search_query` com o valor `Ayrton+Senna`. Esses parâmetros da URL normalmente são chamados de ***Query Params***. O HTTP permite enviar mais de um parâmetro, basta concatenar o próximo parâmetro através do caractere `**&**`.

Como o Google concatena os ***Query Params***: [`https://www.google.com.br/?gws_rd=ssl#lr=lang_pt&tbs=lr:lang_1pt&q=neymar`](https://www.google.com.br/?gws_rd=ssl#lr=lang_pt&tbs=lr:lang_1pt&q=neymar)

### Parâmetros com GET

Reparem que no console sempre apare o tipo (ou método) da requisição, sendo `GET`. Uma característica da requisição `GET` é enviar os parâmetros pela URL! Isso é útil quando queremos deixar os parâmetros visíveis. Assim podemos facilmente guardar a URL com os parâmetros para repetir a requisição algum momento depois. Mas será que isso também é uma boa opção na hora de enviar credenciais como `login` e `senha`?

### O método HTTP POST

Vamos efetuar um login na Alura para ver como esse sistema envia dados do usuário para o servidor.

![https://s3.amazonaws.com/caelum-online-public/http/a6v2-post-alura.png](https://s3.amazonaws.com/caelum-online-public/http/a6v2-post-alura.png)

Repare que a URL para enviar o *login* e *senha* se chama `https://www.alura.com.br/signin`. Repare também que o método HTTP utilizado mudou. Estamos usando o **HTTP POST**! Usando o `POST`, o navegador envia os dados do formulário no corpo da requisição e não na URL! Se fosse um `GET`, todos os dados seriam enviados através da URL.

### **GET para receber, POST para criar?**

Um outro exemplo de um método `POST` na Alura é quando criamos uma pergunta no forum. Nesse momento o usuário submete um formulário com dados para criar um novo recurso na Alura (a pergunta do aluno se torna um recurso). O método `POST` foi inicialmente pensado para criar algo novo no servidor como acabamos de fazer. Ou seja, ao enviar uma requisição `POST` para o servidor, a nossa intenção é criar algo novo. No entanto, nem sempre isso é realmente utilizado dessa maneira. Por exemplo, acabamos de usar um `POST` para verificar o login, ou seja, não alteramos ou adicionamos nada na Alura. Nossa motivação para o `POST` era esconder os parâmetros apenas.

Como o servidor realmente reage quando recebe uma requisição `POST` depende da implementação, depende da lógica atrás. Os métodos como `GET` e `POST` definem uma intenção mas o que realmente será executado depende do servidor.

No dia a dia, vocês vão ver códigos usando `GET` para fazer pesquisas mas também para alterar ou remover algo no servidor. A mesma coisa podemos dizer sobre `POST`. Vocês vão usar o `POST` para inserir e alterar dados, mas também para pesquisar. As aplicações podem adaptar o significado dos métodos HTTP quando for necessário.

### Enviando parâmetros de forma correta

Quando enviamos um parâmetro na URL, devemos iniciar pelo `?`, o nome do parâmetro e um `=`, para separar o nome do parâmetro do seu valor:

```
?nome_do_parametro=seu_valor
```

Quando usamos mais do que, um parâmetro devemos usar **`&`** para separá-los:

```
?nome_do_parametro=seu_valor&nome_do_outro_param=valor
```

### Outros métodos HTTP e Web Services

Já falamos bastante sobre os métodos (ou verbos) HTTP, `GET` e `POST`. Esses dois são utilizados na grande maioria das aplicações web, e fazem parte do dia a dia do desenvolvedor, no entanto existem diversos outros métodos.

Se o `GET` foi criado para receber dados, e o `POST` para adicionar algo no servidor, será que não existe algo para apagar e atualizar?

A resposta é sim, e os métodos se chamam **`DELETE`** e **`PUT`**.

Novamente esses métodos normalmente não são utilizados quando se trata de uma aplicação web, e são mais importantes quando o assunto é Web Services.

Agora vem a pergunta, você já ouviu falar de Web Services?

Quando falamos de um Web Service, sempre usamos o protocolo da web, ou seja o HTTP.

Um Web Service disponibiliza uma funcionalidade na web, através do protocolo HTTP. As funcionalidades variam muito e dependem muito da empresa e do negócio dela, mas por exemplo, na Alura temos um Web Service que traz todas as informações de um curso (nome, capítulos, exercícios, etc). O Google ou Facebook possuem muitos Web Services para acessar um usuário, ver os posts dele, interesses, etc. Muitas vezes esses serviços são pagos.

O importante é que sempre usamos o protocolo HTTP. A grande diferença de um Web Service é que os dados **não** vem no formato HTML, e sim em algum formato independente da visualização, como XML ou JSON.

Temos um pequeno exemplo de um Web Services que usamos em um dos treinamentos presenciais. Tente acessar: [http://argentumws.caelum.com.br/negociacoes](https://argentumws-spring.herokuapp.com/negociacoes)

Repare que recebemos dados sobre negociações, mas o formato é XML. Isso é um Web Service! É a tarefa do cliente ler os dados e apresentar para o usuário final. O cliente não precisa ser o navegador (e normalmente não é), pode ser um celular ou uma aplicação Desktop.

[METHODS](https://www.notion.so/61ad8f4e6201457daf14f5d7c324e5d8)

<h2 id="web-service-rest"> Serviços na Web com REST</h2>

### Serviços WEB

Hoje existem milhões de softwares rodando ou sendo desenvolvidos em várias linguagens de programação e frameworks. Tais softwares não vivem necessariamente isolados e podem querer se comunicar de alguma forma.

Um exemplo clássico é o login via rede social que estamos cada vez mais habituados. Essa conversa acaba sendo transparente para nós, usuários, já que exige uma autorização de acesso às nossas informações.

As aplicações que disponibilizam serviços para outras são chamadas de webservices. E uma ***API*** de utilização é documentada para uma integração eficiente entre sistemas.

Temos serviços web para trabalhar com pagamentos(*Paypal é um exemplo famoso*), upload de imagens, transformação de CEP em endereços textuais e diversos outros. Tudo isso é feito através do poderoso protocolo **HTTP**.

### O que é REST?

Algumas funcionalidades específicas aos responsáveis de um restaurante podem ser necessárias. E para isso o `webservice` deveria estar preparado também para lidar com essa necessidade:

```
Listagem de todos os restaurantes --> GET - /restaurante

Adicionar um  restaurante --> POST - /restaurante
```

Perceba que no exemplo fictício as duas primeiras `URIs` são idênticas e a funcionalidade muda completamente a partir do método `HTTP` usado:

```
GET -> Listagem
POST -> Criação
```

A atualização poderia ter um outro endpoint como por exemplo:

```
PUT/PATCH - /restaurante/1
```

O número 1 ao final da URI indica um identificador a um restaurante específico.

A remoção de um restaurante poderia seguir o mesmo modelo:

```
DELETE - /restaurante/1
```

Para a busca do cardápio de um restaurante específico o endpoint gerado poderia seguir o modelo:

```
GET - /restaurante/1/cardapio
```

### **O padrão REST**

Logo podemos perceber que o padrão usado pela equipe do webservice define que uma requisição web tem três tipos de componentes importantes: recursos (URI), operações (`GET, POST, PUT, DELETE/...`) e representação de dados(`XML, JSON, ...`).

Esses três componentes em conjuntos seguindo algumas práticas são a base para o modelo arquitetural **REST(Representational State Transfer)** ou em português **Transferência de Estado Representacional**.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b5b26b15-27e4-43f2-a25f-b1c6bc876950/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b5b26b15-27e4-43f2-a25f-b1c6bc876950/Untitled.png)

### **Recurso**

Ao criar as URIs do nosso sistema devemos levar em conta que elas representam recursos, não ações.

Em sistemas REST, nossas URIs devem conter apenas substantivos, que são nossos recursos: /restaurante/adiciona não é uma boa URI, pois contém um verbo e não está identificando um recurso, mas sim uma operação.

Para representar a adição de um restaurante podemos usar a URI /restaurante com o método HTTP POST, que representa que estamos adicionando alguma informação no sistema.

### **Operações**

O protocolo HTTP possui operações através de métodos como: GET, POST, PUT e DELETE.

Cada método tem uma semântica diferente e juntando o método à URI deveríamos conseguir representar todas as ações do nosso sistema.

As semânticas principais são:

- GET - recupera informações sobre o recurso identificado pela URI. Ex: listar restaurante, visualizar o restaurante 1. Uma requisição GET não deve modificar nenhum recurso do seu sistema, ou seja, não deve ter nenhum efeito colateral, você apenas recupera informações do sistema.
- POST - adiciona informações usando o recurso da URI passada. Ex: adicionar um restaurante. Pode adicionar informações a um recurso ou criar um novo recurso.
- PUT - adiciona (ou modifica) um recurso na URI passada. Ex: atualizar um restaurante.
- DELETE - remove o recurso representado pela URI passada. Ex: remover um restaurante.

### **Representação**

Quando fazemos uma aplicação não trafegamos um recurso pela rede, apenas uma representação dele. E essa representação pode ser feita de diferentes formas como JSON, XML ou HTML.

### **Conclusão**

Nossas URIs devem representar recursos, as operações no recurso devem ser indicadas pelos métodos HTTP e podemos falar qual é o formato em que conversamos com o servidor com o `Content-Type` e `Accept` que são cabeçalhos do HTTP.

### Tipos de dados

Em alguns cabeçalhos do **HTTP** devemos especificar algum formato. Os formatos são chamados na documentação de **MIME types**. E na definição do cabeçalho usamos a seguinte estrutura: `tipo/subtipo`. São **tipos** conhecidos:

```
text, image, application, audio e video
```

E alguns **subtipos**:

```
text -> text/plain, text/html, text/css, text/javascript
```

```
image -> image/gif, image/png, image/jpeg
```

```
audio -> audio/midi, audio/mpeg, audio/webm, audio/ogg, audio/wav
```

```
video -> video/mp4
```

```
application -> application/xml,  application/pdf
```

<h2 id="http2">HTTP2</h2>

### HTTP2 - Dados binários, GZIP ativo e TLS

Para realizar e depurar uma requisição via CURL podemos simplesmente executar no terminal o seguinte comando:

```
curl -v www.caelum.com.brCOPIAR CÓDIGO
```

Uma saída típica dele seria:

```
Fabios-MacBook-Pro:~ fabiopimentel$ curl -v www.caelum.com.br
* Rebuilt URL to: www.caelum.com.br/
*   Trying 172.217.29.51...
* Connected to www.caelum.com.br (172.217.29.51) port 80 (#0)
> GET / HTTP/1.1
> Host: www.caelum.com.br
> User-Agent: curl/7.49.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Content-Type: text/html; charset=utf-8
< Vary: Accept-Encoding,User-Agent
< Content-Language: pt-br
< Content-Type: text/html;charset=UTF-8
< X-DNS-Prefetch-Control: on
< X-Cloud-Trace-Context: 3e5e270ee3ab1e79f81b10d2cdef53cd
< Date: Fri, 24 Mar 2017 19:20:12 GMT
< Server: Google Frontend
< Content-Length: 95776
<
       <!DOCTYPE html>
    <html class="no-js"lang="pt-br"> <head> <title>Caelum | Cursos de Java, .NET, Android, PHP, Scrum, HTML, CSS e JavaScript </title>
    …
```

Pode-se notar pela saída que temos logo no começo as informações do request efetuado:

```
> GET / HTTP/1.1
> Host: www.caelum.com.br
> User-Agent: curl/7.49.1
> Accept: */*
`
```

E após essas infos temos o cabeçalho da resposta obtida pelo servidor:

```
< HTTP/1.1 200 OK
< Content-Type: text/html; charset=utf-8
< Vary: Accept-Encoding,User-Agent
< Content-Language: pt-br
< Content-Type: text/html;charset=UTF-8
< X-DNS-Prefetch-Control: on
< X-Cloud-Trace-Context: 3e5e270ee3ab1e79f81b10d2cdef53cd
< Date: Fri, 24 Mar 2017 19:20:12 GMT
< Server: Google Frontend
< Content-Length: 95776
```

Logo depois vem o corpo da resposta (HTML da página requisitada):

```
 <!DOCTYPE html> <html class="no-js"lang="pt-br"> <head> <title>Caelum | Cursos de Java, .NET, Android, PHP, Scrum, HTML, CSS e JavaScript </title>  <meta name="viewport"content="width=device-width,initial-scale=1"> <meta name="format-detection"content="telephone=no"> <meta name="referrer"content="origin">   <meta name="description"content="A Caelum tem os cursos de Java, Scrum, Web, Front-end, PHP, .NET e Mobile mais reconhecidos no mercado, com didática diferenciada e instrutores qualificados.">    <link rel="canonical"href="https://www.caelum.com.br/">     <style>.calendario .sem-turmas,.calendario-compacto .mais-turmas,.fm-message.fm-warning{font-style:italic}
```

Em resumo o output apresentando pelo CURL possui essa divisão:

![https://s3.amazonaws.com/caelum-online-public/http/images/08/curl.png](https://s3.amazonaws.com/caelum-online-public/http/images/08/curl.png)

### HTTP/2

O protocolo que estamos trabalhando até agora foi especificado na década de 90 e de lá até hoje muitas alterações foram feitas até na forma como usamos a internet.

Com a chegada do mundo mobile novas preocupações apareceram e otimizações são cada vez mais necessárias para uma boa performance. Por isso uma mudança foi necessária e em 2015 depois de alguns anos de especificações e reuniões surgiu a versão 2 desse protocolo.

A nova versão é batizada de **HTTP/2** e tem como página principal de documentação e referência essa: `https://http2.github.io/`.

A nova versão do protocolo HTTP traz mudanças fundamentais para a Web. Recursos fantásticos que vão melhorar muito a performance da Web além de simplificar a vida dos desenvolvedores.

No HTTP 1.1, para melhorar a performance, habilitamos o **GZIP** no servidor para comprimir os dados das respostas. É uma excelente prática, mas que precisa ser habilitada explicitamente. No HTTP/2, o **GZIP é padrão e obrigatório**.

É como se a gente passasse a ter a resposta assim:

![https://s3.amazonaws.com/caelum-online-public/http/images/08/gzip.png](https://s3.amazonaws.com/caelum-online-public/http/images/08/gzip.png)

Mas, se você já olhou como funciona uma requisição HTTP, vai notar que só GZIPar as respostas resolve só metade do problema. Tanto o `request` quanto o `response` levam vários cabeçalhos (headers) que não são comprimidos no HTTP 1.1 e ainda viajam em texto puro.

Já na nova versão, os headers passam a ser binários:

![https://s3.amazonaws.com/caelum-online-public/http/images/08/binario.png](https://s3.amazonaws.com/caelum-online-public/http/images/08/binario.png)

Além de binários eles são comprimidos usando um algoritmo chamado **HPACK**. Isso diminui bastante o volume de dados trafegados nos headers.

![https://s3.amazonaws.com/caelum-online-public/http/images/08/hpack.png](https://s3.amazonaws.com/caelum-online-public/http/images/08/hpack.png)

Além de todas essas otimizações para melhorar a performance ainda houve uma preocupação com segurança exigindo TLS por padrão também.

![https://s3.amazonaws.com/caelum-online-public/http/images/08/tls.png](https://s3.amazonaws.com/caelum-online-public/http/images/08/tls.png)

### HTTP2 - Cabeçalhos Stateful

Agora, queremos representar uma requisição. No código abaixo, estamos fazendo uma requisição através do método `GET`, que já conhecemos. Essa requisição está sendo feita para a raiz, bem parecido com o que fizemos no `CURL` no vídeo anterior.

```
GET      /

Host: www.caelum.com.br
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:34.0)
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3
Accept-Encoding: gzip, deflate
```

Quando realizamos uma requisição para essa URL via Firefox, por exemplo, o navegador envia alguns cabeçalhos que são padrões. Por exemplo, no cabeçalho `Host`, temos o domínio para onde estamos realizando essa requisição, que é `www.caelum.com.br`. Como estamos realizando um GET para `/`, o path para onde estamos realizando a requisição é `www.caelum.com.br/`.

Além disso, vemos uma informação de `User-Agent`, que é basicamente a fonte dessa requisição, neste caso é o navegador, Mozilla. Quando realizarmos uma requisição pelo `CURL`, aparecerá `CURL`, e se for num Safari, Chrome, qualquer outro navegador, irá aparecer a informação de onde estamos realizando de fato a requisição. Ou seja, nesse cabeçalho a gente especifica quem é o usuário.

Nele também é dito que é aceito, por padrão, o HTML, na linguagem tanto português quanto inglês, e que estamos aceitando uma codificação `GZIP`, já que no HTTP1 podemos especificar que tipo de compressão nossa requisição está aceitando.

### Precisamos repetir os cabeçalhos enviados em uma requisição anterior?

Agora vamos realizar uma outra requisição, mas dessa vez para o arquivo **principal.js**. Então, quando a requisição para página principal foi feita, provavelmente recebemos um HTML, e desse HTML foi necessário realizar uma outra requisição, porque era um recurso importante para a página ser exibida, como por exemplo um arquivo JavaScript.

```
GET       /principal.js

Host: www.caelum.com.br
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:34.0)
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3
Accept-Encoding: gzip, deflate
```

Então, na próxima requisição teremos que enviar novos parâmetros, novos dados. Então, mais uma vez, é uma nova requisição, agora para `/principal.js`, um recurso do nosso sistema. Qual o `Host`? **`www.caelum.com.br`**. Qual o `Agent`? Mozilla, versão 5.0. O que é aceito? qual linguagem é aceita? que tipo de compressão estamos aceitando?

Podemos perceber que o que colocamos nessa segunda requisição é exatamente o mesmo que fizemos na primeira? Os mesmos dados estão sendo trafegados nas duas requisições. Seria ótimo se só trafegássemos isso uma única vez, pois se estamos enviando mais dados, oneramos ainda mais nosso usuário, usando mais banda, deixando essa requisição mais lenta.

Seria muito bom se só pudéssemos ou só tivéssemos que enviar uma única vez, e é exatamente isso que o HTTP2 faz. A partir do HTTP2, não precisamos mais repetir os **`Headers`**, os cabeçalhos que já enviamos em uma requisição anterior. Logo, quando fazemos uma requisição para o **principal.js**, onde teríamos os cabeçalhos exatamente iguais aos da requisição passada, nós não precisamos enviar novamente esses dados.

### Cabeçalhos diferentes

Agora, se temos uma imagem, os cabeçalhos podem mudar, por exemplo, o `Host`, que pode estar especificado na página principal. Logo, na primeira requisição, o conteúdo HTML especificou que tem que buscar uma imagem do Host, que é **`image.caelum.com.br`**, um subdomínio dentro da nossa aplicação. Então, esse cabeçalho terá que ser alterado, logo enviaremos apenas os cabeçalhos que são diferentes.

Isso está especificado no HTTP2, para que uma requisição fique mais leve e não onere tanto o usuário. Isso é conhecido como ***Headers Stateful***.

No início do curso, comentamos que o HTTP era *stateless*, ou seja, ele não guarda informações das requisições passadas. E isso continua valendo, mas no caso dos cabeçalhos, existe um ambiente que guarda estado.

### HTTP2 - Server Push

Temos o cliente e um servidor sendo representados. Podemos imaginar que estamos fazendo uma requisição para uma página principal, a **index.html**. Essa requisição bate no servidor e o servidor nos traz o conteúdo HTML.

![https://s3.amazonaws.com/caelum-online-public/http/images/08/requisicao.png](https://s3.amazonaws.com/caelum-online-public/http/images/08/requisicao.png)

![https://s3.amazonaws.com/caelum-online-public/http/images/08/html-retornado.png](https://s3.amazonaws.com/caelum-online-public/http/images/08/html-retornado.png)

O HTML retornado pode ter o título **Caelum**, e então vai aparecer no nosso navegador essa informação. Além disso, temos um arquivo CSS, de estilização da página, que é o **estilo.css**, e dois arquivos JavaScript necessários para a página ser executada, o **jquery.js** e o **principal.js**. Além disso, no meio do corpo do HTML, tem um recurso que é de imagem, temos a imagem **logo.png**. Mas além desses, podemos ter vários outros recursos na nossa página.

Então, ao receber esse conteúdo, o browser tem que sair fazendo requisições de tudo o que é necessário para que ele renderize a página. O navegador interpreta esse conteúdo HTML de cima pra baixo, verifica que o primeiro recurso necessário é o **estilo.css**, aí ele vai lá buscar. O segundo recurso necessário, **jquery.js**, que é uma biblioteca JavaScript. E além disso, precisamos do `principal.js` e do `logo.png`:

![https://s3.amazonaws.com/caelum-online-public/http/images/08/mais-requisicoes.png](https://s3.amazonaws.com/caelum-online-public/http/images/08/mais-requisicoes.png)

Todos esses recursos especificados no HTML são novas requisições que o browser precisa fazer, e nosso cliente precisa executar. O servidor vai recebendo essas requisições, mas o cliente fica ali esperando até que essas respostas cheguem e o nosso browser consiga de fato renderizar o conteúdo para o usuário. Então há uma espera até essas respostas chegarem de fato, pois o servidor devolve as respostas das requisições na mesma sequência que foram geradas.

A partir do HTTP2, isso ficou um pouco diferente. Agora temos uma conversa mais paralela. Anteriormente estávamos trabalhando com conceitos de requisições seriais, fazíamos uma requisição e esperávamos receber, fazíamos outra requisição e esperávamos receber e por aí vai. No HTTP2, quando o cliente realiza uma requisição para **index.html*, o servidor devolve a página, mas ele já pode passar para o browser as informações necessárias para que essa página possa ser, de fato, exibida. Ou seja, ele consegue dar um passo além:

![https://s3.amazonaws.com/caelum-online-public/http/http2-push.png](https://s3.amazonaws.com/caelum-online-public/http/http2-push.png)

Isso é uma outra abordagem que surgiu no HTTP2, muito mais interessante. Mas quando o browser for interpretar essa página HTML, vai ter que passar pelo conteúdo que especifica o arquivo CSS? Sim, mas quando ele passar pelo **estilo.css**, vai verificar que já recebeu. Ou seja, ele percebe que já recebeu essas informações.

Este é o conceito de ***Server Push***, ou seja, o ***server*** envia dados para o cliente sem que o cliente tenha solicitado, tornando o tráfego de dados muito mais otimizado.

### HTTP2 - Multiplexação

Outra coisa importante de requisição é que temos o conceito de **`request`** e **`response`**. Cada requisição e cada resposta no HTTP1.1 são únicos.

“Por baixo dos panos”, antes dessa requisição de fato ser feita, há uma conexão, comunicação entre cliente e servidor, que chamamos de **TCP**. Para que consigamos realizar uma requisição via HTTP, antes existe um modelo de TCP, que é um protocolo de transporte. Isso é mais a nível de infraestrutura, pois quando trabalhamos com desenvolvimento, acabamos deixando isso pra lá, já que ficamos na camada acima dessa conexão.

Queremos mostrar é que quando fazemos uma requisição, ela é única. No HTTP, cada requisição deveria abrir uma conexão TCP, executar e fechar.

Mas isso seria muito ruim porque conexão TCP é recurso caro, é um recurso que demora a ser alocado. Claro que é muito rápido a nível computacional, mas é mais um passo antes da requisição HTTP prosseguir e recebermos uma resposta.

Então o que acontece, no HTTP1 existe um mecanismo chamado de **`Keep-Alive`**. O **`Keep-Alive`** determina quanto tempo, por exemplo, a nossa conexão pode ficar ativa. Ou seja, não encerra essa conexão TCP. Portanto, conseguimos realizar várias requisições com a mesma conexão TCP.

Hoje, na maioria dos browsers, temos um número entre 4 e 8 de conexões simultâneas por domínio. Significa que se fizermos uma requisição para a página da Caelum e a página da Caelum tiver mil recursos, o browser tem 4 a 8 conexões TCP ativas para conseguir realizar essas requisições em paralelo, e não serial. Mas isso na versão 1.1.

### Keep-Alive no HTTP2

O `Keep-Alive` continua existindo no HTTP2, só que ele trouxe uma novidade. Por exemplo, se temos uma conexão TCP aberta e realizamos uma requisição, poderíamos já dar prosseguimento às próximas requisições, isso em paralelo, sem de fato ficar esperando o resultado dela, de maneira assíncrona, e vamos recebendo essas respostas à medida em que o servidor for conseguindo processar.

Na imagem abaixo, fizemos a requisição 1 e requisição 2, quando íamos fazer requisição 3, já recebemos uma resposta:

![https://s3.amazonaws.com/caelum-online-public/http/images/08/keep-alive-http2.png](https://s3.amazonaws.com/caelum-online-public/http/images/08/keep-alive-http2.png)

Então, essas requisições e respostas vão chegando a todo tempo. É totalmente paralelo. A mesma coisa acontece com o servidor, não precisamos esperar uma resposta para enviar outra. Se já está pronta para ser enviada, ele já envia diretamente.

Esse conceito que surgiu no HTTP2 é chamado de ***Multiplexing*** e traz uma performance bastante relevante para o nosso HTTP.