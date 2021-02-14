const gifsInitialState = {
    data:[],
    loading: false
};
const LISTA_GIFS = "LISTA_GIFS";
const LISTA_GIFS_VACIA = 'LISTA_GIFS_VACIA';

export default (state = gifsInitialState, action) =>{
    switch(action.type){
        case LISTA_GIFS:{
            return action.payload;
        }
       
        case LISTA_GIFS_VACIA:{
            return state;
        }

        default: return state;
    };
}