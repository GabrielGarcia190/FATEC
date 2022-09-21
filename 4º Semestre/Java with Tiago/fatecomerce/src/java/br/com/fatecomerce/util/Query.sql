CREATE TABLE brand (
    id_brand SERIAL NOT NULL,
    name_brand VARCHAR(256) NOT NULL UNIQUE,
    description_brand TEXT,
    CONSTRAINT pk_brand PRIMARY KEY (id_brand)
);

