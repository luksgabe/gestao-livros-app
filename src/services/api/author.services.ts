import { AUTHOR_ENDPOINTS } from "../../constants/services";
import { Api } from "../../providers";

const getAll = () => Api.get(`/${AUTHOR_ENDPOINTS.BASE}`);



export const AuthorService = {
    getAll,
}