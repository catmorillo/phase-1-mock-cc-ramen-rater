
document.addEventListener("DOMContentLoaded"),


fetch (`http://localhost:3000/${/ramens/}`)
.then(response => response.json())
.then(ramensdata => renderRamens(ramensdata))

method: 'GET',
headers: {
   'Content-type': 'application/json'
}
body: JSON.stringify(ramens)

function renderRamens(ramens)

  ramens.forEach(ramens)=>{}

  renderHeader(ramens);
  renderFooter(ramens); 
  
    const ramen =('document.querySelector("#ramen-menu")')
    const menu = document.createElement('div') 
    menu.className = 'ramen-menu'

    ramenMenu.append(menu)
    const img = document.createElement('img')
    img.src = src="./assets/image-placeholder.jpg"
    img.className = 'ramen-img'
    menu.append(img)






    






   

//.catch((error) => console.log(error));
