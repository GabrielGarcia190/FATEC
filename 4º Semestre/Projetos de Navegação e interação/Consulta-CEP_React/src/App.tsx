


function App() {
  return (
    <div className="bg-[#111827] w-screen h-screen px-4 py-4  flex items-center justify-center">
          <div className="text-center">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white uppercase">consulta cep</label>
            <input type="tel" id="phone" className=" focus:ring-blue-500 focus:border-blue-500 p-2 bg-[#374151] text-sm text-white rounded-lg" placeholder="Insira um CEP"/>
        </div>
    </div>
  )
}

export default App
