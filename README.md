# teste-XBRI
Teste prático

# Componente DynamicTableComponent
## Descrição
Este componente DynamicTableComponent é uma tabela dinâmica criada para exibir dados e ações personalizáveis em uma tabela do Angular Material. Ele permite configurar as colunas, os dados e as ações de maneira flexível.

## Propriedades de Input
displayedColumns (Column[]): Define as colunas a serem exibidas na tabela. Cada coluna é um objeto com propriedades como name e title.
data (any[]): Array de dados a serem exibidos na tabela.
actions (Actions[]): Array de ações disponíveis para cada linha. Cada ação deve conter um ícone e uma classe CSS opcional.
header (boolean): Define se o cabeçalho da tabela será exibido. Valor padrão é true.

## Propriedades de Output
actionClick (EventEmitter<ActionClickEvent>): Evento emitido quando uma ação é clicada em uma linha da tabela. O evento contém informações sobre o elemento e a ação clicada.

## Como usar
### Adicionar o Componente: No arquivo HTML, adicione o app-dynamic-table e passe as propriedades necessárias.
<app-dynamic-table 
  [displayedColumns]="displayedColumns"
  [data]="tableData"
  [actions]="tableActions"
  (actionClick)="handleActionClick($event)">
</app-dynamic-table>

### Configurar displayedColumns: Cada coluna deve ter um name (chave para acessar o dado no objeto) e um title (nome exibido no cabeçalho).
displayedColumns: Column[] = [
  { name: 'nome', title: 'Nome' },
  { name: 'idade', title: 'Idade' },
];
