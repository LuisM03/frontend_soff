
export default function OrdenarRecetas(props) {
  return (
    <div className={`flex items-center max-w-[1400px] mx-auto sm:px-4 mb-10 ${props.open}`}>
        <div className="text-[#757575]">
          <label>Categoría</label>
          <div className="flex p-4 items-center rounded h-9 border border-solid border-1 border-[#757575] bg-[#F8F8F8]">
              <select id="" name="" className="bg-[#F8F8F8]">
                  <option hidden selected>Seleccionar categoría</option>
                  <option value="">Alas</option>
                  <option value="">Hamburguesa</option>
                  <option value="">Perro caliente</option>
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


       
    </div>
  );
}