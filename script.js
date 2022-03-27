function data(){
    fetch("https://api.icndb.com/jokes/").then(response=>{
        if (!response.ok){
            throw Error("error")
        }
      return response.json()
    }).then(data => {
        const content = data.value.map(d=>{
            return `<div class="changes"><p>ID : ${d.id} 
			<br>
			 Jest : ${d.joke}</p></div>`
        }).join("")
        document.querySelector("#api")
        .insertAdjacentHTML('afterbegin',content)
    }).catch(error =>{
        console.log(error)
    })
}
data();