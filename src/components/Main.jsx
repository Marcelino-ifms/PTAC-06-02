import { useState } from "react";

export default function Main(){
  const[nome, setNome] = useState("") //(0) number  // (true) boolean
  const[telefone, setTelefone] = useState(0)
    return(
      <main>

<label> Nome:
         <input
         type="text"
         name="" id=""
         onChange={(event)=> setNome(event.target.value)}
         />
         </label>
         <button>Cadastre-se</button>
         {nome}

         <br/>
         <br/>
    
<label> Telefone:
         <input
         type="text"
         name="" id=""
         onChange={(event)=> setTelefone(event.target.value)}
         />
         </label>
          <button>Cadastre-se</button>
         {telefone}

  
      </main>
    );
}