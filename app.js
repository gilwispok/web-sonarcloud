const express = require( 'express' );

const messageService = require('./services/message.service');

const app = express();

app.use( '*', (req, res) => {
    const nameInQuery = req.query.name;
    let messageTo = 'world!';
    if (nameInQuery) {
        messageTo = nameInQuery;
    }
    const fullMessage = messageService.hello( messageTo )
    return res.status(200).json({
        message: fullMessage
    });
} );

app.listen( 8000, () => {
    console.log( 'listening at port 8000' )
} );
