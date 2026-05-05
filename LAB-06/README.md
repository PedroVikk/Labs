# LAB-06: Sistema de Reservas de Hotel

Sistema de gerenciamento de reservas de hotel desenvolvido em TypeScript, demonstrando conceitos de Programação Orientada a Objetos (POO) como encapsulamento, classes e tipagem forte.

## 📋 Especificações

### Classe Reserva
- **numeroQuarto**: número do quarto (number)
- **nomeHospede**: nome do hóspede (string)
- **dataEntrada**: data de entrada (Date)
- **dataSaida**: data de saída (Date)

### Classe Hotel
- **reservas**: array privado de reservas
- **registrarReserva(reserva: Reserva)**: registra uma nova reserva
- **cancelarReserva(numeroQuarto: number)**: cancela uma reserva existente
- **consultarStatusQuarto(numeroQuarto: number)**: retorna o status de um quarto

## 🚀 Como Executar

### Pré-requisitos
- Node.js 14+ instalado
- npm ou yarn

### Instalação

```bash
# Navegar até o diretório do projeto
cd LAB-06

# Instalar dependências
npm install
```

### Executar em Desenvolvimento

Use `ts-node` para executar diretamente com TypeScript:

```bash
npm run dev
```

### Compilar para JavaScript

Compile o TypeScript para JavaScript:

```bash
npm run build
```

### Executar Código Compilado

Execute o código compilado em JavaScript:

```bash
npm start
```

## 📝 Exemplo de Uso

O arquivo `src/index.ts` demonstra todas as funcionalidades do sistema:

```typescript
import Reserva from "./Reserva";
import Hotel from "./Hotel";

const hotel = new Hotel();

// Criar uma reserva
const reserva1 = new Reserva(101, "João Silva", new Date(2026, 4, 10), new Date(2026, 4, 15));

// Registrar a reserva
hotel.registrarReserva(reserva1);

// Consultar status do quarto
console.log(hotel.consultarStatusQuarto(101));

// Cancelar reserva
hotel.cancelarReserva(101);
```

## 🎯 Funcionalidades Implementadas

✅ **Registro de Reservas**
- Permite registrar novas reservas de quartos
- Valida se o quarto já possui uma reserva ativa
- Lança erro caso haja tentativa de reserva duplicada

✅ **Cancelamento de Reservas**
- Permite cancelar reservas existentes
- Lança erro se tentar cancelar uma reserva inexistente
- Libera o quarto para novas reservas

✅ **Consulta de Status**
- Retorna informações de disponibilidade dos quartos
- Exibe dados da reserva (hóspede, datas) quando ativo
- Mostra como "DISPONÍVEL" quando sem reserva

✅ **Tratamento de Erros**
- Validação de reservas duplicadas
- Validação de cancelamento de reservas inexistentes
- Mensagens de erro claras e descritivas

## 🏗️ Estrutura do Projeto

```
LAB-06/
├── src/
│   ├── Reserva.ts      # Classe de Reserva
│   ├── Hotel.ts        # Classe de Hotel
│   └── index.ts        # Arquivo principal com exemplos
├── dist/               # Código compilado (gerado após build)
├── package.json        # Configuração do projeto
├── tsconfig.json       # Configuração do TypeScript
└── README.md           # Este arquivo
```

## 💡 Conceitos POO Demonstrados

- **Encapsulamento**: Uso de modificadores `public` e `private`
- **Classes**: Definição de classes `Reserva` e `Hotel`
- **Tipagem**: Uso explícito de tipos TypeScript
- **Tratamento de Erros**: Try-catch para validações
- **Construtores**: Inicialização de objetos

## 📂 Saída Esperada

Ao executar `npm run dev`, você verá:

```
=== SISTEMA DE RESERVAS DE HOTEL ===

--- Registrando Reservas ---
✓ Reserva registrada com sucesso para João Silva no quarto 101
✓ Reserva registrada com sucesso para Maria Santos no quarto 205
✓ Reserva registrada com sucesso para Pedro Oliveira no quarto 308

--- Consultando Status dos Quartos ---
Quarto 101: RESERVADO | Hóspede: João Silva | Entrada: 10/05/2026 | Saída: 15/05/2026
Quarto 205: RESERVADO | Hóspede: Maria Santos | Entrada: 12/05/2026 | Saída: 18/05/2026
Quarto 308: RESERVADO | Hóspede: Pedro Oliveira | Entrada: 01/06/2026 | Saída: 05/06/2026
Quarto 402: DISPONÍVEL

--- Tentando registrar reserva duplicada ---
Erro: O quarto 101 já possui uma reserva ativa.

--- Cancelando uma Reserva ---
✓ Reserva cancelada com sucesso. Hóspede: Maria Santos, Quarto: 205

--- Status após cancelamento ---
Quarto 205: DISPONÍVEL

--- Tentando cancelar reserva inexistente ---
Erro: Nenhuma reserva encontrada para o quarto 999.

--- Status Final dos Quartos ---
Quarto 101: RESERVADO | Hóspede: João Silva | Entrada: 10/05/2026 | Saída: 15/05/2026
Quarto 205: DISPONÍVEL
Quarto 308: RESERVADO | Hóspede: Pedro Oliveira | Entrada: 01/06/2026 | Saída: 05/06/2026
Quarto 402: DISPONÍVEL
```

## 📚 Dependências

- **TypeScript**: 5.0.0 ou superior - para tipagem estática
- **ts-node**: 10.9.0 ou superior - para execução direta de arquivos TypeScript
- **@types/node**: 20.0.0 ou superior - tipos para APIs do Node.js

## 🔧 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run build` | Compila TypeScript para JavaScript |
| `npm run start` | Executa o código compilado |
| `npm run dev` | Executa com ts-node (recomendado durante desenvolvimento) |

## 📄 Licença

ISC

---

**Desenvolvido como exercício de POO em TypeScript**
