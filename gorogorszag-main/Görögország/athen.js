var athenweb = document.getElementById("hely")
for (let i = 0; i < athenjs.length; i++) {
  athenweb.innerHTML += `  
    <div class="col-sm-6"">  
<button type="button" class="btn btn-primary modalisgomb" data-bs-toggle="modal" data-bs-target="#${i}">
      <h2>${athenjs[i].name}</h2>
      <img src="${athenjs[i].kep}" class="img-fluid" style="height: 90%;">
    </button>
    

    <div class="modal" id="${i}">
      <div class="modal-dialog">
        <div class="modal-content">
    
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">${athenjs[i].name}</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
    
          
          <div class="modal-body">
            <img src="${athenjs[i].kep}" class="img-fluid">
            <p>${athenjs[i].description}</p>
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
     