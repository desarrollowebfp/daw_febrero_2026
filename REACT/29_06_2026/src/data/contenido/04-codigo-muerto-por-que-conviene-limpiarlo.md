# Código muerto: por qué conviene limpiarlo

Es habitual encontrar variables y fragmentos que nadie se atreve a borrar por miedo a romper algo:

```js
let temp = 5;
let temp2 = temp;
let tempFinal = temp2;
```

**Este tipo de código acumula deuda técnica.** Cada línea que no entiendes es una fuente potencial de errores futuros.

La solución no es ignorarlo, sino entenderlo.

## Cómo abordarlo con seguridad

- Usa control de versiones para poder revertir sin miedo
- Apóyate en pruebas automatizadas que confirmen que nada se rompe
- Refactoriza en pasos pequeños y verificables

Un código que entiendes es un código que puedes mantener.
