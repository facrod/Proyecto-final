async function getProducts() {
    const response = await fetch("http://localhost:3000/productos")
    return await response.json()
}

export default getProducts