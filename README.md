# JavaScript Array

```javascript
const numero1 = 50;
const numero2 = 43;
const numero3 = 12;

// Utilizando array
const numeros = [50, 43, 12];
```

Um array pode ser definido como uma lista ordenada de valores enumerados, onde cada valor é chamado de elemento ou item, e cada elemento está localizado em uma posição na lista chamada de índice. Vamos explorar esses conceitos em detalhes.

## Lista Ordenada de Valores Enumerados

Quando falamos de valores, estamos nos referindo a dados de algum tipo, como string (texto), number (número), booleano (true ou false), ou outros dados reconhecidos pelo JavaScript.

```javascript
const arrayDeNumeros = [50, 43, 12];
const arrayDeStrings = ["banana", "alura", "Juliana"];
```

Uma lista ordenada implica que os dados no array estão em uma ordem definida e permanecerão nessa ordem, a menos que haja alguma modificação no array. Cada valor está associado a um identificador numérico, conhecido como índice.

## Elemento ou Item

Em programação, é crucial conhecer os nomes dos itens para facilitar a resolução de dúvidas, procurar soluções e ler documentação. Quando trabalhamos com arrays, cada valor na lista é chamado de elemento ou item.

```javascript
// Array com 1 elemento
const numero = [5];

// Array com 3 elementos
const nums = [50, 43, 12];
```

Lembrando que cada elemento corresponde a um dado, separados por vírgula. O espaço é opcional, mas facilita a leitura.

## Índice

Se um array é uma lista ordenada, é possível acessar cada valor se soubermos a posição dele na lista, chamada de índice.

```javascript
const nums = [50, 43, 12];
// O número 43 está na posição 1 (segunda posição) nessa lista de três números.
```

Em programação, chamamos de índice o número que identifica a posição de um valor em um array. Importante observar que em JavaScript (e na maioria das linguagens de programação), a contagem dos índices começa no número 0.

```javascript
// Índice     0   1   2   3
const nums = [50, 43, 12, 98];
```

## Propriedade `length`

A propriedade `length` especifica o tamanho de um array, ou seja, o número de elementos contidos no array.

```javascript
// Índice     0   1   2   3
const nums = [50, 43, 12, 98];
console.log(nums.length); // 4
```

![Array Image](image.png)