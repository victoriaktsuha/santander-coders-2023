# Curso digital: Git

# Comandos Git

- git init = transforma pasta atual em repositório
- git config --global = configura a conta do git/github para toda a máquina
- git status = mostra a branch, o status da branch em relação a origin e o status dos arquivos
- git add .\caminho\nomedoarquivo = adiciona modificação ao staging
- git diff = mostra as modificações e as linhas que foram modificadas enquanto o arquvio não esta em 'staged'
- git diff -- staged = mostra as modificações e as linhas que foram modificadas dos arquivos em staged
- git commit -m "Descrição das alterações" = para commitar os arquivos em staged

# Classificação de arquivos Git

untracked => unmodified => modified => staged => unmodified <=

untracked - add the file (arquivo novo)
unmodified - edit the file (arquivo já mapeado/salvo, já foi pra staging e foi 'commitado' e pode ser editado)
modified - stage the file (arquivo modificado, diferente do original/salvo quando comparado e poder ser enviado para 'staged')
staged - commit (arquivos prontos para serem 'commitados' e salvos); A partir daqui os arquivos 'ficam' no estágio 'unmodified'
