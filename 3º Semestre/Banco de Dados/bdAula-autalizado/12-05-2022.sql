toc.dat                                                                                             0000600 0004000 0002000 00000013014 14237330155 0014441 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP                           z            aula_3si    13.1    13.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         �           1262    57962    aula_3si    DATABASE     h   CREATE DATABASE aula_3si WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE aula_3si;
                postgres    false         �            1259    57963    cargo    TABLE     �   CREATE TABLE public.cargo (
    idcar integer NOT NULL,
    nomecar character varying(50) NOT NULL,
    salario numeric(10,2),
    sigla character varying(3)
);
    DROP TABLE public.cargo;
       public         heap    postgres    false         �            1259    66127 
   dependente    TABLE     s   CREATE TABLE public.dependente (
    iddep integer NOT NULL,
    nome character varying(100),
    datanasc date
);
    DROP TABLE public.dependente;
       public         heap    postgres    false         �            1259    66132    depfunc    TABLE     e   CREATE TABLE public.depfunc (
    iddepfun integer NOT NULL,
    idfun integer,
    iddep integer
);
    DROP TABLE public.depfunc;
       public         heap    postgres    false         �            1259    57968    funcionario    TABLE     �   CREATE TABLE public.funcionario (
    idfun integer NOT NULL,
    nome character varying(50) NOT NULL,
    cpf character varying(20) NOT NULL,
    idcar integer,
    filhos smallint,
    dataadm date
);
    DROP TABLE public.funcionario;
       public         heap    postgres    false         �          0    57963    cargo 
   TABLE DATA           ?   COPY public.cargo (idcar, nomecar, salario, sigla) FROM stdin;
    public          postgres    false    200       3003.dat �          0    66127 
   dependente 
   TABLE DATA           ;   COPY public.dependente (iddep, nome, datanasc) FROM stdin;
    public          postgres    false    202       3005.dat �          0    66132    depfunc 
   TABLE DATA           9   COPY public.depfunc (iddepfun, idfun, iddep) FROM stdin;
    public          postgres    false    203       3006.dat �          0    57968    funcionario 
   TABLE DATA           O   COPY public.funcionario (idfun, nome, cpf, idcar, filhos, dataadm) FROM stdin;
    public          postgres    false    201       3004.dat -           2606    57967    cargo cargo_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.cargo
    ADD CONSTRAINT cargo_pkey PRIMARY KEY (idcar);
 :   ALTER TABLE ONLY public.cargo DROP CONSTRAINT cargo_pkey;
       public            postgres    false    200         3           2606    66131    dependente dependente_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.dependente
    ADD CONSTRAINT dependente_pkey PRIMARY KEY (iddep);
 D   ALTER TABLE ONLY public.dependente DROP CONSTRAINT dependente_pkey;
       public            postgres    false    202         5           2606    66136    depfunc depfunc_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.depfunc
    ADD CONSTRAINT depfunc_pkey PRIMARY KEY (iddepfun);
 >   ALTER TABLE ONLY public.depfunc DROP CONSTRAINT depfunc_pkey;
       public            postgres    false    203         /           2606    57974    funcionario funcionario_cpf_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.funcionario
    ADD CONSTRAINT funcionario_cpf_key UNIQUE (cpf);
 I   ALTER TABLE ONLY public.funcionario DROP CONSTRAINT funcionario_cpf_key;
       public            postgres    false    201         1           2606    57972    funcionario funcionario_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.funcionario
    ADD CONSTRAINT funcionario_pkey PRIMARY KEY (idfun);
 F   ALTER TABLE ONLY public.funcionario DROP CONSTRAINT funcionario_pkey;
       public            postgres    false    201         8           2606    66142    depfunc depfunc_iddep_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.depfunc
    ADD CONSTRAINT depfunc_iddep_fkey FOREIGN KEY (iddep) REFERENCES public.dependente(iddep) ON UPDATE RESTRICT ON DELETE RESTRICT;
 D   ALTER TABLE ONLY public.depfunc DROP CONSTRAINT depfunc_iddep_fkey;
       public          postgres    false    203    202    2867         7           2606    66137    depfunc depfunc_idfun_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.depfunc
    ADD CONSTRAINT depfunc_idfun_fkey FOREIGN KEY (idfun) REFERENCES public.funcionario(idfun) ON UPDATE RESTRICT ON DELETE RESTRICT;
 D   ALTER TABLE ONLY public.depfunc DROP CONSTRAINT depfunc_idfun_fkey;
       public          postgres    false    201    2865    203         6           2606    57975 "   funcionario funcionario_idcar_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.funcionario
    ADD CONSTRAINT funcionario_idcar_fkey FOREIGN KEY (idcar) REFERENCES public.cargo(idcar) ON UPDATE RESTRICT ON DELETE RESTRICT;
 L   ALTER TABLE ONLY public.funcionario DROP CONSTRAINT funcionario_idcar_fkey;
       public          postgres    false    201    2861    200                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            3003.dat                                                                                            0000600 0004000 0002000 00000000243 14237330155 0014241 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Gerente TI	10000.00	GTI
