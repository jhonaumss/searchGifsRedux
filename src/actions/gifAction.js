import { getGifs } from "../helpers/getGifs";

const LISTA_GIFS = 'LISTA_GIFS';
const LISTA_GIFS_VACIA = 'LISTA_GIFS_VACIA';


export const gifAction = ( category ) => {
    return  async(dispatch) => {
     const gifs = await getGifs(category);
     if(gifs.length === 0){
         dispatch(gifsError());
     }else{
         dispatch(listarGifs(gifs));
     }
    }
}

const listarGifs = data => (
    {
        type:LISTA_GIFS,
        payload: {
            data,
            loading:true
        }
    }
)

const gifsError = () => (
    {
        type: LISTA_GIFS_VACIA
    }
)
