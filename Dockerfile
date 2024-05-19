# Use uma imagem base do Node.js
FROM node:latest

# Defina a variável de ambiente para pular o download do Chromium
ENV PUPPETEER_SKIP_DOWNLOAD true

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /home/docker

# Copie o arquivo package.json separadamente e instale as dependências
COPY package.json .

# Instale as dependências do projeto Node.js
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Comando para iniciar sua aplicação (substitua pelo comando real, se aplicável)
CMD ["npm", "start"]
