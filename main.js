const listaHelados = [];

function Helado(nombreHelado, base){
    this.nombreHelado = nombreHelado;
    this.base = base;
}
let pedido = prompt("Desea pedir helado si/no");
while(pedido != "no"){
let nuevoHelado = prompt("Selecciones helado: h1, h2, h3, h4, h5, h6");
let nuevaBase = prompt("Ingrese el tipo de base: vegano/normal");
nuevoPedido = new Helado(nuevoHelado, nuevaBase);

listaHelados.push(nuevoPedido);

pedido = prompt("desea agregar otro helado? si/no");
}

// ordena los helados por tipo de base 


console.log(listaHelados.sort((v,n)=>{
    if(v.base < n.base){
        return -1;
    }else if (v.base > n.base){
        return 1;
    }else {
        return 0;
    }
}));






