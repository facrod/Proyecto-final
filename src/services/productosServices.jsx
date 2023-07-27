async function getProducts() {
    const response = await fetch("http://localhost:3000/productos")
    return await response.json()
}
async function addProducts ({producto, descripcion, categoria, precio, stock}) {
    const body = {
        producto,
        descripcion,
        categoria,
        precio,
        stock,
    }
    const repsonse = await fetch("http://localhost:3000/productos", {
        method: "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(body)
    })

    return await repsonse.json()
}

export {getProducts, addProducts} 