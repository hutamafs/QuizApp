import React, { useState } from 'react';
import { setPageScore , setUserAnswer } from '../store/actions/pageAction';
import { useDispatch } from 'react-redux';
import { Button, Container } from 'react-bootstrap';

const Eight = () => {
    const dispatch = useDispatch();
    const [answer] = useState(0);
    const [pageAnswer , setPageAnswer] = useState('');

    const handleChange = (v) => {
        setPageAnswer(v);
        if((v) === answer) {
            dispatch(setPageScore(true));
        } else {
            dispatch(setPageScore(false));
        }
        dispatch(setUserAnswer(true))
    }

    const options = [
        'Einstein',
        'Pascal',
        'Boyle',
        'Newton']

    const divOptions = () => {

        let arr = options.map((el,i) => {
            return (
                <Button 
                key={i}
                value={i}
                onClick={() => handleChange(i)}
                className="mt-2 mx-3 col-5 my-3"
                variant={
                    (pageAnswer === i) ? 'outline-success' : 'outline-dark'
                }
                >
                    <span style={{fontSize:'2rem'}}> {el} </span>
                </Button>
            )
        })
        return arr;
    }

    return (
        <Container>
           <Container className="d-flex flex-column justify-content-center" style={{marginLeft:40}}>
           <img id="einstein" src="https://www.nuclear-power.net/wp-content/uploads/2014/10/emc2-1024x666.png" alt=""/>
           <h3 className="mt-2 ml-3">Siapa pencipta rumus ini?</h3>
           </Container>
           <Container className="row ml-2">
               {divOptions()}
           </Container>
        </Container>
    )
}

export default Eight;