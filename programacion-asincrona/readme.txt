articulo: JavaScript Asíncrono
https://jonmircha.com/javascript-asincrono

Procesamiento Single-thread y Multi-thread.

Procesamiento single-thread (monohilo) se refiere a la ejecución de una sola secuencia de instrucciones en un solo hilo de ejecución. En este modelo:

Un hilo: Solo hay un hilo de ejecución que maneja todas las tareas.

Secuencialidad: Las tareas se ejecutan una después de otra, de manera secuencial.

Bloqueo: Si una tarea toma mucho tiempo (por ejemplo, una operación de E/S o una computación intensiva), puede bloquear la ejecución de otras tareas, ya que no hay otros hilos para continuar el procesamiento.

Simplitud: Es más fácil de programar y depurar debido a la ausencia de problemas de sincronización entre múltiples hilos.

Ejemplo en JavaScript:
JavaScript, en el navegador, utiliza un modelo de ejecución single-threaded para su Event Loop. Aunque JavaScript puede manejar operaciones asíncronas (como setTimeout, fetch), todo esto se maneja dentro de un único hilo de ejecución.

Procesamiento multi-thread (multihilo) se refiere a la ejecución de múltiples hilos de ejecución en paralelo. En este modelo:

Múltiples hilos: Hay varios hilos de ejecución que pueden manejar tareas simultáneamente.
Paralelismo: Las tareas pueden ejecutarse en paralelo, lo que puede mejorar el rendimiento y la eficiencia, especialmente en sistemas con múltiples núcleos de CPU.

No Bloqueo: Una tarea intensiva en un hilo no bloquea la ejecución de otras tareas en otros hilos.

Complejidad: La programación multihilo es más compleja debido a la necesidad de manejar la sincronización entre hilos, evitar condiciones de carrera, y asegurar la consistencia de los datos compartidos.

Ejemplo en JavaScript:
Aunque JavaScript en el navegador es single-threaded, se puede utilizar Web Workers para crear hilos de ejecución separados que pueden ejecutarse en paralelo. Los Web Workers permiten ejecutar scripts en hilos de fondo, sin interferir con el hilo principal que maneja la interfaz de usuario.

Operaciones de CPU y Operaciones de I/O.

Operaciones de CPU
Las operaciones de CPU (Unidad Central de Procesamiento) son aquellas que requieren el procesamiento intensivo de datos por parte de la CPU. Estas operaciones suelen ser rápidas y computacionalmente intensivas, ya que implican cálculos y manipulación de datos en la memoria.

Características de las Operaciones de CPU:

Intensidad Computacional: Implican cálculos aritméticos, lógicos y de manipulación de datos.

Uso de la CPU: Utilizan directamente el poder de procesamiento de la CPU.

Ejemplos: Cálculos matemáticos complejos, procesamiento de algoritmos, compilación de código, encriptación y decriptación, procesamiento de imágenes y gráficos, etc.

Operaciones de I/O
Las operaciones de I/O (Input/Output) son aquellas que implican la entrada y salida de datos, generalmente hacia y desde dispositivos periféricos como discos duros, redes, teclados, pantallas, etc. Estas operaciones suelen ser más lentas en comparación con las operaciones de CPU porque dependen de la velocidad de los dispositivos externos.

Características de las Operaciones de I/O:

Intensidad de E/S: Involucran lectura y escritura de datos.

Dependencia de Dispositivos: La velocidad de estas operaciones depende de los dispositivos de entrada/salida.

Ejemplos: Lectura/escritura de archivos en disco, envío/recepción de datos a través de una red, interacción con bases de datos, lectura de datos desde un sensor, etc.

Operaciones Concurrentes y Paralelas.
Operaciones Bloqueantes y No Bloqueantes.
Operacions Síncronas y Asíncronas. 