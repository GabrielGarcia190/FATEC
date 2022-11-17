== > 77
CREATE OR REPLACE FUNCTION mostrarSalarios(cliente_nome VARCHAR, comissao DECIMAL) RETURNS SETOF record AS $$
DECLARE reg record;
BEGIN FOR reg IN (
    SELECT AVG(v.salario_fixo) AS "Media Salário",
        MAX(v.salario_fixo) AS "Maior Salário",
        MIN (v.salario_fixo) AS "Maior Salário"
    FROM vendedor v
        INNER JOIN pedido p ON v.codigo_vendedor = p.codigo_vendedor
        INNER JOIN cliente c ON p.codigo_cliente = c.codigo_cliente
    WHERE c.nome_cliente = cliente_nome
        AND v.faixa_comissao = comissao
) LOOP RETURN NEXT reg;
END LOOP;
RETURN;
END;
$$ LANGUAGE plpgsql;