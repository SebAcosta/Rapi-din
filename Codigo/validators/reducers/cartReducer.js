import {ADD_TO_CART, DELETE_ALL_ITEMS, DELETE_ITEM, MINUS_ITEM} from "../actions/cartActions";

const initialState = {
    total:0,
    items:[],
    cantidadItems:0,
}
export default (state=initialState, action)=>{
    const item = action.item;
    switch(action.type){
        case ADD_TO_CART:
            // console.log(action.item)
            if(item.quantity == 0){
                item.id = Math.floor(Math.random() * 1001).toString()
                item.quantity = item.quantity+1
                return{
                    total:state.total+action.item.cost,
                    items: state.items.concat(action.item),
                    cantidadItems: state.cantidadItems+1
                }
            } else {
                item.quantity = item.quantity+1
                return{
                    total:state.total+action.item.cost,
                    items: state.items,
                    cantidadItems: state.cantidadItems+1
                }
            }
        case MINUS_ITEM:
            if(action.item.quantity == 1){
                valorARestar = action.item.quantity
                action.item.quantity = 0
                const nuevoItems = state.items.filter(itemABorrar => itemABorrar.id != action.item.id)
                return{
                    total: state.total-(action.item.cost*valorARestar),
                    items: nuevoItems,
                    cantidadItems: state.cantidadItems-1
                }
            } else {
                action.item.quantity = action.item.quantity-1
                return{
                    total: state.total-action.item.cost,
                    items: state.items,
                    cantidadItems: state.cantidadItems-1
                }
            }
        case DELETE_ITEM:
            valorARestar = action.item.quantity
            action.item.quantity = 0
            const nuevoItems = state.items.filter(itemABorrar => itemABorrar.id != action.item.id)

            return{
                total: state.total-(action.item.cost*valorARestar),
                items: nuevoItems,
                cantidadItems: state.cantidadItems - valorARestar
            }
        case DELETE_ALL_ITEMS:
            for (let objeto of state.items){
                objeto.quantity = 0
            }
            const nuevoItems2 = []
            return{
                total: state.total*0,
                items: nuevoItems2,
                cantidadItems: state.cantidadItems*0,
            }
    }
    return state;
}