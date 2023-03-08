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

export default function FilterOrder() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stateD, dispatchD] = useReducer(reducerdate, initialStatedate);
  return (
    <div className="flex max-w-[1200px] mx-auto mb-2">
        <div className="text-[#757575]">
          <label className="ml-2">Ganancias</label>
          <div className="px-2 flex  items-center  rounded h-9  border border-solid border-1 border-[#757575]">
              <button className="pr-2" onClick={() => dispatchD({type: 'decrementD'})}>Min</button>
              <div className="px-6 flex  items-center h-9 bg-[#C6C6C6]  border border-solid border-1 border-[#757575]">
                  <label>{stateD.count}</label>
              </div>
              <button className="pl-2" onClick={() => dispatchD({type: 'incrementD'})}>Max</button>
          </div>
        </div>

        <div className="text-[#757575]">
            <label className="ml-2">N° de Ordenes</label>
            <div className="ml-2 px-2 flex  items-center rounded h-9  border border-solid border-1 border-[#757575]">
                <button className="pr-2" onClick={() => dispatch({type: 'decrement'})}>-</button>
                <div className="px-6 flex  items-center h-9 bg-[#C6C6C6]  border border-solid border-1 border-[#757575]">
                    <label>{state.count}</label>
                </div>
                <button className="pl-2" onClick={() => dispatch({type: 'increment'})}>+</button>
            </div>
        </div>

        <div className="text-[#757575]">
          <label className="ml-2">Estado</label>
          <div className="ml-2 flex p-4 items-center rounded h-9 border border-solid border-1 border-[#757575]">
              <select id="" name="">
                 <option value="">Activo</option>
                  <option value="">Inactivo</option>
              </select>
          </div>
        </div>

        <div className="text-[#757575]">
          <label className="ml-2">Proveedor</label>
          <div className="ml-2 flex p-4 items-center rounded h-9 border border-solid border-1 border-[#757575]">
              <select id="" name="">
                  <option hidden selected>Seleccionar proveedor</option>
                  <option value="">S.A.S CARNE</option>
                  <option value="">Postobon</option>
                  <option value="">PAN-JULIAN</option>
              </select>
          </div>
        </div>

        <div className="text-[#757575]">
          <label className="ml-2">Fecha</label>
          <div className="ml-2 flex p-4 items-center rounded h-9 border border-solid border-[#757575] bg-[#F8F8F8]">
             <input id="" type="date"  placeholder="Fecha" className="ml-2 bg-[#F8F8F8]"/>
          </div>
        </div>
    </div>
  );
}