import { getSaludo } from "../../src/bases/02-template-string";

describe('Pruebas en 02-templeate-srting', () =>{
    test('getSaludo debe retornar "Hola Victor"', () => {
        const nombre = 'Victor';
        const message = getSaludo(nombre);

        expect (message).toBe(`Hola ${nombre}`)
    })
})