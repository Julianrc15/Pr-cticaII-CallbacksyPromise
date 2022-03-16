//arreglo de objetos:
let productos= [{
    referencia:01, descripcion:"Arroz integral", precioUnitario:5600, existencia:150},
    {referencia:02, descripcion:"Pan integral", precioUnitario:6600, existencia:250},
    {referencia:03, descripcion:"Arroz blanco", precioUnitario:3600, existencia:120},
    {referencia:04, descripcion:"Leche deslactosada", precioUnitario:4600, existencia:125},
    {referencia:05, descripcion:"Pan Blanco", precioUnitario:3600, existencia:85},
    {referencia:06, descripcion:"Paquete surtido de golosinas", precioUnitario:15600, existencia:185},
    {referencia:07, descripcion:"Fruta Congelada", precioUnitario:8600, existencia:98},
    {referencia:08, descripcion:"Spagettis", precioUnitario:5600, existencia:158},
    {referencia:09, descripcion:"Azucar", precioUnitario:1600, existencia:145},
    {referencia:10, descripcion:"Sopa instantanea", precioUnitario:2600, existencia:75}
]


//Variable para buscar:
let referencia = parseInt(prompt("Ingrese referencia del producto:"));

//Función principal.

function filtrarProductos(productos,referencia,buscarproducto){

    const productofiltrado = productos.filter(function(producto) {
        return(producto.referencia==referencia)
     })
     buscarproducto(productofiltrado)
}

//Llamar función principal:
// filtrarProductos(productos,referencia,function(productos){
//     if(productos.length > 0){
//         console.log(productos)
//     }else{
//         console.log("No encontrado")
//     }
// })

//promesa
function promesaFiltrarProducto(){
    return new Promise((resolve, reject) =>{
       console.log("Buscando el producto")
            setTimeout(() =>{

                //Llamar función principal:
                filtrarProductos(productos,referencia,function(productos){

                    if(productos.length > 0){
                    resolve(productos)
                    }else{
                        reject(console.log("producto no encontrado"))
                    }
                
                })            

            },2000)
    })
}

//llamar a la promesa:
promesaFiltrarProducto(productos)
    .then((data)=>{
        //Recorrer arreglo de objetos
        let html = "";
        html += `<table class="table table-striped table-hover"><th>Referencia</th><th>Descripción</th><th>Precio Unidad</th><th>Existencia</th>`
        for(let i=0; i<data.length; i++){
            html += `<tr>
                        <td>${data[i].referencia}</td>
                        <td>${data[i].descripcion}</td>
                        <td>${data[i].precioUnitario}</td>
                        <td>${data[i].existencia}</td>
                    </tr>`;
        }
        html += `</table>`
        document.getElementById('busqueda').innerHTML = html;
    })
    .catch((error)=>{
        let html = "";
        html += `<h5>Producto no encontrado</>`
           
        document.getElementById('busqueda').innerHTML = html;
    })

// ***************************************************

function promesaProductos(producto){
    return new Promise((resolve,reject)=>{

        setTimeout(() =>{
        let estado = true;
        if(estado){
            resolve(productos)
        }
        else{
            reject("No hay información para mostrar.")
        }
        },4000)
    })
}

//Ejecutar promesa
promesaProductos(productos)
    .then((data)=>{
        //Recorrer arreglo de objetos
        let html = "";
        html += `<table class="table table-striped table-hover"><th>Referencia</th><th>Descripción</th><th>Precio Unidad</th><th>Existencia</th>`
        for(let i=0; i<data.length; i++){
            html += `<tr>
                        <td>${data[i].referencia}</td>
                        <td>${data[i].descripcion}</td>
                        <td>${data[i].precioUnitario}</td>
                        <td>${data[i].existencia}</td>
                    </tr>`;
        }
        html += `</table>`
        document.getElementById('datos').innerHTML = html;
    })
    .catch((error)=>{
        
        document.getElementById('datos').innerHTML = error;
    })


  