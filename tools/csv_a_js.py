#!/usr/bin/env python3
"""Convierte un CSV a data/asignaciones.js
Uso: python3 tools/csv_a_js.py lista.csv
Columnas: ci,nombre,recinto,direccion,fecha,turno,horario (las vacías son opcionales)"""
import csv, json, sys
src = sys.argv[1]
rows = []
with open(src, encoding='utf-8-sig', newline='') as f:
    for r in csv.DictReader(f):
        rows.append({k.strip().lower(): (v or '').strip() for k, v in r.items() if k})
with open('data/asignaciones.js', 'w', encoding='utf-8') as o:
    o.write('window.ASIGNACIONES = ' + json.dumps(rows, ensure_ascii=False, separators=(',', ':')) + ';\n')
print(len(rows), 'registros escritos')
