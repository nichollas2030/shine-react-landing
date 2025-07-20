# TC Shine Cleaning - Landing Page

Landing page para serviços de limpeza residencial premium na Flórida.

## Sobre o Projeto

Este projeto é uma landing page moderna e responsiva para a TC Shine Cleaning, empresa especializada em limpeza residencial premium atendendo famílias ocupadas e propriedades Airbnb de Miami até West Palm Beach.

## Como executar o projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

```sh
# 1. Clone o repositório
git clone <URL_DO_REPOSITORIO>

# 2. Navegue até o diretório do projeto
cd shine-react-landing

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

O projeto será executado em `http://localhost:8080`

### Scripts disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run build:dev` - Cria a versão de desenvolvimento
- `npm run preview` - Preview da versão de produção
- `npm run lint` - Executa o linting do código

## Tecnologias utilizadas

- **Vite** - Build tool e dev server
- **React** - Biblioteca JavaScript para UI
- **TypeScript** - Linguagem com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI reutilizáveis
- **Framer Motion** - Biblioteca para animações
- **React Router** - Roteamento
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de esquemas

## Estrutura do projeto

```
src/
├── components/         # Componentes React
│   ├── content/       # Conteúdo das seções
│   ├── layout/        # Componentes de layout
│   ├── sections/      # Seções da página
│   └── ui/           # Componentes de UI reutilizáveis
├── hooks/             # Custom hooks
├── lib/               # Utilitários e configurações
├── pages/             # Páginas da aplicação
└── types/             # Definições de tipos TypeScript
```

## Deploy

Para fazer deploy do projeto:

1. Execute `npm run build` para gerar os arquivos de produção
2. Os arquivos estarão na pasta `dist/`
3. Faça upload dos arquivos para seu servidor web ou serviço de hosting

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request
