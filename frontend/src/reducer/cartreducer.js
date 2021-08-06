import {addToCart,removeForCart,shippingSaveData,savePaymentMethod} from '../action/types'

export const cartreducer=(state={cartitems:[],  shippingData:{}},action)=>{
    switch(action.type){
        case addToCart:{
            const item=action.payload
            const exist=state.cartitems.find((x) => x.product===item.product)
         
            if(exist){
                return{...state,
                    
                    cartitems:state.cartitems.map((x)=> x.product===exist.product?item:x)
                    
                }
                }
                else{
                    return{...state,
                    
                        cartitems:[...state.cartitems,item]
                        
                    }
                }
            
        }
        case removeForCart:
            return{
                ...state,
                cartitems:state.cartitems.filter((x)=> x.product!== action.payload)
            }
            case shippingSaveData:
            return{
                ...state,
              shippingData: action.payload
            }
            case savePaymentMethod:
                return{
                    ...state,
                 paymentMethod: action.payload
                }

        default: return {...state}
    }


}