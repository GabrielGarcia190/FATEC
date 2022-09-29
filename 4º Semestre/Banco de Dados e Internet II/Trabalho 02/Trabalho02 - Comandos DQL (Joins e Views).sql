--45
SELECT c.nome_cliente, c.cidade 
FROM cliente c
INNER JOIN Pedido p ON p.codigo_cliente = c.codigo_cliente
WHERE p.prazo_entrega > 25

--46
SELECT p.descricao, p.unidade, p.quant_est 
FROM item_pedido ip
INNER JOIN pedidos ip ON ip.codigo_produto = p.codigo_produto
WHERE ip.quantidade > 40

--47
SELECT DISTINCT c.nome_cliente FROM cliente c
INNER JOIN pedido p ON p.codigo_cliente = c.codigo_cliente
WHERE p.codigo_vendedor = 101

--48
SELECT DISTINCT v.nome_vendedor FROM vendedor v
INNER JOIN pedido p ON p.codigo_vendedor = v.codigo_vendedor
WHERE p.codigo_cliente = 720

--49
SELECT c.nome_cliente, p.prazo_entrega
FROM cliente c
INNER JOIN pedido p ON c.codigo_cliente = p.codigo_cliente 
ORDER BY nome_cliente DESC

--50
SELECT v.nome_vendedor, p.prazo_entrega
FROM vendedor v
INNER JOIN pedido p ON p.codigo_vendedor = v.codigo_vendedor
WHERE p.prazo_entrega > 15

--51
SELECT DISTINCT c.nome_cliente, p.prazo_entrega, c.uf
FROM cliente c
INNER JOIN pedido p ON p.codigo_cliente = c.codigo_cliente
WHERE p.prazo_entrega > 15 AND c.uf IN('SP', 'RJ')

--52
SELECT DISTINCT c.nome_cliente
FROM cliente c
INNER JOIN pedido p ON p.codigo_cliente = c.codigo_cliente
INNER JOIN vendedor v ON p.codigo_vendedor = v.codigo_vendedor 
WHERE v.nome_vendedor LIKE 'Antônio'
ORDER BY c.nome_cliente

--53
SELECT c.nome_cliente, pdt.descricao_produto, c.uf
FROM cliente c
INNER JOIN pedido p ON p.codigo_cliente = c.codigo_cliente
INNER JOIN item_pedido ip ON ip.num_pedido = p.num_pedido
INNER JOIN produto pdt ON ip.codigo_produto = pdt.codigo_produto
WHERE p.prazo_entrega > 15 
AND pdt.descricao_produto LIKE 'Queijo' 
AND c.uf LIKE 'RJ'
ORDER BY c.nome_cliente

--54
SELECT c.nome_cliente, c.codigo_cliente, p.prazo_entrega
FROM cliente c
LEFT JOIN pedido p ON p.codigo_cliente = c.codigo_cliente

--55
SELECT v.codigo_vendedor, v.nome_vendedor, p.num_pedido
FROM vendedor v
LEFT JOIN pedido p ON p.codigo_vendedor = v.codigo_vendedor

--56
SELECT pdt.codigo_produto, pdt.descricao_produto, p.num_pedido, ip.quantidade
FROM pedido p
RIGHT JOIN item_pedido ip ON ip.num_pedido = p.num_pedido
RIGHT JOIN produto pdt ON ip.codigo_produto = pdt.codigo_produto

-- 57
SELECT c.nome_cliente FROM cliente c 
WHERE codigo_cliente IN (SELECT codigo_cliente FROM pedido WHERE prazo_entrega > 25);

--58
SELECT c.nome_cliente 
FROM cliente c
WHERE c.codigo_cliente NOT IN (SELECT p.codigo_cliente FROM pedido p)

--59
SELECT pr.descricao_produto AS "Descrição do Produto"
FROM produto pr 
WHERE pr.val_unit < (SELECT AVG(val_unit) FROM produto); 

--60
SELECT
c.codigo_cliente
FROM cliente c
INNER JOIN pedido p ON p.codigo_cliente = c.codigo_cliente
WHERE p.prazo_entrega > (SELECT AVG(p.prazo_entrega) FROM pedido p );

--61
SELECT c.nome_cliente
FROM cliente c
INNER JOIN pedido p ON p.codigo_cliente = c.codigo_cliente
WHERE p.prazo_entrega > (SELECT AVG(p.prazo_entrega) FROM pedido p );

