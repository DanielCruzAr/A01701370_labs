# Consultas básicas en SQL

*Tablas:*
Materiales(Clave, Descripción, Costo)
Proveedores(RFC, RazonSocial)
Proyectos(Numero,Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad) 

### Consulta de una tabla completa
**Algebra relacional.**
materiales

**SQL**
select * from materiales 

Varilla 3/16	1000	100.00
Varilla 4/32	1010	115.00
Varilla 3/17	1020	130.00

num. de renglones: 44

### Selección
**Algebra relacional.**
SL{clave=1000}(materiales)

**SQL**
select * from materiales
where clave=1000 

1000	Varilla 3/16	100.00

num. de renglones: 1

### Proyección

**Algebra relacional.**
PR{clave,rfc,fecha} (entregan)

**SQL**
select clave,rfc,fecha from entregan

1000	AAAA800101   	1998-07-08 00:00:00.000
1010	BBBB800101   	2000-05-03 00:00:00.000
1020	CCCC800101   	2001-07-29 00:00:00.000

num. de renglones: 133

### Reunión Natural

**Algebra relacional.**
entregan JN materiales

**SQL**
select * from materiales,entregan
where materiales.clave = entregan.clave

1000	Varilla 3/16	100.00	1000	AAAA800101   	5000	1998-07-08 00:00:00.000	165.00
1000	Varilla 3/16	100.00	1000	AAAA800101   	5019	1999-08-08 00:00:00.000	254.00
1000	Varilla 3/16	100.00	1000	AAAA800101   	5019	2000-04-06 00:00:00.000	7.00

num. de renglones: 133

**Si algún material no ha se ha entregado ¿Aparecería en el resultado de esta consulta?** 
No porque la tabla Entregan únicamente contiene los materiales entregados

### Reunión con criterio específico

**Algebra relacional.**
entregan JN{entregan.numero <= proyectos.numero} proyectos

**SQL**
select * from entregan,proyectos
where entregan.numero < = proyectos.numero

1000	AAAA800101   	5000	1998-07-08 00:00:00.000	165.00	5000	Vamos Mexico
1200	EEEE800101   	5000	2000-03-05 00:00:00.000	177.00	5000	Vamos Mexico
1400	AAAA800101   	5000	2002-03-12 00:00:00.000	382.00	5000	Vamos Mexico

num. de renglones: 1000

## Unión (se ilustra junto con selección)

**Algebra relacional.**
SL{clave=1430}(entregan) UN SL{clave=1300}(entregan)

**SQL**
(select * from entregan where clave=1430)
union
(select * from entregan where clave=1300)

1300	GGGG800101   	5005	2002-06-10 00:00:00.000	521.00
1300	GGGG800101   	5005	2003-02-02 00:00:00.000	457.00
1300	GGGG800101   	5010	2003-01-08 00:00:00.000	119.00
1430	DDDD800101   	5003	1999-09-02 00:00:00.000	576.00
1430	DDDD800101   	5007	1998-01-09 00:00:00.000	13.00
1430	DDDD800101   	5007	2002-06-10 00:00:00.000	506.00

num. de renglones: 6

**¿Cuál sería una consulta que obtuviera el mismo resultado sin usar el operador Unión? Compruébalo.**
select * from entregan where clave=1430
select * from entregan where clave=1300

## Diferencia (se ilustra con selección )

**Algebra relacional.**
entregan - SL{clave=1000}(entregan)

**SQL**
(select * from entregan)
except
(select * from entregan where clave=1000)

1010	BBBB800101   	5001	2000-05-03 00:00:00.000	528.00
1010	BBBB800101   	5018	2000-11-10 00:00:00.000	667.00
1010	BBBB800101   	5018	2002-03-29 00:00:00.000	523.00

num. de renglones: 129

*Nuevamente, "minus" es una palabra reservada que no está definida en SQL Server, define una consulta que regrese el mismo resultado.*

### Producto cartesiano

**Algebra relacional.**
entregan X materiales

**SQL**
select * from entregan,materiales

1000	AAAA800101   	5000	1998-07-08 00:00:00.000	165.00	1000	Varilla 3/16	100.00
1010	BBBB800101   	5001	2000-05-03 00:00:00.000	528.00	1000	Varilla 3/16	100.00
1020	CCCC800101   	5002	2001-07-29 00:00:00.000	582.00	1000	Varilla 3/16	100.00

num. de renglones: 5852

**¿Cómo está definido el número de tuplas de este resultado en términos del número de tuplas de entregan y de materiales?**
Los datos se encuentran de izquierda a derecha comenzando por los de la tabla *entregan* y seguidos por 
los de la tabla *materiales*. Cada cambio de la columna *clave* en *materiales* es una tupla.


