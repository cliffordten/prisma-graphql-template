const Mutation = {
   createUser(oarent, {data: {name, email}}, ctx, info){
     
     return {
      name,
      email
     };
   }
}

export default Mutation