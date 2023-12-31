import { getHeroeById, getHeroesByOwner } from "../../src/bases/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Pruebas en 08-imp-exp', () => {

    test('getHeroById debe de retornar un héroe por ID', () =>{
        const id=1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({id:1, name:'Batman', owner:'DC'});
    });

    test('getHeroByOwner debe de retornar un arreglo por Owner (DC)', () =>{
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        
        expect(heroes.length).toBe(3);
        expect( heroes ).toEqual([
            {id: 1, name: 'Batman', owner:'DC'},
            {id: 3, name: 'Superman', owner:'DC'},
            {id: 4, name: 'Flash', owner:'DC'}
        ]);
        expect (heroes).toEqual(heroes.filter((heroe) => heroe.owner ===owner));
    });
    
    test('getHeroByOwner debe de retornar un arreglo por Owner(MARVEL)', () =>{
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        
        expect(heroes.length).toBe(2);
        expect( heroes ).toEqual([
            {id: 2, name: 'Spiderman', owner:'Marvel'},
            {id: 5, name: 'Wolverine', owner:'Marvel'}
        ]);
        expect (heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    });
}); 

