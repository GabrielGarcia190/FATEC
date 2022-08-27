--> 1 Selecione os campos nome do cliente, endereço e estado de todos os clientes.

SELECT nome_cliente AS "Nome do Cliente",
endereco AS "Endereço",
uf AS "Estado"
FROM cliente;

--> 2 Liste todos os vendedores
SELECT * from vendedor;

--> 3 Liste os campos código do produto e quantidade da tabela Item doPedido.
SELECT codigo_produto, quantidade
FROM item_pedido; 

--> 4 Liste o campo “código do cliente” da tabela pedidos e elimine as linhas duplicadas.
SELECT DISTINCT  codigo_cliente
FROM pedido;

--> 5 Selecione os campos código do produto, descrição do produto e valorunitário e altere a linha de cabeçalho dos campos selecionados.

SELECT codigo_produto AS "Código Produto",
descricao_produto AS "Descrição",
val_unit AS "Valor Unitário"
FROM produto;

--> 6 Faça uma consulta que mostre o nome do cliente e estado e altere a linha de cabeçalho dos campos selecionados.
select nome_cliente as "nome",
uf as "estado"
from cliente;

--> 7 Quais são as cidades que a empresa possui clientes?

SELECT DISTINCT cidade AS "Cidades que possuem clientes"
FROM cliente;

--> 8 Liste da tabela produto o campo Descrição e faça o produto do campo valor unitário por 1,3.

SELECT descricao_produto, val_unit * 1.3 AS "Valor Unitário"
FROM produto;

--> 9 Elabore uma consulta que mostre o código do cliente e mostre oprazo de entrega prorrogado por mais 3 dias da tabela pedido.

SELECT codigo_cliente AS "Código do Cliente",
prazo_entrega + 3 AS "Prazo de Entrega prorrogado"
FROM pedido;

--> 10 Liste o nome do vendedor e faixa de comissão dos vendedores que possuem o salário fixo maior que R$ 4.000,00.

select nome_vendedor, faixa_comissao
from vendedor
where salario_fixo > 4000;

--> 11 Selecione os produtos cuja unidade do produto seja igual a kg.
SELECT codigo_produto 
AS "Codigo Produto",
descricao_produto
AS "Descrição" 
FROM produto
WHERE unidade = 'Kg';

--> 12 Faça uma consulta que mostre o nome do cliente e a cidade quando o estado for igual a SP ou cidade igual a Londrina da tabelacliente.

SELECT nome_cliente 
AS "Nome do Cliente",
cidade, 
uf AS "Estado"
FROM cliente 
WHERE uf LIKE 'SP'
OR cidade LIKE 'Londrina';

--> 13 Elabore uma consulta que mostre o número do pedido e o prazode entrega dos pedidos que tiverem o código do cliente igual a 720 e o código do vendedor igual a 101.
SELECT num_pedido, prazo_entrega
FROM pedido
WHERE codigo_cliente = 720 AND codigo_vendedor = 101;

--> 14 Selecione da tabela item do pedido o campo número do pedido quando a quantidade for maior igual a 30 e elimine as linhas duplicadas
SELECT DISTINCT num_pedido
FROM item_pedido
WHERE num_pedido >= 30;

--> 15 Liste todos os vendedores, exceto os que possuem a faixa de comissão igual a ‘C’.

SELECT nome_vendedor AS "Nome do vendedor",
faixa_comissao AS "Faixa de comissão"
FROM vendedor
WHERE faixa_comissao NOT LIKE 'C';

--> 16 Liste as descições de todos os produtos, exceto os que possuem a unidade o produto igual a ‘M’.

SELECT descricao_produto 
AS " Descrição", unidade 
FROM produto
WHERE unidade NOT LIKE 'M';

--> 17 Crie uma consulta que mostre os nomes dos vendedores que possuem o Salário Fixo na faixa de R$ 1.000,00 até R$ 3.000,00

SELECT nome_vendedor AS "Nome do Vendedor",
salario_fixo AS "Salario"
FROM vendedor   
WHERE salario_fixo >= 1000 
AND salario_fixo <= 3000;

--> 18 Selecione os campos número dos pedidos e prazo de entrega detodos os pedidos que possuem o prazo de entrega que esteja entre15 a 25 dias

select num_pedido, prazo_entrega
from pedido
where prazo_entrega >= 15 and prazo_entrega <= 25;

--> 19 Localizem os registros de vendedores que não comecem com aletra ‘J’.

SELECT nome_vendedor
FROM vendedor
WHERE nome_vendedor NOT LIKE 'J%';

--> 20 Localizem os registros de clientes cujos nomes contenham as letras ‘io’

SELECT nome_cliente
FROM cliente
WHERE nome_cliente LIKE '%io%';

--> 21. Selecionem os nomes dos clientes que comecem com letra ‘A’ até a letra ‘F’.

SELECT nome_cliente 
AS "Nome Cliente"
FROM cliente 
WHERE nome_cliente BETWEEN 'A%' AND 'G%';

--> 22. Mostre a descrição dos produtos quando a unidade do produto não seja igual a ‘M’ e ‘Kg’.

SELECT descricao_produto 
AS "DESCRIÇÃO DO PRODUTO", 
unidade
FROM produto
WHERE unidade NOT LIKE 'M%' AND unidade NOT LIKE 'Kg%';

--> 23. Selecionem os vendedores que não possuem a faixa de comissão.

SELECT nome_vendedor
FROM vendedor v
WHERE v.faixa_comissao is null

