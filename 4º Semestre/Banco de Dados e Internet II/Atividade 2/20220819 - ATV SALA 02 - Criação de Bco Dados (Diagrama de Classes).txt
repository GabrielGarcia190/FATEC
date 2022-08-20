CREATE TABLE Pessoa (
    idPessoa INTEGER PRIMARY KEY,
    nomeRazaoPessoa VARCHAR(120),
    rgPessoa VARCHAR(45),
    cpfPessoa VARCHAR(45),
    dataNascFundPessoa date,
    telefonePessoa VARCHAR(20),
    logradouroPessoa VARCHAR(120),
    numLogradouroPessoa VARCHAR(5),
    bairroPessoa VARCHAR(120),
    cepPessoa VARCHAR(25),
    emailPessoa VARCHAR(120),
    log_in VARCHAR(120),
    senha VARCHAR(120)
);

CREATE TABLE Estado (
    idEstado INTEGER PRIMARY KEY,
    nomeEstado VARCHAR(45),
    siglaEstado VARCHAR(45)
);

CREATE TABLE Cidade (
    idCidade INTEGER PRIMARY KEY,
    nomeCidade VARCHAR(45),
    
     IdEstado INTEGER,
    CONSTRAINT FK_Estado_Cidade FOREIGN KEY (IdEstado) REFERENCES Estado(idEstado)
);

CREATE TABLE Administrador(
    idAdministrador INTEGER PRIMARY KEY,
    situacaoAdministrador VARCHAR(45),
    permiteLogin VARCHAR(1),

    IdPessoa INTEGER,
    CONSTRAINT FK_Administrador_PEssoa FOREIGN KEY (IdPessoa) REFERENCES Pessoa(IdPessoa)
);

CREATE TABLE TipoTrabalho(
    idTipoTrabalho INTEGER PRIMARY KEY,
    Descricao VARCHAR
);

CREATE TABLE Fornecedor(
    idFornecedor INTEGER PRIMARY KEY,
    situacaoFornecedor VARCHAR(45),
    permiteLogin VARCHAR(1),

    idTipoTrabalho INTEGER,
    CONSTRAINT FK_Fornecedor_TipoTrabalho FOREIGN KEY (idTipoTrabalho) REFERENCES TipoTrabalho(idTipoTrabalho)
);

CREATE TABLE Conferente (
    IdConferente INTEGER PRIMARY KEY,
    situacaoConferente boolean,
    permiteLogin VARCHAR(1)
);

CREATE TABLE Instituicao(
    idInstituicao INTEGER PRIMARY KEY,
    nomeFantasiaInstituicao VARCHAR(45),
    situacaoInstituicao VARCHAR(45)
);

CREATE TABLE Curso (
    idCurso INTEGER PRIMARY KEY,
    nomeCurso VARCHAR(45),
    idInstituicao INTEGER, 
    CONSTRAINT FK_curso_Instituicao FOREIGN KEY (idInstituicao) REFERENCES Instituicao(idInstituicao) 
);

CREATE TABLE Coordenador(
    IdCoordenador INTEGER PRIMARY KEY,
    SituacaoCoordenador VARCHAR,
    PermiteLogin VARCHAR(1)
);

CREATE TABLE Participante(
    idParticipante int primary key,
    sexoParticipante varchar(10),
    situacaoParticipante varchar(50),
    permiteLogin varchar(1),

    IdPessoa INTEGER,
    CONSTRAINT FK_Participante_Pessoa FOREIGN KEY (IdPessoa) REFERENCES Pessoa(idPessoa)
);

CREATE TABLE Patrocinador(
    IdPatrocinador INTEGER PRIMARY KEY,
    SituacaoPatrocinador VARCHAR,
    PermiteLogin VARCHAR(1)
);

CREATE TABLE Inscricao (
    IdInscricao INTEGER PRIMARY KEY,
    NroPulseira VARCHAR,
    DataInscricao DATE,
    IdParticipante INTEGER,
    CONSTRAINT FK_Inscricao_Participante FOREIGN KEY (IdParticipante) REFERENCES Participante(idParticipante)
);

CREATE TABLE Parcelamento (
    idParcelamento INTEGER PRIMARY KEY,
    nroParcela INTEGER,
    valorParcela NUMERIC(10,2),
    dataVencimento date,
    dataPagamento date,
    situacao VARCHAR(45)
);

CREATE TABLE AtividadeEvento (
    idAtividadeEvento INTEGER PRIMARY KEY,
    cargaHoraria NUMERIC(10,2),
    nomeAtividade VARCHAR(45),
    resumo VARCHAR(45),
    dataAtividade date,
    horaAtividade VARCHAR(45)
);

CREATE TABLE TipoAtividade (
    idTipoAtividade INTEGER PRIMARY KEY,
    descricao VARCHAR(45),

    idAtividadeEvento INTEGER,
    CONSTRAINT FK_TipoAtividade_AtividadeEvento  FOREIGN KEY (idAtividadeEvento) REFERENCES AtividadeEvento(idAtividadeEvento)
);





CREATE TABLE Doacao (
    idDoacao INTEGER PRIMARY KEY,
    valorDoacao NUMERIC(10,2),
    dataDoacao date,
    descricao VARCHAR(120),
    situacao VARCHAR(45),
    
    IdPatrocinador INTEGER,
    CONSTRAINT FK_IdPatricinador_IdDoacao FOREIGN KEY (idPatrocinador) REFERENCES Patrocinador(idPatrocinador)
);

CREATE TABLE AtividadeInscricao(
    IdAtividadeInscricao INTEGER PRIMARY KEY,
    Situacao VARCHAR,
    ChaveCertificado VARCHAR,
    EntradaData DATE,
    EntradaHora VARCHAR,
    SaidaData DATE,
    SaidaHora VARCHAR,

    idInscricao INTEGER,
    CONSTRAINT FK_AtividadeInscricao_Inscricao FOREIGN KEY (idInscricao) REFERENCES Inscricao(idInscricao)
);

CREATE TABLE Evento(
    IdEvento INTEGER PRIMARY KEY,
    NomeEvento VARCHAR,
    ValorEvento NUMERIC(10,2),
    ValorEventoPrazo NUMERIC(10,2),
    DataInicioEvento DATE,
    informacaoEvento DATE,
    DataTerminoEvento VARCHAR,
    SaldoCaixa NUMERIC(10,2),
    SituacaoCaixa VARCHAR,

    idAtividadeEvento INTEGER,
    CONSTRAINT FK_Evento_AtividadeEvento FOREIGN KEY (idAtividadeEvento) REFERENCES AtividadeEvento(idAtividadeEvento),
    IdConferente INTEGER,
    CONSTRAINT FK_Evento_Conferente FOREIGN KEY (IdConferente) REFERENCES Conferente(IdConferente)
);

CREATE TABLE Despesa (
    idDespesa INTEGER PRIMARY KEY,
    idFornecedor int,
    idEvento int,
    valorDespesa NUMERIC(10,2),
    vencimentoDespesa DATE,
    pagamentoDespesa DATE,
    descricao VARCHAR(120),
    situacao VARCHAR(45),
    
    CONSTRAINT FK_Despesa_Fornecedor FOREIGN KEY (idFornecedor) REFERENCES Fornecedor(idFornecedor),
    CONSTRAINT FK_Despesa_Evento FOREIGN KEY (idEvento) REFERENCES Evento(idEvento)
);