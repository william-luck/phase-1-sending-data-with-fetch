// Add your code here

// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     });

function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify({
        name: `${userName}`,
        email: `${userEmail}`})
    })  
        .then(response => response.json())
        .then(data => appendDOM(data))
        .catch(error => appendDOM2(error))      
}

function appendDOM(data) {
    const p = document.createElement('p')
    p.textContent = data.id;
    document.body.appendChild(p)
}

function appendDOM2(error) {
    const p = document.createElement('p');
    p.textContent = error.message; 
    document.body.appendChild(p)
}



submitData('Billy', 'luck.william.h@gmail.com')