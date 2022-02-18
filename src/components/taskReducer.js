
export const taskReducer=(state=[], action)=>{

    switch (action?.type) {
         case 'add':
            return [...state,action.payload];

        case 'delete':
            return state.filter(task=> task.id!== action.payload);
        
        case 'check':
            //tengo el boolean en un pedazo action check
            return state.map(task=> 
                {
                    if(task.id===action.payload){
                        return{
                            ...task, done:action.check
                        }
                    }else{
                        return task;
                    }
                }
                 )

        default:
            return state;
    }
}