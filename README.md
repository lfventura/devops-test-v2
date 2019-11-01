
## Cuidado!
Não precisa fazer tudo. Mas faça tudo que conseguir bem feito.

### Prazo de entrega e formato do arquivo:
Você tem 7 dias para enviar o código alterado. Caso o tempo não seja suficiente, nos comunique o quanto antes. Entendemos que imprevistos acontecem, a ideia é a avaliar o nível técnico, não se você conseguiu terminar no prazo estipulado.

Enviar por e-mail uma cópia do repositório em Git bundle (https://git-scm.com/docs/git-bundle) ex: `git bundle create devops-test.bundle --all`

## Pré-requisitos
* Vagrant 2.2+
* Ansible 2.8+
* VirtualBox 6.0+

## Como iniciar
```
$ vagrant plugin install vagrant-vbguest
$ vagrant up --provision
```
**ATENÇÃO - O comando vagrant up irá inserir o nome de cada instância em seu arquivo hosts, em alguns casos isso não é possivel por falta de permissões adequadas, nesse caso você deve inserir as seguintes linhas manualmente.**

```
10.12.0.10  jenkins.local
10.12.0.11  docker.local
10.12.0.12  publisher.local
```

Você deve explicitar o inventário em qualquer chamada do ansible, por exemplo:
```
ansible-playbook jenkins.yml -i inventory
```
**DICA - Use o comando `make run` para executar todos os playbooks**

## Tarefas
* Existe um ou mais erros nos playbooks do ansible, você deve corrigir para que o playbook rode por completo.
* Crie uma role que seja capaz de criar usuários com authenticação por chave pública. Está role deve criar os usuários `dev1` e `dev2`. As chaves públicas de cada usuário pode ser encontrada em `pubkeys`.
* Automatize a configuração do jenkins-ci no host jenkins.local.
* Configure o nginx para fazer proxy para o jenkins-ci, todo o trafego deve ser HTTPS.
* No diretório `apps/nodeapp` você deve encontrar uma aplicação em NodeJS, faça o necessário para que essa aplicação funcione com Docker, consulte `apps/nodeapp/README.md`.
* Automatize uma pipeline para fazer deploy do Docker criado no host docker.local.
* Existe um serviço `publisher` configurado no host `publisher.local`, mas constantemente esse serviço morre, diagnostique/corriga a causa raiz desse problema.
* Escreva testes para as roles do ansible criadas até agora.

**O código da aplicação estará disponível no diretório /data/apps dentro em cada VM**

## Questões
1. Suponha que a aplicação web já está rodando a um tempo e começou a receber um grande volume de tráfego. Que técnicas você aplicaria para garantir a performance do site?
2. O log da aplicação é enviado para stdout. Qual seria a melhor forma para receber esse log em um syslog server?
3. Explique brevemente: Como você faria para promover o código do ambiente de DEV até produção? Quantos ambientes você acha necessário e qual processo faria para a promoção entre os ambientes?
4. O que é CI? O que é CD? Quais ferramentas você conhece?
5. Descreva o que seria o ideal em sua opnião referente a monitoramento do site que acabamos de subir. O que devemos monitorar e quais ferramentas poderiam ser utilizadas?
6. Qual é a relevância de uma entrada PTR no DNS?
7. Com quais Nuvens publicas você já trabalhou?
