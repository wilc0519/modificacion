import { buscarDiasYHorasDeCoincidenciasDeEmpleados } from "../dias-y-horas-de-coincidencia"
import { Empleado } from "../empleado"
import { HorasTrabajasPorDia } from "../horas-trabajadas-por-dia"

const reneLunes = new HorasTrabajasPorDia("MO", 1000, 1200)
const reneMartes = new HorasTrabajasPorDia("TU", 1000, 1200)
const reneJueves = new HorasTrabajasPorDia("TH", 100, 300)
const reneSabado = new HorasTrabajasPorDia("SA", 1400, 1800)
const reneDomingo = new HorasTrabajasPorDia("SU", 2000, 2100)

const rene = new Empleado("RENE", [reneLunes, reneMartes, reneJueves, reneSabado, reneDomingo]);

const astridLunes = new HorasTrabajasPorDia("MO", 1000, 1200)
const astridJueves = new HorasTrabajasPorDia("TH", 1200, 1400)
const astridDomingo = new HorasTrabajasPorDia("SU", 2000, 2100)
const astrid = new Empleado("ASTRID", [astridLunes, astridJueves, astridDomingo])

'ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00'

const andresLunes = new HorasTrabajasPorDia("MO", 1000, 1200)
const andresJueves = new HorasTrabajasPorDia("TH", 1200, 1400)
const andresDomingo = new HorasTrabajasPorDia("SU", 2000, 2100)

const andres = new Empleado('ANDRES', [andresLunes, andresJueves, andresDomingo])

test('Rene y Astrid coincidieron los días y horas  ("MO", 10:00-12:00) y ("SU",20:00-21:00)', () => {
    const empleados = [rene, astrid]
    const resultado = buscarDiasYHorasDeCoincidenciasDeEmpleados(empleados)
    expect(resultado).toEqual(['RENE-ASTRID=MO10:00-12:00,SU20:00-21:00'])
})

test('Rene y Andres coincidieron los días y horas  ("MO", 10:00-12:00) y ("SU",20:00-21:00)', () => {
    const empleados = [rene, andres]
    const resultado = buscarDiasYHorasDeCoincidenciasDeEmpleados(empleados)
    expect(resultado).toEqual(['RENE-ANDRES=MO10:00-12:00,SU20:00-21:00'])
})

test('Astrid y Andres coincidieron los días y horas  ("MO", 10:00-12:00), ("TH", 12:00-14:00) y ("SU",20:00-21:00)', () => {
    const empleados = [astrid, andres]
    const resultado = buscarDiasYHorasDeCoincidenciasDeEmpleados(empleados)
    expect(resultado).toEqual(['ASTRID-ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00'])
})