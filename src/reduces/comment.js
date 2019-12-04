export default function Comments(state=[{id:1, text:"tetstststst"}],action) {
    if (action.type !=undefined ) {
        switch (action.type){
            case "ADD_COMMENT" : {
                return [...state, action.data];
            }

            case "DEC" : {
                return state - action.data;
            }

            default : {
                return state
            }
        }
    }
    return state
}


