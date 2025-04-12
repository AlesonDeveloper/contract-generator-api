# 🚀 Contract Generator API

API profissional para geração dinâmica de contratos PDF a partir de templates HTML, com suporte para marca d'água, validação dinâmica via Yup e documentação Swagger automática.

✅ **Funcionalidades incluídas:**
- ✅ Templates dinâmicos e expansíveis
- ✅ API Key Authentication
- ✅ Rate Limiting para segurança
- ✅ Validação de payload dinâmica por template
- ✅ Documentação automática Swagger
- ✅ Dockerfile + docker-compose pronto
- ✅ Logs estruturados com Winston
- ✅ Healthcheck (`/health`)

---

## 🧩 Sumário

- [📦 Instalação](#instalação)
- [🚀 Executando a API](#executando-a-api)
- [🛠️ Uso](#uso)
- [🔒 Segurança](#segurança)
- [🧩 Documentação Swagger](#documentação-swagger)
- [💚 Health Check](#health-check)
- [📂 Estrutura de pastas](#estrutura-de-pastas)
- [🤝 Contribuição](#contribuição)
- [📄 Licença](#licença)

---

## 📦 Instalação

### 📥 Clonando o projeto

```bash
git clone seu-repo-url.git
cd contract-generator-api
```

### 📥 Instalando as dependências

```bash
npm install
```

### 📄 Crie o arquivo `.env` na raiz do projeto:

```env
API_KEY=sua-chave-secreta
PORT=3000
```

---

## 🚀 Executando a API

### 🔥 Local

```bash
npm run dev
```

### 🐳 Docker

```bash
docker-compose up --build
```

---

## 🛠️ Uso

Você pode fazer requisições para o endpoint principal:

### **Gerar Contrato PDF**
```
POST /api/generate-contract/:templateName
```

### Headers:
```
x-api-key: sua-chave-secreta
Content-Type: application/json
```

### Body Exemplo (para o template `membership-agreement`):
```json
{
  "name": "João Silva",
  "cpf": "123.456.789-00",
  "thirdPartyCompanyName": "Empresa XYZ",
  "thirdPartyCompanyCnpj": "12.345.678/0001-99",
  "thirdPartyCompanyCity": "São Paulo",
  "thirdPartyCompanyState": "SP",
  "thirdPartyCompanyAddress": "Rua Exemplo, 123",
  "assetSigla": "ASSET",
  "contractCity": "São Paulo",
  "contractDate": "01/01/2025",
  "signatureName": "João Silva"
}
```

> 🎯 Observação: o `:templateName` no endpoint é dinâmico.  
> Ele define qual template será usado e também qual schema Yup será aplicado para validar os campos enviados!

---

## 🔒 Segurança

- ✅ **API Key:** todas as requisições precisam do cabeçalho `x-api-key`.
- ✅ **Rate Limit:** proteção contra abuso de requisições.
- ✅ **Validation Yup:** cada template possui seu próprio schema de validação, garantindo que o payload esteja correto.

---

## 🧩 Documentação Swagger

Acesse:

```
http://localhost:4004/docs
```

Lá você verá todos os endpoints documentados automaticamente.

> ⚠️ Se criar novos templates, a documentação será atualizada automaticamente conforme o registry.

---

## 💚 Health Check

Verifique se a API está online:

```
GET /health
```

Resposta:
```json
{
  "status": "ok",
  "uptime": "34.512s"
}
```

---

## 🗂️ Estrutura de Pastas

```
.
├── src
│   ├── config
│   │   ├── logger.js
│   │   └── swagger.js
│   ├── controllers
│   │   └── contract.controller.js
│   ├── interfaces
│   │   └── fileSystemProvider.interface.js
│   ├── providers
│   │   └── fileSystemProvider.js
│   ├── routes
│   │   ├── contract.routes.js
│   │   └── health.routes.js
│   ├── services
│   │   └── contract.service.js
│   ├── middlewares
│   │   ├── apiKey.middleware.js
│   │   ├── rateLimit.middleware.js
│   │   └── requestLogger.middleware.js
│   │   └── validateFields.middleware
│   ├── templates
│   │   ├── adhesion-contract.html
│   │   └── logo.png
│   ├── utils
│   │   ├── appError.js
│   │   └── errorHandler.js
│   ├── schema
│   │   └── adhesion-contract.schema.js
│   └── registry
│       └── templateRegistry.js
├── .env.example
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
├── README.md
├── app.js
└── server.js
```

---

## 🪪 Licença

Este projeto está sob a licença MIT.

---

## 🚀 Extras

- 🧩 Fácil expansão de templates
- 📄 Documentação automática
- 🌐 Health check incluído
- 🛡️ Rate limit e API key de segurança
- 🪄 Estrutura pronta para deploy com Docker

---