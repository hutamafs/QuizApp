import React, { useState } from 'react';
import { setPageScore , setUserAnswer } from '../store/actions/pageAction';
import { useDispatch } from 'react-redux';
import { Button, Container } from 'react-bootstrap';

const Five = () => {
    const dispatch = useDispatch();
    const [answer] = useState(2);
    const [pageAnswer , setPageAnswer] = useState('');

    const handleChange = (v) => {
        setPageAnswer(v);
        if((v) === answer) {
            dispatch(setPageScore(true));
        } else {
            dispatch(setPageScore(false));
        }
        dispatch(setUserAnswer(v));       
    }

    const options = [12.03,1.85,13.7,5.678]

    const divOptions = () => {

        let arr = options.map((el,i) => {
            return (
                <Button
                key={i}
                className="mt-4 col-5 mx-3"
                style={{height:100}}
                variant={
                    (pageAnswer === i) ? 'outline-success' : 'outline-dark'
                }
            value={i} onClick={() => handleChange(i)} > <h3>{el}</h3> </Button>
            )
        })
        return arr;
    }

    return (
        <Container className="fill-container">
           <Container className="d-flex justify-content-center">
                <h4> Bilangan manakah yang terbesar? </h4>
           </Container>
           <Container className="row d-flex justify-content-center ml-2">
               {divOptions()}
           </Container>
        </Container>
    )
}

export default Five