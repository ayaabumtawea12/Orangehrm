import addUser from '../../support/helpers/signupHelper';
const adduser:addUser = new addUser;

describe('Conduit: Signup Account', () => {
  /*
    it('Coundit: creatre new account ', () => {
  cy.request({
  
  method:'POST',
  url:'https://conduit.productionready.io/api/users',
  body:
  {
    users:{
  username:`ayamtawea${Math.round(1000 * (Math.random()))}`,
  email:`ayamtawea${Math.round(1000 * (Math.random()))}@test.com`,
  password:"123456",
  }
  }
  })
  
      //expect(true).to.equal(true)
    })
    */
    it('Coundit: creatre new account ', () => {
      const apipayload={
      user:{
      username:`ayamtawea${Math.round(1000 * (Math.round(1)))}`,
      email:`ayamtawea${Math.round(1000 * (Math.random()))}@test.com`,
      password:'123456',
      }
      }
      adduser.conduitNewUserAPI(apipayload).then((response)=>{
      expect(response.status).to.equal(201);
      })
      })
  })
  