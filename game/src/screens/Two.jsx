import React, { useState } from 'react';
import { setPageScore , setUserAnswer } from '../store/actions/pageAction';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

const Two = () => {
    const [answer] = useState(1945)
    const dispatch = useDispatch();
    const [pageAnswer , setPageAnswer] = useState('');

    const handleChange = (e) => {
        setPageAnswer(e.target.value);
        if(+e.target.value === answer) {
            dispatch(setPageScore(true));
        } else {
            dispatch(setPageScore(false));
        }

        if(e.target.value) {
            dispatch(setUserAnswer(e.target.value))
        }
    }

    return (
        <Container className="fill-container">
           <Container className="d-flex justify-content-center">
                <h3>Indonesia merdeka pada tahun </h3>
           </Container>
           <Container className="d-flex justify-content-center mt-5">
                <input type="number" min="1" value={pageAnswer} placeholder="your answer" onChange={(e) => handleChange(e)} className="text-center input-type" />
           </Container>
        </Container>
    )

}

export default Two;