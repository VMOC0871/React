import {getUser, getUsuarioActivo} from '../../src/bases/05-funciones';

describe('pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser ={
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toEqual(user);
    })

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name= 'Victor';
        const user = getUsuarioActivo(name);

        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        })
    })
});