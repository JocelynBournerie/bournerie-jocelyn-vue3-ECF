const API_URL = "https://www.amiiboapi.com/api/amiibo/"

export const getAmiibos = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
}




export const getAmiiboByTail = async (tail) => {
    const response = await fetch(`${API_URL}/?tail=${tail}`);
    const data = await response.json();
    return data;
}

