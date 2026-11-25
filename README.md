# Consulta de Recinto y Horario — DDEP Cobija, Pando

Aplicación web estática (HTML, CSS, JavaScript) para consultar por número de C.I. el recinto, día, turno/horario y butaca asignados (Examen de Competencia, Convocatoria Pública N.º 0001/2026).

- Datos: `data/asignaciones.js` (generado desde la lista oficial en PDF).
- Para actualizar con un CSV: `python3 tools/csv_a_js.py lista.csv` (columnas `ci,dep,cargo,recinto,dia,turno,butaca`).
- Publicar: GitHub → Settings → Pages → rama `main`, carpeta raíz.
