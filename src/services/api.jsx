async function addUser({nombre, apellido, email, password, repassword}) {
    const body = JSON.stringify({
        nombre,
        apellido,
        email,
        password,
        repassword,
    })
    const response = await fetch("http://localhost:3000/register", {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body: body
    })

    return await response.json()
}

async function login({email, password}) {
    const body = JSON.stringify({
        email,
        password,
    })
    const response = await fetch ("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-type" : "aplication/json"
        },
        body: body
    })

    return await response.json()
}

export {addUser, login}
