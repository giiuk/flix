import {useState} from 'react'
import emailjs from '@emailjs/browser'


function Forms(){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

function sendEmail(e){
    e.preventDefault();

    if(name === '' || email ==='' || message ===''){
        alert("Preencha todos os campos");
        return;
    }

    const templateParams ={
        from_name: name,
        message: message,
        email: email
    }
  emailjs.send("service_xh744aj","template_sgsd9ah", templateParams,"vuqW4LG7fon8_9jf5")
  .then((response) => {
    alert("EMAIL ENVIADO", response.status, response.text)
    setName('')
    setEmail('')
    setMessage('')
  }, (err)=>{
    console.log("ERRO: " ,err)
  })
}

<style>
    
</style>
return(
    <div className="ms-9 mr-9 p-10 mt-9 resize-none rounded-xl bg-clarinho border-4 border-gray-200 ">
    <h5 className="mb-4 text-2xl mt-0 font-bold tracking-tight text-roxinho dark:text-white">Mande uma mensagem</h5>

    <form className="form" onSubmit={sendEmail}>
        <input  
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
        />
        
        <input 
            className="input"
            type="text" 
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
        />

        <textarea
            className="textarea"
            type="text" 
            placeholder="Digite sua mensagem"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
        />
        
        <input type="submit" className="button" value="Enviar"/>
    </form>
</div>

)

}

export default Forms;