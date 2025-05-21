const API_URL = "https://www.amiiboapi.com/api/amiibo/"

export const getAmiibos = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
}

export const getProductByPage = async (product,page) => {
    const response = await fetch(`${API_URL}/${product}?page=${page}`);
    const data = await response.json();
    return data;
}





export const getAmiiboByTail = async (tail) => {
    const response = await fetch(`${API_URL}/?tail=${tail}`);
    const data = await response.json();
    return data;
}


export const addProductToDb = async (product, object) => {
    try {
        const response = await fetch(`${API_URL}/${product}`, {
            method: "POST",
            body: JSON.stringify(object),
            headers: {
                "Content-type": "application/json; charset=utf-8"
            },

        })
        const data = await response.json()
        return data

    } catch (error) {
        console.log(error)
    }
}

export const updateProductToDb = async (product, object,id) => {
    try {
        const response = await fetch(`${API_URL}/${product}/${id}`, {
            method: "PUT",
            body: JSON.stringify(object),
            headers: {
                "Content-type": "application/json; charset=utf-8"
            },

        })
        const data = await response.json()
        return data

    } catch (error) {
        console.log(error)
    }
}

export const deleteProductById = async (product,id) => {
    try {
        const response = await fetch(`${API_URL}/${product}/${id}`, {
            method: "DELETE"
        })
        const data = await response.json()
        return data

    } catch (error) {
        console.log(error)
    }
}
