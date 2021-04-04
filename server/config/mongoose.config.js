const mongoose = require('mongoose');
    uri = `mongodb://localhost/${process.env.DB_NAME}`;


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));