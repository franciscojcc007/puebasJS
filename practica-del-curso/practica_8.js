const eliminarCiertoPatron = (cadena="", patron="")=>{
   (!cadena)
      ?console.warn("No ingresaste una cadena de texto")
      :(!patron)
         ?console.warn("No ingresaste un patron de búsqueda")
         :console.info(cadena.replace(new RegExp(patron,"ig"),""));

}
eliminarCiertoPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");