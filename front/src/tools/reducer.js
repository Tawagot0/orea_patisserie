const reducer = (state, action) =>{
    switch(action.type){
        case 'LOGIN':
            return {
                ...state, 
                user:{
                    isLogged:true,
                    isAdmin: action.payload.admin,
                    ...action.payload
                    
                }
            }
            
        case 'LOGOUT':
            return {
                ...state, 
                user:{
                    isLogged:false,
                    isAdmin:false,
                    id:null
                }
            }
       
        default:
            return state;
    }
}

export {reducer}