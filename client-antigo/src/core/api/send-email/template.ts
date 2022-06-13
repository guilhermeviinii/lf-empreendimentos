type TemplateEmail = {
  email: string;
  message: string;
  quotation: string;
  phone: string;
  name: string;
};

export function templateEmail({ email, message, quotation, phone, name }: TemplateEmail) {
  return {
    from: `"Adminstração LF - Empreendimentos" <guilhermeviiniii@gmail.com>`,
    to: "luizfelipegm276@gmail.com", // list of receivers
    replyTo: email,
    subject: "FALE - CONOSCO", // Subject line
    text: message, // plain text body
    html: modelEmail({ email, message, quotation, phone, name }),
  };
}

function modelEmail({ email, message, quotation, phone, name }): string {
  return `
    <div style="background-color: #f4f4f4;
                text-align: center;
                border-radius: 1rem;
    ">
        <h1 style="
                padding-top: 18px;
                color: #1c2e40;
                font-weight: bold;
                border-radius: 2.5rem;
                width: 100%;                           
         "> 
            Novo contato recebido:
        </h1>
        <div style="background-color: white;
                    text-align: center;
                    
                    
        ">
            <b style=" font-size: 18px; text-decoration: none;"><strong style="color: #1c2e40; font-size: 20px;">Nome:</strong> ${name}</b><br/>
            <b style=" font-size: 18px; text-decoration: none;"><strong style="color: #1c2e40; font-size: 20px;">Email: </strong>${email}</b><br/>
            <b style=" font-size: 18px; text-decoration: none;"><strong style="color: #1c2e40; font-size: 20px;">Orçamento: </strong>${quotation}</b><br/>
            <b style=" font-size: 18px; text-decoration: none;"><strong style="color: #1c2e40; font-size: 20px;">Telefone / Whatsapp:</strong> ${phone}</b><br/>
            <b style=" font-size: 18px; text-decoration: none;"><strong style="color: #1c2e40; font-size: 20px;">Mensagem: </strong>${message}</b><br/>
        </div>
    </div>
    `;
}
