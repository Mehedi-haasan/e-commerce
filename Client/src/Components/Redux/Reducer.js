import { ADD_IMAGE, ADD_TO_CART,LOGIN, CART_DELETE, 
     SEND_COLOUR, SEND_DATA,SEND_SIZE,WATCH_COLOUR,SEND_TIME,
      BUY_NOW, INPUT, SEND_RULES, LOGIN_OUT, TOTAL_PRICE,PRACTICE_SIZE, CART_LENGTH, NAME_EMAIL } from "./Constant";


const initialState={
            name:'',
            email:"",
            loggedIn:false,
            count:0,
            cartLength:0,


            id:0,
            image:"",
            heading:"",
            price:0,
            rating:"",
            stock:"",
            category:"",
            discount:"",

            

            totalPrice:0,

            amount:[],

            Product:[],


            time:[],

            rule:[],

            colour:[],

            image2:[],

            cart:[],

            watchColour:[],

            size:[],

            input:[],

            practicesize:[],

        }



export const reducer=(state=initialState, action)=>{
    switch (action.type) {

        case LOGIN:
            return{
            ...state,
            loggedIn:true,
        } 

        case TOTAL_PRICE:
            let total =state.totalPrice+(action.payload.price*action.payload.count);
            return{
            ...state,
            totalPrice:total
        } 
        
        

        case LOGIN_OUT:
            return{
            ...state,
            loggedIn:false,
        }

        case SEND_DATA:
           
                return{
                    ...state,
                    id:action.payload.id,
                    heading:action.payload.heading,
                    image:action.payload.image,
                    price:action.payload.price,
                    rating:action.payload.rating,
                    stock:action.payload.stock,
                    category:action.payload.category,
                    discount:action.payload.discount,
                    
                }

            case ADD_IMAGE:

                let image=action.payload.image;
                    return{
                    ...state,
                        image2:[image]
                    }  

            case PRACTICE_SIZE:

                    let Practicsize=action.payload.size;
                        return{
                        ...state,
                            practicesize:[Practicsize]
                        } 

                    
            case WATCH_COLOUR:
        
                    let watchColour=action.payload.colour;
                        return{
                        ...state,
                        watchColour:[watchColour]
                        }  
                    

            case SEND_SIZE:
        
                    let size=action.payload.size;
                        return{
                        ...state,
                        size:[size]
                        }  


            case SEND_RULES:
        
                let rule=action.payload.rules;
                    return{
                        ...state,
                            rule:[rule]
                        }  
                                    

                        
            case INPUT:
        
                let input=action.payload.input;
                            return{
                            ...state,
                            input:[input]
                            }  
                            
                            
    
             case SEND_TIME:
        
                    let time=action.payload.time;
                        return{
                        ...state,
                        time:[time]
                        }  
                            

            
            case SEND_COLOUR:

                    let colour=action.payload.colour;

                        return{
                        ...state,
                            colour:[colour]
                        }  
                        
                        

            case ADD_TO_CART:

                let cartProduct;
                cartProduct={
                    id:action.payload.id,
                    heading:action.payload.heading,
                    image:action.payload.picture,
                    price:action.payload.price,
                    size:action.payload.selectSize,
                    colour:action.payload.selectColour,
                    category:action.payload.category,
                    discount:action.payload.discount,
                    count:action.payload.count,
                    name:action.payload.Name,
                    email:action.payload.Email,
                    // password:action.payload.Password,

                }
                    return{
                    ...state,
                  
                        cart:[...state.cart, cartProduct]
                    } 



            case BUY_NOW:

                    let Product;
                    Product={
                        id:action.payload.id,
                        heading:action.payload.heading,
                        image:action.payload.picture,
                        price:action.payload.price,
                        size:action.payload.selectSize,
                        colour:action.payload.selectColour,
                        category:action.payload.category,
                        discount:action.payload.discount,
                        count:action.payload.count,
    
                    }
                        return{
                        ...state,
                            Product:[Product]
                        } 


                    
            case CART_DELETE:
                    let updateCart = state.cart.filter((item)=>item.id !== action.payload);

                        return{
                        ...state,
                            cart:[updateCart]
                        } 
                        
            case CART_LENGTH:
                let length = action.payload.len;
                return{
                ...state,
                    cartLength:length
           }
           case NAME_EMAIL:

            return{
            ...state,
                email:action.payload.email,
                name:action.payload.name,
        }          

    
        default:
           return state;
    }
}