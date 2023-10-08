//const baseurl =cypress.config().baseurl
//url signup
const baseUrl='https'
export const URLs={
users:`${baseUrl}/api/users`
}


class addUser{
    
    
  
      conduitNewUserAPI(payload:any){
        return cy.request({
        
        method:'POST',
        url:URLs.users,
        body:payload
        })
        }
        
}    

export default addUser;