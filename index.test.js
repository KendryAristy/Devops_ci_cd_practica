const { JSDOM } = require('jsdom');
const fs = require('fs');

describe('Prueba de página "Bienvenidos"', () => {
    test('La página muestra "Bienvenidos"', () => {
        const html = fs.readFileSync('index.html', 'utf-8');
        const dom = new JSDOM(html);
        const h1 = dom.window.document.querySelector('h1');
        expect(h1.textContent).toBe('Bienvenidos a mi Practica Final Devops CI/CD con Github!');
    });
});
