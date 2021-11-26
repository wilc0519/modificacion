import { buscarCoindidenciasDeEmpleados } from "../calcular-coincidencias";
import { Empleado } from "../empleado";
import { HorasTrabajasPorDia } from "../horas-trabajadas-por-dia";

const reneLunes = new HorasTrabajasPorDia("MO", 1000, 1200)
const reneMartes = new HorasTrabajasPorDia("TU", 1000, 1200)
const reneJueves = new HorasTrabajasPorDia("TH",100, 300)
const reneSabado = new HorasTrabajasPorDia("SA",1400, 1800)
const reneDomingo = new HorasTrabajasPorDia("SU",2000, 2100)

const rene = new Empleado("RENE", [reneLunes, reneMartes, reneJueves, reneSabado, reneDomingo]);

const astridLunes = new HorasTrabajasPorDia("MO", 1000, 1200)
const astridJueves = new HorasTrabajasPorDia("TH", 1200, 1400)
const astridDomingo = new HorasTrabajasPorDia("SU", 2000, 2100)
const astrid = new Empleado("ASTRID", [astridLunes, astridJueves, astridDomingo])

'ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00'

const andresLunes = new HorasTrabajasPorDia("MO", 1000,1200)
const andresJueves = new HorasTrabajasPorDia("TH", 1200, 1400)
const andresDomingo = new HorasTrabajasPorDia("SU", 2000, 2100)

const andres = new Empleado('ANDRES', [andresLunes, andresJueves, andresDomingo])

test('Astrid y Rene trabajaron 2 veces en el mismo horario y dia', () => {
    const empleados = [rene, astrid]
    const resultado = buscarCoindidenciasDeEmpleados(empleados)
    expect(resultado).toEqual(["RENE-ASTRID: 2"])
});

test('Rene y Andres coincidieron 2 veces en el horario de trabajo', () => {
    const empleados = [rene, andres]
    const resultado = buscarCoindidenciasDeEmpleados(empleados)
    expect(resultado).toEqual(["RENE-ANDRES: 2"])
});

test('Astrid y Andres coincidieron 2 veces en el horario de trabajo', () => {
    const empleados = [astrid, andres ]
    const resultado = buscarCoindidenciasDeEmpleados(empleados)
    expect(resultado).toEqual(["ASTRID-ANDRES: 3"])
});

test('Retorna las coincidencias en el horario de trabajo Rene, andres y Astrid', () => {
    const empleados = [rene, astrid, andres ]
    const resultado = buscarCoindidenciasDeEmpleados(empleados)
    expect(resultado).toEqual(['RENE-ASTRID: 2', 'RENE-ANDRES: 2', 'ASTRID-ANDRES: 3'])
});