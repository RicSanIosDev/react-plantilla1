import SectionHead from "./SectionHead"
import { FaQuestion } from "react-icons/fa"
import {faqs} from '../data'
import FAQ from "./FAQ"


const FAQs = () => {
  return (
    <section className="fqas">
        <div className="container faqs__container">
            <SectionHead icon={<FaQuestion />} title="FQAs" />
            <div className="fqas__wrapper">
                {
                    faqs.map(({id, question, answer}) => {
                        return <FAQ key={id} question={question} answer={answer} />
                    })
                }
            </div>
        </div>
    </section>
        
  )
}

export default FAQs