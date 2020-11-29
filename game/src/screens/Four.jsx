import React, { useState } from 'react';
import { setPageScore , setUserAnswer } from '../store/actions/pageAction';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import bali from '../assets/bali.jpg';

const Three = () => {
    const dispatch = useDispatch();
    const [answer] = useState('bali')
    const [pageAnswer , setPageAnswer] = useState('');

    const handleChange = (e) => {
        setPageAnswer(e.target.value);
        if((e.target.value).toLowerCase() === answer) {
            dispatch(setPageScore(true));
        } else {
            dispatch(setPageScore(false));
        }

        if(e.target.value) {
            dispatch(setUserAnswer(e.target.value))
        }
    }

    return (
        <Container>
           <Container className="d-flex justify-content-center">
                <h3> Dimanakah tempat ini? </h3>
           </Container>
           <img src={bali} id="bali" alt=""/>
           <Container className="d-flex justify-content-center mt-5">
                <input type="text" value={pageAnswer} placeholder="your answer" onChange={(e) => handleChange(e)} className="input-type text-center" />
           </Container>
        </Container>
    )

}

export default Three;