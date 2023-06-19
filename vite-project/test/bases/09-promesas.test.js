import { getHeroeByIdAsync } from "../../src/bases/09-promesas";


describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIsAsync debe de retornar un héroe', (done) => {
        const  id= 1;
        getHeroeByIdAsync( id ).then(hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
             done();
        })
    });
    test('getHeroeByIsAsync debe de obtener un error si heroe no existe', (done) => {
        const  id= 100;
        getHeroeByIdAsync( id ).catch(error => {
            expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
             done();
        })
    });
})