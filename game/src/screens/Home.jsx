import React, { useState , useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { Container , Button , Alert} from 'react-bootstrap';
import { setPageScore , setUserAnswer , setQuestions , setGameScore } from '../store/actions/pageAction';
import { useHistory } from 'react-router-dom';
import Toast from '../helpers'

const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userAnswer , pageScore , questions } = useSelector(state => state);
    const [score,setScore] = useState(0);
    const [position,setPosition] = useState(0);
    const [alert,setUserAlert] = useState(false);

    useEffect(() => {
        dispatch(setQuestions())
    },[])

    const handleNext = () => {
        let newPosition = null;
        let newScore = null;
        if(userAnswer) {
            newPosition = position+1;
            setPosition(newPosition);
            dispatch(setPageScore(null));
            dispatch(setUserAnswer(null));
            setUserAlert(false);

            if(pageScore) {
                newScore = score + 1;
                setScore(newScore);
                Toast.fire({
                    icon: 'success',
                    title: 'jawaban kamu benar'
                  })
            } else {
                Toast.fire({
                    icon: 'error',
                    title: 'jawaban kamu salah'
                  })
            }

        } else if(userAnswer === null) {
            setUserAlert(true);
        }

        

        if(newPosition === 10) {
            dispatch(setGameScore(newScore))
            history.push('/finish')
        }
    }

    return (
        <Container>
            {alert &&
            <Alert variant="danger" className="text-center mt-4">
                Halo , coba diisi dulu ya
            </Alert>
            }
            <Container style={{marginTop:50,height:'75vh',width:'50%',position:'relative',backgroundColor:'grey'}}>
                <h3 className="mt-3">Question {position+1} </h3>
                <h3 className="text-center">Score : {score} </h3>
                <Container style={{marginTop:10}}>
                    {questions[position]}
                </Container>
                <Button
                variant="primary"
                onClick={handleNext}
                size="lg"
                style={{position:'absolute',right:235,bottom:30}}
                >
                Submit
                </Button>
            </Container>
        </Container>
        
    )
}

export default Home;