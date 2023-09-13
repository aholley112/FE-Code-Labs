//fetch API built in the browser. The idea of the facade pattern is to create your own API that hides away complex or repetitive code so that you are left with a clean and easy to use API. The benefits of this is not only clean code that is easy and fun to work with, but your code is also much easier to refactor when the complex code behind your facade needs to change.


function getUsers() {
    return getFetch('https://jsonplaceholder.typicode.com/users')
  }
  
  function getUserPosts(userId) {
    return getFetch('https://jsonplaceholder.typicode.com/posts', {
      userId: userId
    })
  }
  
  getUsers().then(users => {
    users.forEach(user => {
      getUserPosts(user.id).then(posts => {
        console.log(user.name)
        console.log(posts.length)
      })
    })
  })
  
  // function getFetch(url, params = {}) {
  //   const queryString = Object.entries(params).map(param => {
  //     return `${param[0]}=${param[1]}`
  //   }).join('&')
  //   return fetch(`${url}?${queryString}`, {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" }
  //   }).then(res => res.json())
  // }
  
  function getFetch(url, params = {}) {
    return axios({
      url: url,
      method: "GET",
      params: params
    }).then(res => res.data)
  }