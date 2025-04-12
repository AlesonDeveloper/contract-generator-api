# Usando node LTS
FROM node:18

# Diretório de trabalho
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia restante dos arquivos
COPY . .

# Expõe a porta
EXPOSE 3000

# Inicia a aplicação
CMD ["node", "server.js"]