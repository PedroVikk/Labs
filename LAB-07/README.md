# Sistema de Gestão de Tarefas - TypeScript

Um sistema completo de gestão de tarefas desenvolvido em **TypeScript**, demonstrando boas práticas de programação orientada a objetos, encapsulamento e tratamento de erros.

## 📋 Funcionalidades

- ✅ Criar e adicionar tarefas
- ✅ Atualizar status de tarefas
- ✅ Consultar tarefas por projeto
- ✅ Listar todas as tarefas
- ✅ Remover tarefas
- ✅ Tratamento robusto de erros
- ✅ Tipagem explícita em TypeScript

## 🏗️ Estrutura do Projeto

```
LAB-07/
├── src/
│   ├── Tarefa.ts          # Classe que representa uma tarefa
│   ├── GestorTarefas.ts   # Classe gestora de tarefas
│   └── index.ts           # Arquivo principal (ponto de entrada)
├── dist/                  # Arquivo compilado (gerado após build)
├── package.json           # Dependências do projeto
├── tsconfig.json          # Configuração do TypeScript
└── README.md              # Este arquivo
```

## 📦 Classes Principais

### Classe `Tarefa`

Representa uma tarefa individual no sistema.

**Atributos (privados):**
- `id: number` - Identificador único da tarefa
- `descricao: string` - Descrição da tarefa
- `status: string` - Status atual (pendente, em progresso, concluída)
- `projeto: string` - Projeto ao qual a tarefa pertence

**Métodos:**
- `constructor(id, descricao, status, projeto)` - Inicializa a tarefa
- `getId()` - Retorna o ID da tarefa
- `getDescricao()` - Retorna a descrição
- `getStatus()` - Retorna o status
- `getProjeto()` - Retorna o projeto
- `setStatus(novoStatus)` - Atualiza o status
- `toString()` - Retorna representação em texto

### Classe `GestorTarefas`

Gerencia todas as tarefas do sistema.

**Atributos (privados):**
- `tarefas: Tarefa[]` - Array privado de tarefas

**Métodos públicos:**
- `adicionarTarefa(tarefa)` - Adiciona uma nova tarefa
- `atualizarStatus(id, status)` - Atualiza o status de uma tarefa
- `consultarTarefasPorProjeto(projeto)` - Retorna tarefas de um projeto
- `obterTodasTarefas()` - Retorna todas as tarefas
- `getTotalTarefas()` - Retorna o número total de tarefas
- `removerTarefa(id)` - Remove uma tarefa pelo ID

