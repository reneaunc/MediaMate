const removeUserConsume = {
  
    removeUserConsumelist(title, username) {
      fetch("/api/removeuserconsume", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, title })
      })
        .then(res => res.json())
        .then(data => {
          if (data.status === 'success') {
            console.log(data.data.resultObj)
            alert("media added to consumelist")
          } else {
            console.error(data.message);
            alert(data.message);
          }
        })
        .catch(err => {
          console.error(err);
          alert(err);
        });
  
    }
  }
  
  
  export default removeUserConsume;