const postDataToFirebase = async(dbName,value,e) => {
  e.preventDefault();
   const data = await fetch(`https://vpart-ccd34-default-rtdb.firebaseio.com/${dbName}.json`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(value)
   });
   const body1 = await data.body;
   console.log(data);
   console.log(body1);
}

module.exports = {postDataToFirebase};