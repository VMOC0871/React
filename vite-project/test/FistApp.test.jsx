import { render } from "@testing-library/react"
import { FistApp } from "../src/FistApp"

describe('Pruebas en <FistApp /> ', ()=>{

    test('debe de hacer match con el snapshot', () => {
        const title = 'Hola soy Goku';
        const { container, getByText } = render( <FistApp title= { title }/>);
        expect(getByText(title)).toBeTruthy();
    });  
})