--> 24 Listem   os   clientes   que   possuem   Inscrição   Estadual,   ou   seja,Inscrição Estadual nSELECT  ALão nula.

SELECT * FROM cliente
WHERE NOT(cliente IS NULL);

--> 25 Crie uma consulta que exiba os clientes ordenados pelo nome do cliente.

SELECT nome_cliente
FROM cliente
ORDER BY nome_cliente;

--> 26 Faça   uma   consulta   da   tabela   vendedor   que   mostre   nome   dovendedor e o salário fixo dos vendedores ordenados pelo nome dovendedor.

SELECT nome_vendedor AS "Nome do vendedor",
salario_fixo AS "Salário Fixo"
FROM vendedor
ORDER BY nome_vendedor;

--> 27 Mostre o nome do cliente e o endereço dos clientes do estado de SP ordenados pelo código do cliente.

SELECT nome_cliente AS "Nome do cliente",
endereco AS "Endereço",
uf AS "Estado"
FROM cliente
WHERE uf LIKE 'SP'
ORDER BY codigo_cliente;

--> 28 Selecione o número do pedido dos pedidos que possuem o prazode entrega igual a 20 dias classificado em ordem decrescente pelo número do pedido.

SELECT num_pedido 
AS "Numero do Pedido",
prazo_entrega AS "Prazo de Entrega"
from pedido
where prazo_entrega = 20
order by num_pedido desc;

--> 29 Listem   as   faixas   de   comissões,   os   nomes   e   os   
-- códigos   dos vendedores   ordenados   pela   faixa   de   comissão
-- e   pelo   nome   do vendedor.

SELECT faixa_comissao, nome_vendedor, codigo_vendedor  
FROM vendedor
ORDER BY faixa_comissao, nome_vendedor;

--> 30 Realize   uma   consulta   que   exiba   os   estados   e   os   nomes   dosclientes que comecem com a letra ‘P’ até a letra ‘Z’, classificados porestado e nome.

SELECT  uf c,nome_cliente c
FROM cliente c
WHERE c.nome_cliente BETWEEN 'P' and 'Z';

--> 31 Mostre o produto que possui o menor e o maior preço.

SELECT descricao_produto AS "Descrição do produto",
val_unit
FROM produto
WHERE val_unit = (SELECT MIN(val_unit) FROM produto)
OR val_unit = (SELECT MAX(val_unit) FROM produto);

--> 32 Façam a média e a soma do salário fixo dos vendedores
select avg(salario_fixo) as "media",
sum(salario_fixo) as "soma"
from vendedor;

--> 33 Encontre a quantidade de clientes que não possuem a InscriçãoEstadual nula.
SELECT count (nome_cliente) AS "Clientes com IE Nula"
FROM cliente c
WHERE c.ie IS NOT NULL;

--> 34 Exiba o maior valor e a soma do salário fixo dos vendedores quepossuem a faixa de comissão ‘A’.
select max(salario_fixo) as "maior valor",
sum(salario_fixo) as "soma"
from vendedor
where faixa_comissao = 'A';

--> 35 Mostre a quantidade total pedida, para o produto ‘papel’ de código‘77’ na tabela item do pedido.

SELECT p.descricao_produto, COUNT(ip.codigo_produto) 
FROM item_pedido ip
INNER JOIN produto p ON p.codigo_produto = ip.codigo_produto
WHERE ip.codigo_produto = 77
GROUP BY p.descricao_produto;

--> 36 Quantos produtos possuem um valor unitário menor que R$ 2,00.

select count(*)
from produto
where val_unit < 2;

--> 37 Liste a quantidade clientes que cada estado contém.

SELECT uf, count(*) AS "Clientes no Estado"
FROM cliente
GROUP BY uf;

--> 38 Exiba   a   quantidade   de   vendedores   e   a   soma   do   salário   fixo agrupados pela faixa de comissão.

select count(*) as "quantidade",
sum(salario_fixo) as "soma"
from vendedor
group by faixa_comissao;

--> 39 Mostre a soma do valor unitário da tabela produto, agrupados pela unidade.

SELECT unidade,
sum(val_unit) AS "soma"
FROM produto
group by unidade;

--> 40 Liste a quantidade de pedidos que tem o prazo de entrega maiorque 7, agrupados pelo código do vendedor.

SELECT count(*)
FROM pedido
WHERE prazo_entrega > 7
GROUP BY codigo_vendedor;

--> 41 Exiba a quantidade de clientes que cada estado contém, menos os clientes do estado de SP.

SELECT uf, COUNT(uf)
FROM cliente
WHERE uf NOT LIKE 'SP'
GROUP by uf;

--> 42 Selecione os pedidos que têm mais do que 3 produtos na tabelaitem do pedido.

SELECT  p.num_pedido,
        p.prazo_entrega, 
        p.codigo_cliente,
        p.codigo_vendedor,
        COUNT(*)
FROM pedido p 
inner join item_pedido i on p.num_pedido = i.num_pedido
GROUP BY p.num_pedido, p.prazo_entrega, p.codigo_cliente, p.codigo_vendedor
HAVING COUNT(*) > 3

--> 43 Liste da tabela item do pedido os produtos que contenha a somadas quantidades maior igual a 50.
SELECT descricao_produto AS "Descrição Produto"
FROM produto
WHERE (SELECT COUNT(unidade) FROM produto) >= 50;

--> 44 Mostre as unidades dos produtos cuja média do valor unitário agrupados pela unidade seja menor que R$ 1,50.
SELECT unidade, AVG(val_unit) AS "media"
FROM produto
WHERE val_unit < 1.50 
GROUP BY unidadeUP