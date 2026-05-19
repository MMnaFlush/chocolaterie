fetch("chocolatier.json")
  .then(rep => {
    return rep.json()
  })
  .then(data => {
    console.log(data)
  });
