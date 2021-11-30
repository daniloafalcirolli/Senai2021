drop database if exists empresa;
create database empresa;
use empresa;
create table funcionarios(
	matricula int(6) not null primary key,
	nome_completo varchar(256) not null,
	data_desligamento date not null,
	ultimo_salario decimal(6,2) not null
);