import RequestException from "./exceptions/exceptions-request.js";


export async function getJson(url) {
    try {
        const response = await fetch(url);
        const jsonBody = await response.json();
        return jsonBody;

    } catch (e) {
        throw new RequestException("Erro ao realizar requisição");
    }

}