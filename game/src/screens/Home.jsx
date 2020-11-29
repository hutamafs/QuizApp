import React, { useState , useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { Container , Button , Alert } from 'react-bootstrap';
import { setPageScore , setUserAnswer , setQuestions , setGameScore } from '../store/actions/pageAction';
import { useHistory } from 'react-router-dom';
import Toast from '../helpers';
import '../styles/Home.css'

const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userAnswer , pageScore , questions } = useSelector(state => state);
    const [score,setScore] = useState(0);
    const [position,setPosition] = useState(0);
    const [alert,setUserAlert] = useState(false);
    const [bars,setBars] = useState(10);

    useEffect(() => {
        dispatch(setQuestions())
        progressBar();
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
                newScore = score;
                Toast.fire({
                    icon: 'error',
                    title: 'jawaban kamu salah'
                  })
            }
            replaceBar();

        } else if(userAnswer === null) {
            setUserAlert(true);
        }

        if(newPosition === 10) {
            dispatch(setGameScore(newScore))
            history.push('/finish')
        }
    }

    const replaceBar = () => {
        let cloned = []

        for(let i = 0 ; i<bars.length ; i++) {
            if(i === position) {
                cloned.push(
                <Container 
                    className={['mx-1 d-flex justify-content-center',(pageScore) ? 'bg-success' : 'bg-danger']} 
                    key={i} 
                    style={{borderRadius:50,width:20,height:30}}
                    > <b>{i+1}</b> </Container>)
            } else {
                cloned.push(bars[i])
            }
        }
        setBars(cloned);
    }

    const progressBar = () => {
        let arr = [];
        for(let i = 0 ; i<bars ; i++) {
            arr.push(<Container className="bg-light mx-1 d-flex justify-content-center" key={i} style={{borderRadius:50,width:20,height:30}}> <b>{i+1}</b> </Container>)
        };
        setBars(arr)
    }

    return (
        <div className="container-fluid px-0">
            <Container className="d-flex justify-content-center">
                {alert &&
                <Alert variant="danger" className="text-center mt-4" style={{width:'100%'}} >
                    Halo , coba diisi dulu ya
                </Alert>
                }
            </Container>
            <Container className="d-flex flex-row justify-content-center mt-2">
                {bars}

            </Container>
            <Container className="home-body mt-3">
                <Container className="d-flex justify-content-between">
                    <h1 style={{color:'#133b5c',borderWidth:'thick',border:'50px'}}>Question {position+1} </h1>
                    
                    <h1 className="text-center">Score : {score} </h1>
                </Container>
                <Container style={{marginTop:30,height:'75vh',width:'50%',position:'relative'}}>
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
        </div>
        
        
    )
}

export default Home;