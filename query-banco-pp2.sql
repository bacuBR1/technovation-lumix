create database pp2;
use pp2;

create table editais(
	id integer not null primary key,
    nome varchar(255) not null unique key,
    descricao text not null,
    carga_minima float not null
);
desc editais;
select * from editais;

create table alunos (
	nome varchar(90) not null,
    id integer auto_increment not null primary key,
    matricula integer not null unique key,
    email varchar(80) null,
    senha varchar(255) not null 
);
select * from alunos;
alter table alunos modify column email varchar(255);
alter table alunos modify column nome varchar(255);
desc alunos;

create table professores (
	nome varchar(90) not null,
    id integer auto_increment not null primary key,
    matricula integer not null unique key,
    email varchar(80) null,
    senha varchar(10) not null
);

alter table professores modify column email varchar(255);
alter table professores modify column nome varchar(255);
alter table professores modify column senha varchar(255);
drop table alunos;
select * from professores;
desc professores;

create table intermeiaria(
	professores integer not null,
    alunos integer not null unique key,
    editais integer not null,
    
    foreign key (professores)
		references professores(id),
        
	foreign key (alunos)
		references alunos(id),
        
	foreign key (editais)
		references editais(id)
);
alter table intermeiaria add column id integer auto_increment primary key;
drop table intermeiaria;
desc intermeiaria;

create table tempo(
prof int not null,
edit int not null,
aluno int not null,
hora_inicio datetime not null,
hora_final datetime not null,


foreign key (prof) 
	references intermeiaria(professores),
    
foreign key (edit) 
	references intermeiaria(editais),
    
foreign key (aluno)
	references intermeiaria(alunos)
);
alter table tempo modify column prof int null;
alter table tempo modify column edit int null;
alter table tempo modify column aluno int null;
alter table tempo add column id_inter integer not null;
ALTER TABLE tempo
add constraint fk_tempo_intermediaria
foreign key (id_inter)
references intermediaria(id);
alter table tempo add column id integer auto_increment primary key;
drop table tempo;
desc tempo ;

ALTER TABLE alunos MODIFY COLUMN matricula VARCHAR(255) NOT NULL UNIQUE;
ALTER TABLE professores MODIFY COLUMN matricula VARCHAR(255) NOT NULL UNIQUE;

