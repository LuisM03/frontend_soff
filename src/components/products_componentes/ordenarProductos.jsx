import { useReducer } from "react";

const initialState = {count: 1};
const initialStatedate = {count: 1000};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function reducerdate(stateD, actionD) {
  switch (actionD.type) {
    case 'incrementD':
      return {count: stateD.count + 1000};
    case 'decrementD':
      return {count: stateD.count - 1000};
    default:
      throw new Error();
  }
}

export default function OrdenarPtoductos(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stateD, dispatchD] = useReducer(reducerdate, initialStatedate);
  return (
    <div className={`flex items-center max-w-[1400px] mx-auto sm:px-4 mb-10 ${props.open}`}>
        <div className="text-[#757575]">
          <label>Nombre</label>
          <div className="flex p-4 items-center rounded h-9 border border-solid border-1 border-[#757575] bg-[#F8F8F8]">
              <select id="" name="" className="bg-[#F8F8F8]">
                  <option hidden selected>Seleccionar producto</option>
                  <option value="">Carne</option>
                  <option value="">Pan Hamburguesa</option>
                  <option value="">Salchicha</option>
              </select>
          </div>
        </div>
        
        <div className="text-[#757575]">
          <label className="ml-4">Estado</label>
          <div className="ml-4 flex p-4 items-center rounded h-9 border border-solid border-1 border-[#757575] bg-[#F8F8F8]">
              <select id="" name="" className="bg-[#F8F8F8]">
                 <option value="">Activo</option>
                  <option value="">Inactivo</option>
              </select>
          </div>
        </div>


        <div className="text-[#757575]">
          <label className="ml-4">Precio</label>
          <div className="ml-4 px-2 flex  items-center  rounded h-9  border border-solid border-1 border-[#757575] bg-[#F8F8F8]">
              <button className="pr-2 bg-[#F8F8F8]" onClick={() => dispatchD({type: 'decrementD'})}>Min</button>
              <div className="px-6 flex  items-center h-9 bg-[#F2F2F2]  border border-solid border-1 border-[#757575]">
                  <label>{stateD.count}</label>
              </div>
              <button className="pl-2 bg-[#F8F8F8]" onClick={() => dispatchD({type: 'incrementD'})}>Max</button>
          </div>
        </div>
    </div>
  );
}