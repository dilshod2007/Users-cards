  const $result = document.querySelector("#result")
  

fetch(`https://dummyjson.com/users ` )
  .then(response => response.json())
  .then(data => renderUsers(data))


   const renderUsers = (data) => {
  data.users.forEach(users => {
    const $div = document.createElement("div");
    $div.className = "card"
    $div.innerHTML =`
    <img src="${users.image}"/>
     <h3>${users.firstName}</h3> 
     <h3>${users.lastName}</h3>
    <strong>${users.age}</strong>
     <p>  ${users.gender}</p>
     <p>${users.email}</p>
     <strong>  Tel: ${users.phone}</strong>
     <strong>${ users.birthDate}</strong>
     <br>
     <button data-users-id class="delete">Delete</button>
     `
    $result.appendChild($div)
})
}
const handleUsersAction = (e) =>{
  if(e.target.classList.contains("delete")){
    const id = e.target.dataset.usersId;
    const userAgree = confirm("Are yoy sure  to delete this user?");
    if(userAgree){
      fetch(`https://dummyjson.com/users/${id}`,{method:"GET"})
        .then(response => response.json())
        .then(data => console.log(data))
    } 
  }
}
 $result.addEventListener("click", (event) => {
   if(event.target.matches("button")){
     event.target.parentNode.remove()
   }
 })



$result.addEventListener("click" , handleUsersAction)


   