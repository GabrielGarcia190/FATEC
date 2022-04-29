PGDMP     8                    z            aula    13.3    13.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16498    aula    DATABASE     d   CREATE DATABASE aula WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE aula;
                postgres    false            �            1259    16499    cargo    TABLE     �   CREATE TABLE public.cargo (
    idcar integer NOT NULL,
    nomecar character varying(50) NOT NULL,
    salario numeric(10,2),
    sigla character varying(3)
);
    DROP TABLE public.cargo;
       public         heap    postgres    false            �            1259    16502 
   dependente    TABLE     s   CREATE TABLE public.dependente (
    iddep integer NOT NULL,
    nome character varying(100),
    datanasc date
);
    DROP TABLE public.dependente;
       public         heap    postgres    false            �            1259    16505    depfunc    TABLE     e   CREATE TABLE public.depfunc (
    iddepfun integer NOT NULL,
    idfun integer,
    iddep integer
);
    DROP TABLE public.depfunc;
       public         heap    postgres    false            �            1259    16508    funcionario    TABLE     �   CREATE TABLE public.funcionario (
    idfun integer NOT NULL,
    nome character varying(50) NOT NULL,
    cpf character varying(20) NOT NULL,
    idcar integer,
    filhos smallint
);
    DROP TABLE public.funcionario;
       public         heap    postgres    false            �          0    16499    cargo 
   TABLE DATA           ?   COPY public.cargo (idcar, nomecar, salario, sigla) FROM stdin;
    public          postgres    false    200          �          0    16502 
   dependente 
   TABLE DATA           ;   COPY public.dependente (iddep, nome, datanasc) FROM stdin;
    public          postgres    false    201   �       �          0    16505    depfunc 
   TABLE DATA           9   COPY public.depfunc (iddepfun, idfun, iddep) FROM stdin;
    public          postgres    false    202   1       �          0    16508    funcionario 
   TABLE DATA           F   COPY public.funcionario (idfun, nome, cpf, idcar, filhos) FROM stdin;
    public          postgres    false    203   i       -           2606    16512    cargo cargo_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.cargo
    ADD CONSTRAINT cargo_pkey PRIMARY KEY (idcar);
 :   ALTER TABLE ONLY public.cargo DROP CONSTRAINT cargo_pkey;
       public            postgres    false    200            /           2606    16514    dependente dependente_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.dependente
    ADD CONSTRAINT dependente_pkey PRIMARY KEY (iddep);
 D   ALTER TABLE ONLY public.dependente DROP CONSTRAINT dependente_pkey;
       public            postgres    false    201            1           2606    16516    depfunc depfunc_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.depfunc
    ADD CONSTRAINT depfunc_pkey PRIMARY KEY (iddepfun);
 >   ALTER TABLE ONLY public.depfunc DROP CONSTRAINT depfunc_pkey;
       public            postgres    false    202            3           2606    16518    funcionario funcionario_cpf_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.funcionario
    ADD CONSTRAINT funcionario_cpf_key UNIQUE (cpf);
 I   ALTER TABLE ONLY public.funcionario DROP CONSTRAINT funcionario_cpf_key;
       public            postgres    false    203            5           2606    16520    funcionario funcionario_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.funcionario
    ADD CONSTRAINT funcionario_pkey PRIMARY KEY (idfun);
 F   ALTER TABLE ONLY public.funcionario DROP CONSTRAINT funcionario_pkey;
       public            postgres    false    203            6           2606    16521    depfunc depfunc_iddep_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.depfunc
    ADD CONSTRAINT depfunc_iddep_fkey FOREIGN KEY (iddep) REFERENCES public.dependente(iddep) ON UPDATE RESTRICT ON DELETE RESTRICT;
 D   ALTER TABLE ONLY public.depfunc DROP CONSTRAINT depfunc_iddep_fkey;
       public          postgres    false    201    2863    202            7           2606    16526    depfunc depfunc_idfun_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.depfunc
    ADD CONSTRAINT depfunc_idfun_fkey FOREIGN KEY (idfun) REFERENCES public.funcionario(idfun) ON UPDATE RESTRICT ON DELETE RESTRICT;
 D   ALTER TABLE ONLY public.depfunc DROP CONSTRAINT depfunc_idfun_fkey;
       public          postgres    false    2869    203    202            8           2606    16531 "   funcionario funcionario_idcar_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.funcionario
    ADD CONSTRAINT funcionario_idcar_fkey FOREIGN KEY (idcar) REFERENCES public.cargo(idcar) ON UPDATE RESTRICT ON DELETE RESTRICT;
 L   ALTER TABLE ONLY public.funcionario DROP CONSTRAINT funcionario_idcar_fkey;
       public          postgres    false    203    2861    200            �   �   x�-�A
�0D��O�H�U�����J�t�� �&%��oJ��c�L��xc��9��8G;v$�{�x���yTe"��N&�b�	�bQ�����������Dd�����mߎ�(�N�I5����tB�KC�=3"�t�(�      �   y   x�%ͱ�0������+;���U7$XY\5C�
K@:��	�t�=�N��-97�G�33IM�-��{�nW��/�-��d��#!��<�Z^Y+隶�"�'��֙�ўi��M$��"�u �      �   (   x��9 0İ���{�M��HT�(�f�ò.�̿�G}Lu5      �   �   x�%�1�0Eg��@��8iWv�0v1�!���e��qy��o��[�l��5D!�C��j��*����wH)�0��KI��p��}ȶ3x��yz&oY�]^y-�b�. H�HU��@�u�AP"�EZ�v�C������'c�a1(     