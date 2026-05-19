fetch("user.json")
  .then(rep => {
    return rep.json()
  })
  .then(data => {
    console.log(data)
  });
