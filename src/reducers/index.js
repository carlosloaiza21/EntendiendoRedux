const initialState = {
  data:
  [
    {
      nombre:"carlos"
    }
  ]
}

export const cambio = (state=initialState,action)=>{
  switch (action.type) {
    case "CAMBIAR_NOMBRE":
      return {
        ...state,
        data:[{
          nombre: action.persona
        }]
      }
    default:
      return state
  }
}
