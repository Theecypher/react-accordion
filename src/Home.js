import { useState } from "react";
import QuestionList from "./QuestionList";


const Home = () => {
    const [questions, setQuestion] = useState([
        {title: "Is it a good product?", id:1, answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam tempora, eos perspiciatis quaerat delectus ut sint deleniti qui deserunt veritatis, pariatur ea hic reiciendis, sapiente ullam earum aut nemo tempore."},
        {title: "How much does it cost?", id:2, answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam tempora, eos perspiciatis quaerat delectus ut sint deleniti qui deserunt veritatis, pariatur ea hic reiciendis, sapiente ullam earum aut nemo tempore."},
        {title: "How can I get it?", id:3, answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam tempora, eos perspiciatis quaerat delectus ut sint deleniti qui deserunt veritatis, pariatur ea hic reiciendis, sapiente ullam earum aut nemo tempore."},
    ]);
    
    return ( 
        questions.map((question) => (
            <QuestionList question = {question} />
        ))
     );
}
 
export default Home;