const chai = require('chai');

const chaiHttp = require('chai-http');
const app = require('../../app');

chai.use(chaiHttp);

const { expect } = chai;



describe('Testando API chocolate', function() {
  it('Testando se retorno é 200', async function() {
    const response = await chai.request(app).get('/chocolates/total');
    expect(response.status).to.be.equal(200);
  });
  it('Testando se retorna o numero total de chocolate', async function() {
    const outPut = [
      {
        "totalChocolates": 4
      }
    ]

    const response = await chai.request(app).get('/chocolates/total');
    expect(response.body).to.be.deep.equal(outPut);
  });
  it('Testando endpoint search', async function() {
    const response = await chai.request(app).get('/chocolates/search?name=Mo');

    const outPut = [  
    {
      "id": 3,
      "name": "Mon Chéri",
      "brandId": 2
    },
    {
      "id": 4,
      "name": "Mounds",
      "brandId": 3
    }]

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(outPut);
  });
});