2	Programador	6500.00	PRO
3	Web design	3200.00	WED
4	Analista TI	7800.00	ATI
5	Adm Banco Dados	6800.00	DBA
7	Suporte TI	2500.00	STI
\.


                                                                                                                                                                                                                                                                                                                                                             3005.dat                                                                                            0000600 0004000 0002000 00000000204 14237330155 0014240 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Jose  Mava	2000-10-15
2	Mauro Mava	1986-09-10
3	Antonio Souza	1981-01-13
4	Claudia Soares	1987-02-07
5	Ana Robeti	2007-12-31
\.


                                                                                                                                                                                                                                                                                                                                                                                            3006.dat                                                                                            0000600 0004000 0002000 00000000043 14237330155 0014242 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	1	3
2	3	5
3	4	4
4	5	1
5	5	2
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             3004.dat                                                                                            0000600 0004000 0002000 00000000404 14237330155 0014241 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        6	Antonio Perez	666777888-66	\N	\N	\N
1	Adauto Souza	111222333-11	1	1	2016-11-10
2	Marina Terra	222333444-22	2	\N	1987-05-20
3	Marcos Robeti	333444555-33	4	1	2000-10-15
4	Adilson Soares	444555666-44	3	1	2005-10-10
5	Loren Mava	555666777-55	4	2	2010-03-30
\.


                                                                                                                                                                                                                                                            restore.sql                                                                                         0000600 0004000 0002000 00000011650 14237330155 0015372 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE aula_3si;
--
-- Name: aula_3si; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE aula_3si WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Portuguese_Brazil.1252';


ALTER DATABASE aula_3si OWNER TO postgres;

\connect aula_3si

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cargo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cargo (
    idcar integer NOT NULL,
    nomecar character varying(50) NOT NULL,
    salario numeric(10,2),
    sigla character varying(3)
);


ALTER TABLE public.cargo OWNER TO postgres;

--
-- Name: dependente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dependente (
    iddep integer NOT NULL,
    nome character varying(100),
    datanasc date
);


ALTER TABLE public.dependente OWNER TO postgres;

--
-- Name: depfunc; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.depfunc (
    iddepfun integer NOT NULL,
    idfun integer,
    iddep integer
);


ALTER TABLE public.depfunc OWNER TO postgres;

--
-- Name: funcionario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.funcionario (
    idfun integer NOT NULL,
    nome character varying(50) NOT NULL,
    cpf character varying(20) NOT NULL,
    idcar integer,
    filhos smallint,
    dataadm date
);


ALTER TABLE public.funcionario OWNER TO postgres;

--
-- Data for Name: cargo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cargo (idcar, nomecar, salario, sigla) FROM stdin;
\.
COPY public.cargo (idcar, nomecar, salario, sigla) FROM '$$PATH$$/3003.dat';

--
-- Data for Name: dependente; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.dependente (iddep, nome, datanasc) FROM stdin;
\.
COPY public.dependente (iddep, nome, datanasc) FROM '$$PATH$$/3005.dat';

--
-- Data for Name: depfunc; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.depfunc (iddepfun, idfun, iddep) FROM stdin;
\.
COPY public.depfunc (iddepfun, idfun, iddep) FROM '$$PATH$$/3006.dat';

--
-- Data for Name: funcionario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.funcionario (idfun, nome, cpf, idcar, filhos, dataadm) FROM stdin;
\.
COPY public.funcionario (idfun, nome, cpf, idcar, filhos, dataadm) FROM '$$PATH$$/3004.dat';

--
-- Name: cargo cargo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargo
    ADD CONSTRAINT cargo_pkey PRIMARY KEY (idcar);


--
-- Name: dependente dependente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dependente
    ADD CONSTRAINT dependente_pkey PRIMARY KEY (iddep);


--
-- Name: depfunc depfunc_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.depfunc
    ADD CONSTRAINT depfunc_pkey PRIMARY KEY (iddepfun);


--
-- Name: funcionario funcionario_cpf_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.funcionario
    ADD CONSTRAINT funcionario_cpf_key UNIQUE (cpf);


--
-- Name: funcionario funcionario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.funcionario
    ADD CONSTRAINT funcionario_pkey PRIMARY KEY (idfun);


--
-- Name: depfunc depfunc_iddep_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.depfunc
    ADD CONSTRAINT depfunc_iddep_fkey FOREIGN KEY (iddep) REFERENCES public.dependente(iddep) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- Name: depfunc depfunc_idfun_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.depfunc
    ADD CONSTRAINT depfunc_idfun_fkey FOREIGN KEY (idfun) REFERENCES public.funcionario(idfun) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- Name: funcionario funcionario_idcar_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.funcionario
    ADD CONSTRAINT funcionario_idcar_fkey FOREIGN KEY (idcar) REFERENCES public.cargo(idcar) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        