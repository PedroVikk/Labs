# LAB-04 - Sistema de Gerenciamento de Biblioteca

Sistema de gerenciamento de biblioteca desenvolvido em **TypeScript** com aplicação de conceitos de **Programação Orientada a Objetos**.

## 📋 Descrição do Projeto

Este projeto implementa um sistema completo de gerenciamento de biblioteca com as seguintes funcionalidades:

- **Cadastro de livros** no acervo
- **Registro de empréstimos** e devoluções
- **Consulta de disponibilidade** de livros
- **Tratamento de erros** com mensagens descritivas
- **Estatísticas** do acervo

## 🏗️ Estrutura do Projeto

```
LAB-04/
├── src/
│   ├── Livro.ts           # Classe que representa um livro
│   ├── Biblioteca.ts      # Classe que gerencia o acervo
│   └── index.ts           # Arquivo principal com exemplos de uso
├── dist/                  # Código compilado (gerado)
├── package.json           # Dependências do projeto
├── tsconfig.json          # Configuração do TypeScript
└── README.md              # Este arquivo
```

## 💻 Requisitos

- **Node.js** 14+ (https://nodejs.org/)
- **npm** (incluso com Node.js)
- **TypeScript** (será instalado automaticamente)

## 🚀 Como executar

### 1. Instalar dependências

```bash
cd LAB-04
npm install
```

### 2. Compilar o código TypeScript

```bash
npm run build
```

### 3. Executar o programa

```bash
npm start
```

### Alternativa: Executar diretamente sem compilar

```bash
npm run dev
```

## 📦 Classes principais

### Classe `Livro`

Representa um livro no acervo da biblioteca.

**Atributos (privados):**
- `codigo: number` - Identificador único do livro
- `titulo: string` - Título do livro
- `autor: string` - Autor do livro
- `disponivel: boolean` - Status de disponibilidade

**Métodos públicos:**
- `getCodigo()` - Retorna o código do livro
- `getTitulo()` - Retorna o título do livro
- `getAutor()` - Retorna o autor do livro
- `isDisponivel()` - Verifica se está disponível
- `emprestar()` - Marca como emprestado
- `devolver()` - Marca como disponível

### Classe `Biblioteca`

Gerencia o acervo de livros.

**Atributo (privado):**
- `acervo: Livro[]` - Array de livros cadastrados

**Métodos públicos:**
- `adicionarLivro(livro: Livro)` - Adiciona um livro ao acervo
- `registrarEmprestimo(codigo: number)` - Registra empréstimo de um livro
- `registrarDevolucao(codigo: number)` - Registra devolução de um livro
- `consultarDisponibilidade(codigo: number)` - Verifica disponibilidade
- `listarAcervo()` - Exibe todos os livros
- `getTotalLivros()` - Retorna total de livros
- `getTotalDisponivel()` - Retorna total disponível
- `getTotalEmprestados()` - Retorna total emprestado

## 🔍 Funcionalidades Implementadas

✅ **Encapsulamento**: Atributos privados com getters/setters

✅ **Tipagem explícita**: Todo o código usa tipos TypeScript

✅ **Tratamento de erros**: Validações e mensagens descritivas

✅ **Reutilização de código**: Método privado `encontrarLivro()`

✅ **Documentação**: Comentários JSDoc em todas as classes e métodos

## 📝 Exemplo de uso

```typescript
// Criar biblioteca
const biblioteca = new Biblioteca();

// Criar livros
const livro1 = new Livro(1, "Clean Code", "Robert C. Martin");
const livro2 = new Livro(2, "Design Patterns", "Gang of Four");

// Adicionar ao acervo
biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);

// Consultar disponibilidade
const disponivel = biblioteca.consultarDisponibilidade(1);
console.log(`Livro 1 disponível: ${disponivel}`); // true

// Registrar empréstimo
biblioteca.registrarEmprestimo(1);

// Verificar novamente
const disponivel2 = biblioteca.consultarDisponibilidade(1);
console.log(`Livro 1 disponível: ${disponivel2}`); // false

// Registrar devolução
biblioteca.registrarDevolucao(1);
```

## ⚠️ Tratamento de Erros

O sistema trata os seguintes cenários de erro:

- Livro com código duplicado
- Livro não encontrado no acervo
- Empréstimo de livro já emprestado
- Devolução de livro já disponível

Todos os erros geram exceções com mensagens descritivas.

## 🎯 Conceitos OOP Aplicados

- **Encapsulamento**: Atributos privados e métodos de acesso controlado
- **Reutilização**: Método `encontrarLivro()` utilizado por vários métodos
- **Validação**: Verificação de estado antes de operações
- **Responsabilidade Única**: Cada classe tem sua responsabilidade clara

## 📂 Saída esperada ao executar

O programa exibe:
- Lista inicial de livros adicionados
- Estatísticas (total, disponíveis, emprestados)
- Consulta de disponibilidade
- Registro de empréstimo
- Teste de erros
- Registro de devolução
- Estatísticas finais

## ✨ Melhorias futuras

- Persistência em banco de dados
- Sistema de multas por atraso
- Reserva de livros
- Histórico de empréstimos
- Interface gráfica (CLI ou Web)

## 📄 Licença

ISC
