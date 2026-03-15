import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';





export default function FAQ() {

    const faqs = [
        {
            question: "O que é o eQuadros?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti qui sit? Iste sapiente quis quibusdam consequuntur. Quas blanditiis voluptas, sequi hic, laborum eaque placeat voluptatum, corporis tempora id exercitationem."
        },
        {
            question: "Quem pode usar?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti qui sit? Iste sapiente quis quibusdam consequuntur. Quas blanditiis voluptas, sequi hic, laborum eaque placeat voluptatum, corporis tempora id exercitationem."
        },
        {
            question: "Como me inscrevo?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti qui sit? Iste sapiente quis quibusdam consequuntur. Quas blanditiis voluptas, sequi hic, laborum eaque placeat voluptatum, corporis tempora id exercitationem."
        },
        {
            question: "Quais são os benefícios?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti qui sit? Iste sapiente quis quibusdam consequuntur. Quas blanditiis voluptas, sequi hic, laborum eaque placeat voluptatum, corporis tempora id exercitationem."
        },
        {
            question: "O eQuadros é gratuito?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti qui sit? Iste sapiente quis quibusdam consequuntur. Quas blanditiis voluptas, sequi hic, laborum eaque placeat voluptatum, corporis tempora id exercitationem."
        }
    ]



    return (
        <section className="bg-white pb-16 pt-5">
            <div className="container-max mx-auto w-[90%] lg:w-[80%] ">
                <div className="text-center">
                    <h2 className="text-[36px] font-bold text-secondary px-4 lg:px-[100px]">
                        Perguntas <span className="text-primary">Frequentes</span>
                    </h2>
                    <div className="w-full lg:w-[600px] mx-auto mt-4">
                        <p className="text-sm text-secondary ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Odit, hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, hic.
                        </p>
                    </div>
                </div>
                <div className="container-max mx-auto mt-12 px-4 lg:px-[100px] space-y-4">
                    {
                        faqs.map((faq, index) => (
                            <Accordion key={index} className="rounded-lg shadow-md mb-4">
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <h3 className="text-lg font-semibold text-secondary flex items-center gap-5">
                                        <span>{index + 1}</span> <span>{faq.question}</span>
                                    </h3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <p className="text-sm text-secondary px-4 lg:px-8">{faq.answer}</p>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    }
                </div>
            </div>
        </section>
    )

}