--62 -- FAZER DEPOIS
SELECT pdt.descricao_produto, SUM(ip.quantidade) AS "Quantidade pedida"
FROM item_pedido ip
INNER JOIN pedido p ON ip.num_pedido = p.num_pedido
INNER JOIN produto pdt ON ip.codigo_produto = pdt.codigo_produto
GROUP BY pdt.descricao_produto, ip.quantidade
ORDER BY ip.quantidade DESC
LIMIT 1

--63
SELECT c.nome_cliente AS "NOME DO CLIENTE"
FROM cliente c
INNER JOIN pedido p ON c.codigo_cliente = p.codigo_cliente
INNER JOIN item_pedido ip ON p.num_pedido = p.num_pedido
WHERE ip.quantidade > (SELECT AVG(ip.quantidade) FROM item_pedido ip)
GROUP BY c.nome_cliente;

--64
CREATE VIEW cliente_estado AS
SELECT c.codigo_cliente, c.nome_cliente
FROM cliente c
WHERE uf IN ('SP', 'RJ', 'MS');

--65
SELECT p.num_pedido, p.codigo_cliente, p.prazo_entrega
FROM pedido p
INNER JOIN vendedor v ON p.codigo_vendedor = v.codigo_vendedor
WHERE v.nome_vendedor LIKE 'CARLOS';

CREATE VIEW vwPedido2 AS
SELECT p.num_pedido, ip.codigo_produto, pdt.descricao_produto, ip.quantidade, pdt.val_unit, quantidade * pdt.val_unit AS "Subtotal" 
FROM pedido p
INNER JOIN item_pedido ip ON p.num_pedido = ip.num_pedido
INNER JOIN produto pdt ON ip.codigo_produto = pdt.codigo_produto

--67
CREATE VIEW vwPedido3 AS
SELECT p.num_pedido, SUM(ip.quantidade * pdt.val_unit) AS "Total"
FROM pedido p
INNER JOIN item_pedido ip ON p.num_pedido = ip.num_pedido
INNER JOIN produto pdt ON ip.codigo_produto = pdt.codigo_produto
GROUP BY p.num_pedido

--68
CREATE VIEW vwPedido4 AS
SELECT p.num_pedido, 
v.codigo_vendedor, v.nome_vendedor, v.salario_fixo, 
SUM(ip.quantidade * pdt.val_unit) AS "Total"
FROM pedido p
INNER JOIN item_pedido ip ON p.num_pedido = ip.num_pedido
INNER JOIN produto pdt ON ip.codigo_produto = pdt.codigo_produto
INNER JOIN vendedor v ON p.codigo_vendedor = v.codigo_vendedor
GROUP BY p.num_pedido, v.codigo_vendedor, v.nome_vendedor, v.salario_fixo

--69
CREATE VIEW vwVendedor AS
SELECT
v.nome_vendedor, SUM(ip.quantidade * pdt.val_unit) AS "TotalVendido"
FROM pedido p
INNER JOIN item_pedido ip ON p.num_pedido = ip.num_pedido
INNER JOIN produto pdt ON ip.codigo_produto = pdt.codigo_produto
INNER JOIN vendedor v ON p.codigo_vendedor = v.codigo_vendedor
GROUP BY v.nome_vendedor

--70
CREATE VIEW vwVendedor2 AS
SELECT DISTINCT
v.nome_vendedor, 
v.salario_fixo, 
v.salario_fixo + SUM((ip.quantidade * pdt.val_unit) * 0.05) AS "Salário Total"
FROM pedido p
INNER JOIN item_pedido ip ON p.num_pedido = ip.num_pedido
INNER JOIN produto pdt ON ip.codigo_produto = pdt.codigo_produto
INNER JOIN vendedor v ON p.codigo_vendedor = v.codigo_vendedor
GROUP BY v.nome_vendedor, v.salario_fixo

--71
SELECT AVG(total) FROM vwPedido4
WHERE nome_vendedor LIKE 'José'

--72
SELECT pdt.codigo_produto, pdt.descricao_produto, SUM(ip.quantidade)
FROM produto pdt
INNER JOIN item_pedido ip ON pdt.codigo_produto = ip.codigo_produto
GROUP BY pdt.codigo_produto, pdt.descricao_produto
