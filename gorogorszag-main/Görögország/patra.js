var patraweb = document.getElementById("hely")
for (let i = 0; i < patrajs.length; i++) {
  patraweb.innerHTML += `  
    <div class="col-sm-6">  
<button type="button" class="btn btn-primary modalisgomb" data-bs-toggle="modal" data-bs-target="#${i}">
      <h2>${patrajs[i].name}</h2>
      <img src="${patrajs[i].kep}" class="img-fluid" style="height: 90%;"> 
    </button>
    

    <div class="modal" id="${i}">
      <div class="modal-dialog">
        <div class="modal-content">
    
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">${patrajs[i].name}</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
    
          
          <div class="modal-body">
            <img src="${patrajs[i].kep}" class="img-fluid">
            <p>${patrajs[i].description}</p>
          </div>
    
          <!-- Modal footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
          </div>
    
        </div>
      </div>
    </div>
    </div>
    `
}
     