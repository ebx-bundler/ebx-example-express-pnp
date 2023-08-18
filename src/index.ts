import express from 'express';
import chalk from 'chalk';
const app = express();

app.get('/', (req, res) => res.send('Hello world'));

app.listen(3000, () => {
    console.log(chalk.green`server started at :3000`);
});