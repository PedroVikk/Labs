# Sistema de Gerenciamento de Funcionários

Um sistema completo em TypeScript para gerenciar funcionários de uma empresa, implementando conceitos de orientação a objetos como encapsulamento, tipagem explícita e tratamento de erros.

## Características

✓ **Classe Funcionario**: Representa um funcionário com matrícula, nome, cargo e salário
✓ **Classe Empresa**: Gerencia uma coleção de funcionários
✓ **Encapsulamento**: Uso de modificadores private e public
✓ **Tipagem Explícita**: TypeScript com tipos definidos
✓ **Tratamento de Erros**: Validações e mensagens de erro claras
✓ **Funcionalidades Completas**:
  - Adicionar funcionários
  - Atualizar salários
  - Consultar funcionários
  - Listar todos os funcionários
  - Remover funcionários
  - Calcular folha de pagamento
  - Exibir resumo da empresa

## Estrutura do Projeto

```
LAB-05/
├── src/
│   ├── Funcionario.ts    # Classe que representa um funcionário
│   ├── Empresa.ts        # Classe que gerencia funcionários
│   └── index.ts          # Arquivo principal com exemplos de uso
├── dist/                 # Arquivos compilados (gerado após build)
├── package.json          # Dependências do projeto
├── tsconfig.json         # Configuração do TypeScript
└── README.md             # Este arquivo
```

## Requisitos

- Node.js v14+
- npm v6+

## Instalação

```bash
# Clonar ou navegar para o diretório
cd LAB-05

# Instalar dependências
npm install
```

## Como Executar

### Opção 1: Compilar e Executar

```bash
# Compilar o TypeScript para JavaScript
npm run build

# Executar o arquivo compilado
npm start
```

### Opção 2: Executar Diretamente (com ts-node)

```bash
npm run dev
```

## Exemplo de Saída

```
========== SISTEMA DE GERENCIAMENTO DE FUNCIONÁRIOS ==========

✓ Empresa criada com sucesso

--- Criando Funcionários ---
✓ Funcionário João Silva adicionado com sucesso
✓ Funcionário Maria Santos adicionado com sucesso
✓ Funcionário Carlos Oliveira adicionado com sucesso

==================================================
Empresa: Tech Solutions Ltda
Total de Funcionários: 3
Folha de Pagamento: R$ 18.000,00
==================================================

--- Listagem de Funcionários ---
Funcionário:
  Matrícula: 1001
  Nome: João Silva
  Cargo: Desenvolvedor
  Salário: R$ 5.000,00

Funcionário:
  Matrícula: 1002
  Nome: Maria Santos
  Cargo: Gerente de Projetos
  Salário: R$ 7.500,00

Funcionário:
  Matrícula: 1003
  Nome: Carlos Oliveira
  Cargo: Analista de TI
  Salário: R$ 5.500,00

--- Consultando Funcionário ---
Funcionário:
  Matrícula: 1002
  Nome: Maria Santos
  Cargo: Gerente de Projetos
  Salário: R$ 7.500,00

--- Atualizando Salário ---
✓ Salário de João Silva atualizado de R$ 5.000,00 para R$ 5.500,00

==================================================
Empresa: Tech Solutions Ltda
Total de Funcionários: 3
Folha de Pagamento: R$ 18.500,00
==================================================

--- Removendo Funcionário ---
✓ Funcionário Carlos Oliveira removido com sucesso

==================================================
Empresa: Tech Solutions Ltda
Total de Funcionários: 2
Folha de Pagamento: R$ 13.000,00
==================================================

========== FIM DA EXECUÇÃO ==========
```

## Descrição das Classes

### Classe `Funcionario`

Representa um funcionário da empresa com os seguintes atributos:

- `matricula: number` - Identificador único do funcionário
- `nome: string` - Nome completo
- `cargo: string` - Cargo/posição
- `salario: number` - Salário mensal

**Métodos:**
- `constructor(matricula, nome, cargo, salario)` - Inicializa o funcionário
- `getMatricula(): number` - Retorna a matrícula
- `getNome(): string` - Retorna o nome
- `getCargo(): string` - Retorna o cargo
- `getSalario(): number` - Retorna o salário
- `setSalario(novoSalario): void` - Atualiza o salário
- `toString(): string` - Retorna uma representação textual

**Validações:**
- Matrícula deve ser positiva
- Nome não pode ser vazio
- Cargo não pode ser vazio
- Salário deve ser positivo

### Classe `Empresa`

Gerencia um conjunto de funcionários:

- `funcionarios: Funcionario[]` (privado) - Array de funcionários
- `nome: string` - Nome da empresa

**Métodos:**
- `constructor(nome)` - Inicializa a empresa
- `adicionarFuncionario(funcionario): void` - Adiciona um novo funcionário
- `atualizarSalario(matricula, novoSalario): void` - Atualiza salário
- `consultarFuncionario(matricula): Funcionario | undefined` - Consulta um funcionário
- `listarFuncionarios(): Funcionario[]` - Retorna todos os funcionários
- `getTotalFuncionarios(): number` - Retorna quantidade total
- `calcularFolhaPagamento(): number` - Calcula total da folha
- `removerFuncionario(matricula): void` - Remove um funcionário
- `exibirResumo(): void` - Exibe resumo da empresa

**Validações:**
- Evita adicionar funcionários com mesma matrícula
- Verifica existência antes de atualizar ou remover
- Valida entrada de dados

## Tratamento de Erros

O sistema implementa tratamento robusto de erros:

```typescript
try {
  // Operações
} catch (erro) {
  if (erro instanceof Error) {
    console.error(`✗ Erro: ${erro.message}`);
  }
}
```

### Erros Comuns

- **"Já existe funcionário com a matrícula X"** - Tentativa de adicionar matrícula duplicada
- **"Funcionário com matrícula X não encontrado"** - Matrícula não existe
- **"Matrícula deve ser um número positivo"** - Validação de entrada
- **"Nome não pode estar vazio"** - Validação de entrada
- **"Cargo não pode estar vazio"** - Validação de entrada
- **"Salário deve ser um número positivo"** - Validação de entrada

## Conceitos Aplicados

### Encapsulamento
- Atributos privados em ambas as classes
- Acesso controlado via getters e setters
- Interface pública bem definida

### Tipagem Explícita
- Todos os parâmetros e retornos com tipos
- Uso de `undefined` e `Funcionario | undefined`
- Tipos genéricos quando apropriado

### Tratamento de Erros
- Validação de entrada nos construtores
- Verificação de existência antes de operações
- Mensagens de erro descritivas

### Princípios SOLID
- **Single Responsibility**: Cada classe tem uma responsabilidade clara
- **Open/Closed**: Fácil estender funcionalidades
- **Dependency Inversion**: Não há dependências circulares

## Extensões Possíveis

- Adicionar métodos de busca por cargo ou faixa salarial
- Implementar sistema de departamentos
- Adicionar histórico de salários
- Implementar interface de persistência (banco de dados)
- Adicionar cálculo de benefícios
- Implementar sistema de avaliações de desempenho

## Licença

ISC

## Autor

PedroVikk
