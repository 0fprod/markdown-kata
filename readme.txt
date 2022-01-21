- Interpretar linea de comandos 
- Leer un fichero markdown
- Escribir un fichero markdown
- Transformar lineas de markdown 
      - Se puede abordar linea a linea? o un enlace puede estar en varias lineas?
      - Las notas pueden estar todas al final del fichero?
      - Reglas de transformacion
      
Artefacto que lee la linea de terminal. 
Artefacto que lee un flujo de lineas de un fichero - Quality attributes / Arquitectura / Requisitos no funcionales      
      
      Requisitos no funcionales:
            - Encoding, que encoding?
            - Tamaño de los ficheros 
            - Si el idioma repercuta en algo.
            - Tiempo de respuesta, ¿es importante?
            - Que cosas hay en el docker? Que limitaciones tengo? Nos tenemos que ceñir a algun stack? 
            - Los archivos son locales? o vienen de red? - Inicialmente es un fichero local en disco. 
            - Que pasa si el disco duro esta lleno?
            - Batch processing
      
 
 Transformar / Reglas de transformacion:  - TODO list:
 
Happy path todo en una linea: ver doc
             
Input:
[this book](https://codigosostenible.com) and some other text.
Output:
this book [^anchor1] and some other text.

[^anchor1]: https://codigosostenible.com             

Happy path con varios enlaces:

Input:
[this book](https://codigosostenible.com) and some other text [and another link](http://url.com)
Output:
this book [^anchor1] and some other text and some other text and another link [^anchor2]

[^anchor1]: https://codigosostenible.com             
[^anchor2]: https://url.com

Casos limite:

Enlaces duplicados:

Input:

[this book](https://codigosostenible.com) and some other text [and another link](https://codigosostenible.com)

Output:

this book [^anchor1] and some other text and some other text and another link [^anchor1]

[^anchor1]: https://codigosostenible.com 