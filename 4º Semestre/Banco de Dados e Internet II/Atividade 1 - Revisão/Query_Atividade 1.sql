CREATE TABLE Pessoa(
   pessoa_codigo INT  PRIMARY KEY,
   pessoa_nome_fantansia VARCHAR(250),
   pessoa_data_nascimento DATE,
   pessoa_rg_ie VARCHAR(250) NOT NULL,
   pessoa_cpf_cnpj VARCHAR(250) NOT NULL,
   pessoa_sexo CHAR(1),
   pessoa_razao_social VARCHAR(250)NOT NULL,
   pessoa_excluido BOOLEAN NOT NULL,
   pessoa_email VARCHAR(250),
   pessoa_contato VARCHAR(250),
   pessoa_datacadstro DATE NOT NULL,
   pessoa_responsavel VARCHAR(250),
   pessoa_telefone_fixo VARCHAR(50),
   pessoa_telefone_cel VARCHAR(100),
   pessoa_endereco_rua VARCHAR(100) NOT NULL,
   pessoa_endereco_numero INT NOT NULL,
   pessoa_endereco_bairro VARCHAR(100),
   pessoa_endereco_cidade VARCHAR(100),
   pessoa_endereco_complemente VARCHAR(100),
   pessoa_endereco_uf VARCHAR(50),
   pessoa_endereco_cep VARCHAR(50)  
);

CREATE TABLE TipoFuncionario(
    tipofuncionario_codigo INT PRIMARY KEY,
    tipofuncionario_nome VARCHAR(250) NOT NULL,
    tipofuncionario_excluido BOOLEAN NOT NULL
);

CREATE TABLE funcionario(
    funcionario_codigo INT PRIMARY KEY,
    funcionario_login VARCHAR(250) NOT NULL,
    funcionario_senha VARCHAR(250) NOT NULL,
    funcionario_situacao VARCHAR(250) NOT NULL,
    funcionario_excluido BOOLEAN NOT NULL,
    pessoa_pessoa_codigo INT,
    FOREIGN KEY (pessoa_pessoa_codigo) REFERENCES Pessoa(pessoa_codigo),
    tipoFuncionario_tipofuncionario_codigo INT,
    FOREIGN KEY (tipoFuncionario_tipofuncionario_codigo) REFERENCES TipoFuncionario(tipofuncionario_codigo)
);

CREATE TABLE Industria(
    industria_codigo INT PRIMARY KEY,
    industria_excluido  BOOLEAN NOT NULL,
    pessoa_pessoa_codigo  INT ,
    FOREIGN KEY (pessoa_pessoa_codigo) REFERENCES Pessoa(pessoa_codigo)     
);

CREATE  TABLE  FrenteTrabalho(
    frentetrabalho_codigo INT PRIMARY KEY,
    frentetrabalho_descricao VARCHAR(45) NOT NULL,
    frentetrabalho_area NUMERIC(15,6) NOT NULL,
    frentetrabalho_excluido BOOLEAN NOT NULL,
    industria_industria_codigo INT REFERENCES industria(industria_codigo)
);

CREATE TABLE producao(
    producao_codigo INT PRIMARY KEY,
    producao_data DATE NOT NULL,
    producao_cota NUMERIC (15,6),
    frentetrabalho_frentetrabalho_codigo INT REFERENCES frentetrabalho(frentetrabalho_codigo)
);

CREATE  TABLE funcionarioFrenteTrabalho(
    funcionarioFrenteTrabalho INT PRIMARY KEY,
    FrenteTrabalho_frenteTrabalho_codigo INT REFERENCES frenteTrabalho(frentetrabalho_codigo),
    funcionario_funcionario_codigo INT REFERENCES Funcionario(funcionario_codigo)
);

CREATE TABLE AberturaTalhao(
    aberturatalhao_codigo INT PRIMARY KEY,
    aberturatalhao_data_abertura DATE NOT NULL,
    aberturatalhao_hora_abertura VARCHAR(6) NOT NULL,
    aberturatalhao_data_fechamento DATE NOT NULL,
    abeturatalhao_hora_fechamento VARCHAR(6) NOT NULL,
    frentetrabalho_frentetrabalho_codigo INT REFERENCES frenteTrabalho(frentetrabalho_codigo)
);

CREATE TABLE cicloCana(
    ciclocana_codigo INT PRIMARY KEY,
    ciclocana_descricao VARCHAR(45) NOT NULL,
    ciclocana_excluido BOOLEAN NOT NULL,
    ciclocana_numero_corte INT NOT NULL
);

CREATE TABLE tipoCana(
    tipocana_codigo INT PRIMARY KEY,
    tpoocana_descricao VARCHAR(200) NOT NULL,
    tipocana_excluido BOOLEAN NOT NULL
);

