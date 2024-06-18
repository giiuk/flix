function Contato() {
    return ( 
        <>
        <input className= "border-transparent m-6 p-2 bg-clarinho rounded-full border-3 placeholder-white" type="text" id="buscar" placeholder='Digite sua busca'/>
        <hr className="h-px m-2 border-0 bg-roxinho p-0"></hr>

        <div class="ms-9 mr-9 p-10 mt-9 resize-none rounded-xl bg-clarinho border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-2xl mt-0 font-bold tracking-tight text-roxinho dark:text-white">Contato</h5>
        
        <h1 class="font-normal text-lg text-black dark:text-gray-400">Gioboxd</h1>
        <h1 class="font-normal text-lg text-black dark:text-gray-400">São Paulo - SP - Brasil</h1>
        <h1 class="font-normal text-lg text-black dark:text-gray-400">Tel: +55 (11) 000-0000</h1>
        <br />
        <h1 class="font-normal text-lg text-black dark:text-gray-400">Av. Lins de Vasconcelos, 1222 - Aclimação, São Paulo - SP, 
        01538-001</h1>
        <br />
        <h1 class="font-normal text-lg text-black dark:text-gray-400">Email: gioboxd@gmail.com.br</h1>

        <div className=" gap-x-2 gap-y-4 flex mt-5 ">
        <img class="rounded-t-lg h-8 w-8" src='/TwitterX.png' alt="TwitterX" />
        <img class="rounded-t-lg h-8 w-8" src='/Instagram.png' alt="Instagram" />
        </div>

            </div>
        </>
     );
}

export default Contato ;