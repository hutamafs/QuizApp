import React, { useState } from 'react';
import { setPageScore , setUserAnswer } from '../store/actions/pageAction';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

const Three = () => {
    const [answer] = useState('animal')
    const dispatch = useDispatch();
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
        <Container className="bg-secondary" style={{height:'30vh'}}>
           <Container className="d-flex justify-content-center border">
                <h4> Bahasa inggris dari <b><i>'binatang'</i></b> </h4>
           </Container>
           <Container className="d-flex justify-content-center mt-5">
                <input type="text" value={pageAnswer} placeholder="your answer" onChange={(e) => handleChange(e)} className="text-center" />
           </Container>
        </Container>
    )

}

export default Three;