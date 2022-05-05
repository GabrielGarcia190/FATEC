SELECT * FROM dependente;

SELECT nomecar, salario, salario + 100 as "Salario com acréscimo de R$ 100,00" FROM cargo;

SELECT nomecar, salario, salario * 1.2 as "Aumento de 20%" FROM cargo;

SELECT * FROM funcionario WHERE NOT (idCar = 4);
SELECT * FROM Funcionario WHERE idCar = 2 OR idCar = 3;

SELECT idDep, nome as "Dependentes", dataNasc FROM dependente WHERE idDep = 5 AND dataNasc >= '2000-01-01'

SELECT * FROM Funcionario WHERE nome LIKE 'A%';

SELECT * FROM Funcionario WHERE nome LIKE '%a%';

SELECT idcar, nome as "Funcionario" FROM funcionario WHERE idCar = 2 OR idCar = 3;

SELECT idcar, nome as "Funcionario" FROM funcionario WHERE idCar IN ( 2, 3);

SELECT idcar, nome as "Funcionario" FROM funcionario WHERE NOT idCar = 4;

-- EX 01

SELECT f.nome, c.salario, c.salario + 250 as "Acrescimo de 20%" 
FROM funcionario as f
INNER JOIN cargo c ON c.idCar = f.idCar;

-- EX 02

SELECT f.nome, c.salario, c.salario * 0.075 as "Desconto de 7,5%", c.salario * 0.925 as "Salario Com desconto de 7.5%"
FROM funcionario as f INNER JOIN cargo c ON c.idCar = f.idCar;

-- EX 03

SELECT f.nome, c.idCar, c.nomeCar FROM funcionario f 
INNER JOIN cargo c ON c.idCar = f.idCar WHERE c.idCar = 4;

-- EX 04

SELECT f.nome, c.nomeCar, c.salario FROM funcionario f INNER JOIN cargo c ON c.idCar = f.idCar WHERE c.salario >= 5800;

-- EX 05

SELECT f.nome, c.idCar, c.nomeCar, c.salario FROM funcionario f 
INNER JOIN cargo c ON c.idCar = f.idCar WHERE c.salario >=  5700 AND c.idCar = 2;

-- EX 06 

SELECT f.nome, c.nomeCar, c.salario FROM funcionario f INNER JOIN
cargo c ON c.idCar = f.idCar WHERE nomeCar LIKE 'Programador' OR nomeCar LIKE 'Gerente TI'

-- EX 07

SELECT f.nome, c.nomeCar,  c.salario 
FROM funcionario f 
INNER JOIN cargo c ON c.idCar = f.idCar 
WHERE nomeCar LIKE 'Programador' OR nomeCar LIKE 'Webdesign' AND c.salario > 5000;

-- EX 08

SELECT f.nome, c.nomeCar, c.salario 
FROM funcionario f 
INNER JOIN cargo c  ON c.idCar = f.idCar
WHERE NOT c.nomeCar = 'Programador' OR c.nomeCar = 'Suporte TI'

-- EX 09
ALTER TABLE funcionario ADD filhos SMALLINT;

UPDATE funcionario SET filhos = 1  WHERE idFun = 1;
UPDATE funcionario SET filhos = 1  WHERE idFun = 3;
UPDATE funcionario SET filhos = 1  WHERE idFun = 4;
UPDATE funcionario SET filhos = 2  WHERE idFun = 5;

SELECT f.nome, f.filhos FROM funcionario f WHERE filhos BETWEEN 2 AND 3; -- POSSO USAR O BETWEEN - SINTAXE: BETWEEN 4 AND 2

-- EX 10
SELECT f.nome, f.filhos FROM funcionario f WHERE NOT (filhos BETWEEN 2 AND 3);

-- EX 11 
SELECT f.nome, f.filhos FROM funcionario f LEFT JOIN depfunc d ON f.idFun = d.idFun WHERE filhos < 2 OR filhos > 3 OR f.filhos ISNULL;

--EX 12
SELECT d.nome FROM dependente d WHERE nome LIKE '%Robeti';

SELECT AVG(salario) FROM cargo;

SELECT * FROM funcionario;

SELECT * FROM funcionario f INNER JOIN  cargo c ON f.idcar = c.idcar;

SELECT SUM(salario) FROM funcionario f INNER JOIN cargo C ON f.idcar = c.idcar WHERE c.idcar = 4;

SELECT SUM(salario) FROM funcionario f INNER JOIN cargo C ON f.idcar = c.idcar WHERE c.idcar = 4;