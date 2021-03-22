# Consultas básicas en SQL

Tablas:
Materiales(Clave, Descripción, Costo)
Proveedores(RFC, RazonSocial)
Proyectos(Numero,Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad) 

### Consulta de una tabla completa
Algebra relacional.
materiales

SQL
select * from materiales 

num. de renglones: 

### Selección
Algebra relacional.
SL{clave=1000}(materiales)

SQL
select * from materiales
where clave=1000 

num. de renglones:
