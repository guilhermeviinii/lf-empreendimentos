import { NextApiResponse } from "next";
import { NextApiRequest } from "next-auth/_next";
import mailer from 'nodemailer'



export default function enviarEmail(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        console.log(req.body)
        const smtp = mailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: 'guilhermeviiniii@gmail.com',
                pass: '236658ca'
            },

        })

        const mail = {
            from: `"Adminstração LF - Empreendimentos" <guilhermeviiniii@gmail.com>`, // sender address
            to: 'luizfelipegm276@gmail.com', // list of receivers
            replyTo: req.body.email,
            subject: "FALE - CONOSCO", // Subject line
            text: req.body.message, // plain text body
            html: `
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
                    <b style=" font-size: 18px; text-decoration: none;"><strong style="color: #1c2e40; font-size: 20px;">Nome:</strong> ${req.body.name}</b><br/>
                    <b style=" font-size: 18px; text-decoration: none;"><strong style="color: #1c2e40; font-size: 20px;">Email: </strong>${req.body.email}</b><br/>
                    <b style=" font-size: 18px; text-decoration: none;"><strong style="color: #1c2e40; font-size: 20px;">Orçamento: </strong>${req.body.orcamento}</b><br/>
                    <b style=" font-size: 18px; text-decoration: none;"><strong style="color: #1c2e40; font-size: 20px;">Telefone / Whatsapp:</strong> ${req.body.telefone}</b><br/>
                    <b style=" font-size: 18px; text-decoration: none;"><strong style="color: #1c2e40; font-size: 20px;">Mensagem: </strong>${req.body.mensagem}</b><br/>
                </div>
            </div>
            `, // html body

        }
        smtp.sendMail(mail)
            .then(response => {
                smtp.close();
                res.send(response)
            })
            .catch(error => {
                smtp.close();
                res.send(error)
            })
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', "POST")
        res.status(405).end('Method not allowed')
    }

}
