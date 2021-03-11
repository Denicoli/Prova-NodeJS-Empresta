const puppeteer = require('puppeteer');

async function scraper() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('http://www.portaltransparencia.gov.br/servidores/consulta?orgaosServidorExercicio=OR21000&tipo=2&ordenarPor=nome&direcao=asc', { waitUntil: "domcontentloaded", timeout: 180000 });
    await page.waitForSelector("#lista")

    const scrap = await page.evaluate(async () => {
        const columns = { 1: "tipo", 2: "cpf", 3: "nome", 6: "matricula" };

        const repeater = async () => {
            await new Promise(resolve => setTimeout(() => resolve(true), 1000));
            const table = [...document.querySelectorAll("#lista > tbody > tr")];

            if (!table || table.length == 0) return await repeater();

            return table.map(row => {
                const result = {};
                Object.keys(columns).forEach(key => result[columns[key]] = row.children.item(key).innerText);
                return result;
            })
        }

        return await repeater();
    })

    browser.close();

    return scrap;

}
module.exports = scraper;
