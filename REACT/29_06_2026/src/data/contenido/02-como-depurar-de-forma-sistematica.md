# Cómo depurar de forma sistemática

Cuando un programa falla sin causa aparente, la solución rara vez es el azar. Casi siempre hay una explicación concreta, y encontrarla es cuestión de método.

**Un buen proceso de depuración evita perder horas dando palos de ciego.**

## Un enfoque que funciona

1. Lee el mensaje de error completo, no solo la primera línea
2. Reproduce el fallo de forma consistente
3. Aísla la parte del código responsable
4. Formula una hipótesis y compruébala
5. Documenta la solución para tu yo del futuro

Un mensaje de commit claro como `fix: corrige validación de fechas nulas` vale mucho más que un genérico "arreglos varios".