CREATE TABLE FundoAgricola(
    fundoagricola_codigo INT PRIMARY KEY,
    fundoagricola_nome VARCHAR(250) NOT NULL,
    fundoagricola_total_comprimento NUMERIC (15,6) NOT NULL
);

CREATE TABLE talhao(
    talhao_codigo INT PRIMARY KEY,
    talhao_ara NUMERIC(15,6) NOT NULL,
    talhao_ano_plantio INT NOT NULL,
    talhao_ano_safra INT NOT NULL,
    talhao_situacao VARCHAR(45) NOT NULL,
    talhao_previsao_produca NUMERIC(15,6) NOT NULL,
    talhao_area_plantada NUMERIC (15,6) NOT NULL,
    talhao_area_colhida NUMERIC (15,6) NOT NULL,
    talhao_excluido BOOLEAN NOT NULL,
    fundoagricola_agricola_codigo INT REFERENCES fundoagricola(fundoagricola_codigo),
    tipocana_tipocana_codigo INT REFERENCES tipocana(tipocana_codigo),
    ciclocana_ciclocana_codigo INT REFERENCES ciclocana(ciclocana_codigo)
);


CREATE TABLE talhaoAberturaTalhao(
    talhaoaberturatalhao_codigo INT PRIMARY KEY,
    talhaoabertura_area_colhida NUMERIC(15,6) NOT NULL,
    talhaoabertura_percentualparticipacaoabertura NUMERIC (15,6) NOT NULL,
    aberturatalhao_aberutra_codigo INT REFERENCES aberturatalhao(aberturatalhao_codigo),
    talhao_talhao_codigo INT REFERENCES talhao(talhao_codigo)
);

CREATE TABLE BoletimViagem(
    boletimviagem_codigo INT PRIMARY KEY,
    boletimviagem_composicao INT NOT NULL,
    boletimviagem_codigosemireboque INT NOT NULL,
    boletimviagem_codigo_cavalo INT NOT NULL,
    boletimviagem_tipocolheita VARCHAR(250) NOT NULL,
    boletimviagem_tipocana VARCHAR(250) NOT NULL,
    boletimviagem_bituca BOOLEAN NOT NULL,
    boletimviagem_fiscalcampo INT NOT NULL,
    boeltimviagem_fiscalcorte INT NOT NULL,
    boletimviagem_noteiro INT NOT NULL,
    boletimviagem_dataabertura DATE NOT NULL,
    boletimviagem_horaabertura VARCHAR(6) NOT NULL,
    boletimviagem_datasaida DATE NOT NULL,
    boletimviagem_horasaida VARCHAR(6) NOT NULL,
    boletimviagem_dataproducao DATE NOT NULL,
    aberturatrabalho_aberturatrabalho_codigo INT NOT NULL
 );
 
 CREATE TABLE MarcaVeiculo(
    marcaveiculo_codigo INT PRIMARY KEY,
    marcaveiculo_descricao VARCHAR(250) NOT NULL,
    marcaveiculo_excluido BOOLEAN NOT NULL
 );
 
CREATE TABLE tipoVeiculo(
    tipoveiculo_codigo INT PRIMARY KEY,
    tipoveiculo_descricao VARCHAR(250) NOT NULL,
    tipoveiculo_obs VARCHAR(250) NOT NULL,
    tipoveiculo_excluido BOOLEAN NOT NULL
);
 
CREATE TABLE veiculo(
    veiculo_codigo INT PRIMARY KEY ,
    veiculo_placa VARCHAR(10) NOT NULL,
    veiculo_ano_fabricacao VARCHAR(4) NOT NULL,
    veiculo_situacao VARCHAR(250) NOT NULL,
    veiculo_quantidade_reboque INT NOT NULL,
    veciulo_excluido BOOLEAN NOT NULL,
    marcaveiculo_marcaveiculo_codigo INT REFERENCES marcaVeiculo(marcaveiculo_codigo),
    tipoveiculo_tipoveiculo_codigo INT REFERENCES tipoveiculo(tipoveiculo_codigo)
);

CREATE TABLE BoletimVeiculo(
    boletimveiculo_codigo INT PRIMARY KEY,
    boletimveiculo_colheitadeira INT NOT NULL,
    boletimveiculo_operadorcolheitadeira INT NOT NULL,
    boletimveiculo_trator INT NOT NULL,
    boletimveiculo_tratorista INT NOT NULL,
    boletimveiculo_transbordo1 INT NOT NULL,
    boletimveiculo_transbordo2 INT NOT NULL,
    boletimveiculo_toneladatranportada NUMERIC(15,6) NOT NULL,
    boletimViagem_boletimviagem_codigo INT REFERENCES boletimViagem(boletimviagem_codigo),
    veiculo_veiculo_codigo INT REFERENCES veiculo(veiculo_codigo)
);


 















     


