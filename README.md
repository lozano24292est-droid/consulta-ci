# Consulta de Recinto y Horario — DDEP Cobija, Pando

Aplicación web estática (HTML, CSS, JavaScript) para consultar por número de C.I. el recinto y horario/turno asignado.

## Cargar la lista real
1. Exporte la lista a CSV con columnas: `ci,nombre,recinto,direccion,fecha,turno,horario`
2. `python3 tools/csv_a_js.py lista.csv`
3. Suba los cambios a GitHub.

## Publicar
GitHub → Settings → Pages → Branch `main` / root.
