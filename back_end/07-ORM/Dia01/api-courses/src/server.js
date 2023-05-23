const app = require('./app');

const PORT = process.env.SERVER_PORT || 3001;

app.listen(PORT, () => console.log(`Running at ${PORT}`));