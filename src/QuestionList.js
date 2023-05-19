import { useState } from "react";

const QuestionList = ({ question }) => {

    const [toggle, setToggle] = useState(false);

    return ( 
        <div className="content">
                <article id={question.id}>
                    <div className="row1">
                        <h5>{question.title }</h5>
                        <button onClick={() => setToggle(!toggle)}>{toggle ? "-" : "+"}</button>
                    </div>
                        {toggle && <p>{ question.answer }</p>}
                </article>
        </div>
     );
}
 
export default QuestionList;