Exercise

The company ACME offers their employees the flexibility to work the hours they want. But due to some external circumstances they need to know what employees have been at the office within the same time frame

The goal of this exercise is to output a table containing pairs of employees and how often they have coincided in the office.

Input: the name of an employee and the schedule they worked, indicating the time and hours. This should be a .txt file with at least five sets of data. You can include the data from our examples below:

Example 1:

INPUT
RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00- 21:00
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00


OUTPUT:
ASTRID-RENE: 2
ASTRID-ANDRES: 3
RENE-ANDRES: 2

Example 2:

INPUT:
RENE=MO10:15-12:00,TU10:00-12:00,TH013:00-13:15,SA14:00-18:00,SU20:00-21:00
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00

OUTPUT:
RENE-ASTRID: 3

Once you have finished the exercise, please upload the solution to GitHub and send us the link. Don’t forget to include a README.md file. Your README should include an overview of your solution, an explanation of your architecture, an explanation of your approach and methodology and instructions how to run the program locally.

We evaluate many aspects, including how well your code is structured, applied pattern designs, testing and the quality of your solution.

The solution shouldn’t need any UI, a console application is good enough.

When submitting your exercise, be sure to avoid including compiled files as this could be considered malware. Please include the proper instructions to compile your project in the README file

This exercise should be completed within a week. If for some reason you are unable to finish on time, please let us know.
## EJECUTAR PROGRAMA EN LOCAL

1. En la raíz del proyecto ejecutar el siguiente comando para instalar dependencias 

npm install

2. Para correr el programa, en la raíz del proyecto ejecutar en consola 

npm start

3. Para correr las pruebas unitarias en la raíz  del proyecto  ejecutar en consola

npm test

## DESCRIPCION ACERCA DE LA SOLUCION

1. Se lee el archivo txt

2. Convertimos lo leído en un arreglo con la información de los empleados

3. Creamos las clase Empleado y HorasTrabajadasPortDia

4. Convertimos el arreglo con la información de los empleados a objetos de tipo empleado

5. Calculamos coincidencias 

## ARQUITECTURA

TypeScript fue usado como lenguaje de programación
Jest el framework de pruebas fue usado para escriibir las pruebas unitarias
En la clase Empleado se guarda el nombre y las horas trabajadas por día
En la clase HorasTrabajadasPorDia se guarda el día, la hora de inicio y la hora de fin.
Estas clases fueron creadas para organizar la información
Para cada uno de los pasos descritos en la solución fueron creadas funciones separadas.

## METODOLOGIA

TDD fue la metodología usada para la elaboración del proyecto para la solución del problema, esto quiere decir que primero se creo una prueba unitaria que fallara, luego se escribe código para que la prueba se ejecute correctamente, una vez que las pruebas pasen se refactoriza el código.