## 🚀 Como Executar

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:
- **Node.js** (versão 16 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

### Instalação

1. Navegue até a pasta do projeto:
```bash
cd LAB-07
```

2. Instale as dependências:
```bash
npm install
```

### Compilação e Execução

**Opção 1: Compilar e executar em um comando**
```bash
npm start
```

**Opção 2: Compilar manualmente**
```bash
npm run build
```

Depois execute:
```bash
node dist/index.js
```

**Opção 3: Modo desenvolvimento (watch)**
```bash
npm run dev
```

## 📝 Exemplo de Saída

```
==== SISTEMA DE GESTÃO DE TAREFAS ====

1. ADICIONANDO TAREFAS AO SISTEMA:

✓ Tarefa 1 adicionada
✓ Tarefa 2 adicionada
✓ Tarefa 3 adicionada
✓ Tarefa 4 adicionada
✓ Tarefa 5 adicionada

Total de tarefas: 5

2. LISTANDO TODAS AS TAREFAS:

   ID: 1 | Descrição: Implementar autenticação | Status: em progresso | Projeto: Website
   ID: 2 | Descrição: Corrigir bug de login | Status: concluída | Projeto: Website
   ID: 3 | Descrição: Documentar API | Status: pendente | Projeto: Backend
   ID: 4 | Descrição: Criar dashboard de analytics | Status: em progresso | Projeto: Dashboard
   ID: 5 | Descrição: Testes unitários | Status: pendente | Projeto: Backend

3. ATUALIZANDO STATUS DA TAREFA:

Atualizando Tarefa ID 1 para status "concluída"...
✓ Status atualizado com sucesso

4. CONSULTANDO TAREFAS POR PROJETO:

   Tarefas do projeto "Website":
   - ID: 1 | Descrição: Implementar autenticação | Status: concluída | Projeto: Website
   - ID: 2 | Descrição: Corrigir bug de login | Status: concluída | Projeto: Website

   Tarefas do projeto "Backend":
   - ID: 3 | Descrição: Documentar API | Status: pendente | Projeto: Backend
   - ID: 5 | Descrição: Testes unitários | Status: pendente | Projeto: Backend

   Tarefas do projeto "Dashboard":
   - ID: 4 | Descrição: Criar dashboard de analytics | Status: em progresso | Projeto: Dashboard

5. DEMONSTRANDO TRATAMENTO DE ERROS:

Tentando adicionar tarefa com ID duplicado...
   ✗ Erro capturado: Tarefa com ID 1 já existe

Tentando atualizar tarefa que não existe (ID 999)...
   ✗ Erro capturado: Tarefa com ID 999 não encontrada

Tentando consultar projeto com string vazia...
   ✗ Erro capturado: Projeto não pode estar vazio

6. RESUMO FINAL:

Total de tarefas no sistema: 5

==== FIM DO PROGRAMA ====
```

## 🔒 Recursos de Segurança e Qualidade

### Encapsulamento
- Todos os atributos das classes são **privados** (`private`)
- Acesso controlado via métodos públicos (getters e setters)
- Validação de dados antes de modificações

### Tratamento de Erros
- Validação de entrada (null checks, strings vazias)
- Mensagens de erro descritivas
- Exceções lançadas para operações inválidas

### Tipagem em TypeScript
- Tipagem explícita em todos os parâmetros
- Tipagem de retorno nos métodos
- Modo `strict` ativado no `tsconfig.json`

## 🧪 Casos de Uso Demonstrados

O arquivo `index.ts` demonstra:

1. **Criação e adição de tarefas** - 5 tarefas diferentes
2. **Listagem de tarefas** - Visualizar todas as tarefas
3. **Atualização de status** - Mudar status de uma tarefa
4. **Consulta por projeto** - Filtrar tarefas por projeto específico
5. **Tratamento de erros** - Operações inválidas são capturadas e reportadas

## 📚 Conceitos TypeScript Utilizados

- **Classes e Construtores** - Estrutura básica orientada a objetos
- **Modificadores de Acesso** - `public` e `private`
- **Getters e Setters** - Acesso controlado aos atributos
- **Tipagem Explícita** - Tipos primitivos e customizados
- **Métodos de Array** - `find()`, `filter()`, `some()`, `splice()`
- **Tratamento de Exceções** - Try/catch com `throw new Error()`
- **Templates Strings** - Interpolação de strings com backticks

## 🛠️ Recursos Adicionais

### Limpar arquivos compilados
```bash
npm run clean
```

### Estrutura de Compilação

Os arquivos TypeScript (`.ts`) são compilados para JavaScript (`.js`) na pasta `dist/`. A configuração do `tsconfig.json` garante:

- **Target ES2020** - Compatibilidade com versões modernas do Node.js
- **Strict Mode** - Verificações rigorosas de tipo
- **Source Maps** - Facilita debug dos arquivos originais
- **Declaration Files** - Gera arquivos `.d.ts` para tipagem

## 📝 Notas Importantes

- O sistema valida **IDs únicos** - não é possível adicionar duas tarefas com o mesmo ID
- As consultas por projeto são **case-insensitive** (maiúsculas/minúsculas não importam)
- Todas as operações que falham lançam exceções descritivas
- O `GestorTarefas` encapsula completamente o array de tarefas (privado)

## ✨ Melhorias Futuras

- Persistência em banco de dados
- Sistema de prioridades
- Datas de vencimento
- Atribuição de responsáveis
- Interface gráfica web
- Testes automatizados

---

**Desenvolvido em TypeScript** | **Boas práticas de POO** | **Encapsulamento forte**
