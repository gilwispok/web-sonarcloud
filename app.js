const express = require( 'express' );

const app = express();

app.use( '*', (re, res) => {
    return res.status(200).json({
        message: 'ok'
    });
} );

app.listen( 8000, () => {
    console.log( 'listening at port 8000' )
} );
