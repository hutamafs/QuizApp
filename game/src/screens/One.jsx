import React, { useState } from 'react';
import { setPageScore , setUserAnswer } from '../store/actions/pageAction';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

const One = () => {
    const [answer] = useState(11)
    const dispatch = useDispatch();
    const [pageAnswer , setPageAnswer] = useState('');

    const handleChange = (e) => {
        setPageAnswer(e.target.value);
        if(+e.target.value === answer) {
            dispatch(setPageScore(true));
        } else {
            dispatch(setPageScore(false));
        }
        dispatch(setUserAnswer(e.target.value))     
    }

    return (
        <Container className="fill-container">
           <Container className="d-flex justify-content-center">
                <h2>Apakah hasil dari 4 x 3 - 2 : 2</h2>
           </Container>
           <Container className="d-flex justify-content-center mt-5">
                <input type="number" value={pageAnswer} placeholder="your answer" onChange={(e) => handleChange(e)} className="text-center input-type" />
           </Container>
        </Container>
    )

}

export default One;