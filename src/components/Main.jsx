import { useState } from "react";

export default function Main(){
  const[nome, setNome] = useState("") //(0) number  // (true) boolean
  const[telefone, setTelefone] = useState(0)
  const[listaComtatos, setlistaContatos] = useState([]);

 const registrar =() =>{
  event.preventDefault();
  alert("Olá")
 };


    return(
      <main>


<form action="" onSubmit={registrar}>
<label htmlFor="nome"> Nome:  </label>
         <input
         type="text"
         name="" id=""
         onChange={(event)=> setNome(event.target.value)}
         />
        
         <button>Cadastre-se</button>
         {nome}

         <br/>
         <br/>
    
<label htmlFor="telefone"> Telefone:  </label>
         <input
         type="tel"
         name="" id=""
         onChange={(event)=> setTelefone(event.target.value)}
         />
        
          <button>Cadastre-se</button>
         {telefone}

    
</form>

  
      </main>
    );
}