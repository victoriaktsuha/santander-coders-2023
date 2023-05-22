# Curso digital: Git

## Comandos Git

- git init = transforma pasta atual em repositório
- git config --global = configura a conta do git/github para toda a máquina
- git status = mostra a branch, o status da branch em relação a origin e o status dos arquivos
- git add .\caminho\nomedoarquivo = adiciona modificação ao staging
- git diff = mostra as modificações e as linhas que foram modificadas enquanto o arquivo não esta em 'staged'
- git diff -- staged = mostra as modificações e as linhas que foram modificadas dos arquivos em staged
- git restore .\caminho\nomedoarquivo = altera o arquivo indicado para o contéudo anterior a modificação (unmodified <= modified (changed))
- git restore --staged .\caminho\nomedoarquivo = retorna o arquivo em staged para modified (changed) sem perder as alterações (modified (changed) <= staged)
- git commit -m "Descrição das alterações" = para commitar os arquivos em staged
- git log = exibe o histórico dos últimos commits
- git remote = exibe os repositórios remotos (origin)
- git push nomedorepositorioremoto nomedabranchfinal (e.g. git push origin master) = envia todos os commits feitos localmente (origin) para a branch 'master', aquela que armazena todos os originais/unmodified
- git fetch = 'puxa' e exibe todos as atualizações da master (remoto) e que não existem na origin (local) SEM adicionar direto no projeto local, permitindo que as atualizações sejam analisadas antes de acontecer o 'merge' => Após esse comando, pode ser rodado "git diff origin/master" para comparar as atualizações baixadas da master com os arquivos da origin; Sendo aprovadas, pode ser feito o 'git pull'
- git pull = 'puxa' todas as alterações feitas em outra maquina e/ou por outra pessoa, fazedno já um merge local e atualizando o repositório local com as mesmas informações incluidas na master
- git branch = lista a branch existentes e indica a branch atual
- git branch nomedabranch = cria uma nova branch
- git log --oneline --decorate = indica o histórico (por ser um log) e para que branch o HEAD está apontando, pode ajudar a identificar a branch caso esteja utilizando o command line
- git checkout nomedabranch = acessa a branch
- git merge nomedabranch = Estando na branch que vai RECEBER atualização (master, na maioria das vezes), executar 'git merge' indicando o nome da branch que vai PASSAR as atualizações

## Classificação de arquivos Git

untracked => unmodified => modified (changed) => staged => unmodified <=

untracked - add the file (arquivo novo)
unmodified - edit the file (arquivo já mapeado/salvo, já foi pra staging e foi 'commitado' e pode ser editado)
modified - stage the file (arquivo modificado, diferente do original/salvo quando comparado e poder ser enviado para 'staged')
staged - commit (arquivos prontos para serem 'commitados' e salvos); A partir daqui os arquivos 'ficam' no estágio 'unmodified'

## Git ≠ GitHub

- Git - Terminal + comandos para versionar
- GitHub - Plataforma de hospedagem e versionamento

## Branchs

Desenvolvimentos em paralelo (repositórios locais em branch diferentes) para posteriormente ter um 'merge' de ambos os códigos (master)

## Merge
