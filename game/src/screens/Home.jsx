import React, { useState , useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { Container , Button , Alert} from 'react-bootstrap';
import { setPageScore , setUserAnswer } from '../store/actions/pageAction';
import { One , Two , Three , Four} from '.';

const Home = () => {
    const dispatch = useDispatch();
    const { userAnswer , pageScore } = useSelector(state => state);
    const [score,setScore] = useState(0);
    const [questions,setQuestions] = useState([<One/>,<Two/>,<Three/>,<Four/>])
    const [position,setPosition] = useState(0);
    const [alert,setUserAlert] = useState(false);

    // useEffect(() => {
    //     shuffleQuestions()
    // },[])

    const handleNext = () => {
        if(userAnswer) {
            console.log('next');
            let newPosition = position+1;
            setPosition(newPosition);
            dispatch(setPageScore(null));
            dispatch(setUserAnswer(null));
            setUserAlert(false);
        } else if(userAnswer == null) {
            setUserAlert(true);
            shuffleQuestions()
        }

        if(pageScore) {
            let newScore = score + 1
            setScore(newScore)
        }
    }

    const shuffleQuestions = () => {
        let clonedQuestions = questions.map((el,i) => {
            return el;
        })
        let currentIndex = clonedQuestions.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            temporaryValue = clonedQuestions[currentIndex];
            clonedQuestions[currentIndex] = clonedQuestions[randomIndex];
            clonedQuestions[randomIndex] = temporaryValue;
          }
          console.log(clonedQuestions,'ini line 52');
        return setQuestions(clonedQuestions)
    }

    return (
        <Container>
            {alert &&
            <Alert variant="danger" className="text-center mt-4">
                Halo , coba diisi dulu ya
            </Alert>
            }
            <Container className="bg-primary" style={{marginTop:50,height:'70vh',width:'50%'}}>
                <Container className="d-flex justify-content-center">
                    <h3 className="mt-3">Soal ke {position+1} </h3>
                </Container>
                    <h3 className="text-center">Score kamu sekarang {score} </h3>
                <Container style={{marginTop:10}}>
                    {questions[position]}
                </Container>
                <Container>
                    <Button
                    variant="primary"
                    onClick={handleNext}
                    >
                    Next
                    </Button>
                </Container>
            </Container>
        </Container>
        
    )
}

export default Home;