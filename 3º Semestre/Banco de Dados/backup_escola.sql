PGDMP                         z            escola    13.3    13.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24659    escola    DATABASE     f   CREATE DATABASE escola WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE escola;
                postgres    false            �            1259    24675    aluno    TABLE     v   CREATE TABLE public.aluno (
    idalu integer NOT NULL,
    nome character varying(50) NOT NULL,
    idcid integer
);
    DROP TABLE public.aluno;
       public         heap    postgres    false            �            1259    24665    cidade    TABLE     w   CREATE TABLE public.cidade (
    idcid integer NOT NULL,
    nome character varying(50) NOT NULL,
    idest integer
);
    DROP TABLE public.cidade;
       public         heap    postgres    false            �            1259    24685    curso    TABLE     c   CREATE TABLE public.curso (
    idcur integer NOT NULL,
    nome character varying(50) NOT NULL
);
    DROP TABLE public.curso;
       public         heap    postgres    false            �            1259    24690    cursoalu    TABLE     h   CREATE TABLE public.cursoalu (
    idcursoalu integer NOT NULL,
    idalu integer,
    idcur integer
);
    DROP TABLE public.cursoalu;
       public         heap    postgres    false            �            1259    24660    estado    TABLE     d   CREATE TABLE public.estado (
    idest integer NOT NULL,
    nome character varying(50) NOT NULL
);
    DROP TABLE public.estado;
       public         heap    postgres    false            �          0    24675    aluno 
   TABLE DATA           3   COPY public.aluno (idalu, nome, idcid) FROM stdin;
    public          postgres    false    202   �       �          0    24665    cidade 
   TABLE DATA           4   COPY public.cidade (idcid, nome, idest) FROM stdin;
    public          postgres    false    201          �          0    24685    curso 
   TABLE DATA           ,   COPY public.curso (idcur, nome) FROM stdin;
    public          postgres    false    203   [       �          0    24690    cursoalu 
   TABLE DATA           <   COPY public.cursoalu (idcursoalu, idalu, idcur) FROM stdin;
    public          postgres    false    204   �       �          0    24660    estado 
   TABLE DATA           -   COPY public.estado (idest, nome) FROM stdin;
    public          postgres    false    200   �       5           2606    24679    aluno aluno_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.aluno
    ADD CONSTRAINT aluno_pkey PRIMARY KEY (idalu);
 :   ALTER TABLE ONLY public.aluno DROP CONSTRAINT aluno_pkey;
       public            postgres    false    202            3           2606    24669    cidade cidade_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.cidade
    ADD CONSTRAINT cidade_pkey PRIMARY KEY (idcid);
 <   ALTER TABLE ONLY public.cidade DROP CONSTRAINT cidade_pkey;
       public            postgres    false    201            7           2606    24689    curso curso_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.curso
    ADD CONSTRAINT curso_pkey PRIMARY KEY (idcur);
 :   ALTER TABLE ONLY public.curso DROP CONSTRAINT curso_pkey;
       public            postgres    false    203            9           2606    24694    cursoalu cursoalu_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.cursoalu
    ADD CONSTRAINT cursoalu_pkey PRIMARY KEY (idcursoalu);
 @   ALTER TABLE ONLY public.cursoalu DROP CONSTRAINT cursoalu_pkey;
       public            postgres    false    204            1           2606    24664    estado estado_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.estado
    ADD CONSTRAINT estado_pkey PRIMARY KEY (idest);
 <   ALTER TABLE ONLY public.estado DROP CONSTRAINT estado_pkey;
       public            postgres    false    200            ;           2606    24680    aluno aluno_idcid_fkey    FK CONSTRAINT     w   ALTER TABLE ONLY public.aluno
    ADD CONSTRAINT aluno_idcid_fkey FOREIGN KEY (idcid) REFERENCES public.cidade(idcid);
 @   ALTER TABLE ONLY public.aluno DROP CONSTRAINT aluno_idcid_fkey;
       public          postgres    false    201    2867    202            :           2606    24670    cidade cidade_idest_fkey    FK CONSTRAINT     y   ALTER TABLE ONLY public.cidade
    ADD CONSTRAINT cidade_idest_fkey FOREIGN KEY (idest) REFERENCES public.estado(idest);
 B   ALTER TABLE ONLY public.cidade DROP CONSTRAINT cidade_idest_fkey;
       public          postgres    false    201    2865    200            <           2606    24695    cursoalu cursoalu_idalu_fkey    FK CONSTRAINT     |   ALTER TABLE ONLY public.cursoalu
    ADD CONSTRAINT cursoalu_idalu_fkey FOREIGN KEY (idalu) REFERENCES public.aluno(idalu);
 F   ALTER TABLE ONLY public.cursoalu DROP CONSTRAINT cursoalu_idalu_fkey;
       public          postgres    false    2869    204    202            =           2606    24700    cursoalu cursoalu_idcur_fkey    FK CONSTRAINT     |   ALTER TABLE ONLY public.cursoalu
    ADD CONSTRAINT cursoalu_idcur_fkey FOREIGN KEY (idcur) REFERENCES public.curso(idcur);
 F   ALTER TABLE ONLY public.cursoalu DROP CONSTRAINT cursoalu_idcur_fkey;
       public          postgres    false    204    203    2871            �   \   x�3�H,��W��)K�4�2�t�KTpN,�IT�/�J�4�2��H�I	�Vq�r��Մ�f�'rq�rz�'�+8��%敤����� ��      �   F   x�3��J�I-�4�2�-J��L2�9=KJ�s9��L8��Js2�R@R���@e��I���\1z\\\ jI�      �   7   x�3����+��2�����2�t�2��J,K�2���2�JMI-����� c
�      �   (   x�3�4�4�2�&\ƜƜ�\&���F\�@Ҕ+F��� K�,      �      x�3��2��u�2������� %hO     