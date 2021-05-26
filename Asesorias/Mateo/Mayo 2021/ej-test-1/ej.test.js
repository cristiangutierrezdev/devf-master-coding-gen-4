const { concat } = require('./ej')

describe('concat text', () => {
    test('should concat two different strings', () => {
        const expected = 'Hola'
        const result = concat('Ho', 'la')

        expect(result).toBe(expected)
        
    })
    
})