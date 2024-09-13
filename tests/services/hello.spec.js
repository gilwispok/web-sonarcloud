const messageService = require('../../services/message.service');

describe( 'Test message service', () => {
    it( 'should say Hi with a name', () => {
        const result = messageService.hello( 'Fulanito' );
        expect( result ).toBe( 'Hi Fulanito' );
    } );
} );