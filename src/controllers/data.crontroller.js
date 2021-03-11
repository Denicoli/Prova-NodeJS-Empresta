const repository = require('../repositories/repository');
const pageScraper = require('../scraper/scrap');

exports.list = async (req, res) => {
    try {
        const data = await repository.list();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Fail to load data.' });
    }
};

exports.create = async (req, res) => {
    try {
        await repository.create({
            tipo: req.body.tipo,
            cpf: req.body.cpf,
            nome: req.body.nome,
            matricula: req.body.matricula
        });
        res.status(201).send({ message: 'Success on creating data!' });
    } catch (e) {
        res.status(500).send({ message: 'Fail to create data.' });
    }
};

exports.populate = async (req, res) => {
    pageScraper().then(scrap => {
        scrap.forEach(data => repository.create(data))
    }).catch(error => console.log(error));

    res.status(201).send({ message: 'Populating database...' });
}