import { useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"

const FAQ = ({question, answer}) => {
    const [isAnswersShowing, setIsAnswersShowing] = useState(false);

  return (
    <article className="fqa" onClick={() => setIsAnswersShowing(prev => !prev)}>
        <div>
            <h4>{question}</h4>
            <button className="fqa__icon" >
                {
                    isAnswersShowing ? <AiOutlineMinus /> : <AiOutlinePlus />
                }
            </button>
        </div>
        {isAnswersShowing && <p>{answer}</p>}
    </article>
  )
}

export default FAQ