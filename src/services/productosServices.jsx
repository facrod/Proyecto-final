
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
    const response = await fetch("http://localhost:3000/productos", {
        method: "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(body)
    })

    return await response.json()
}

async function getProductById(id) {
    const response = await fetch(`http://localhost:3000/productos/${id}`)
    return await response.json()
}

async function deleteProducts (id){
    const reponse = await fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE",
    })
    return await reponse.json()
}

async function uploadPictureProduct ({id, token, file}) {
    const formData = new FormData()
    formData.append("file", file)

    const response = await fetch (`http://localhost:3000/productos/foto/${id}`, {
        method: "PUT",
        headers: {
            authorization: `Bearer ${token}`
        },
        body: formData
    })

    return await response.json()


}

export {getProducts, addProducts, getProductById, deleteProducts, uploadPictureProduct} 