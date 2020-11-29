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
        <Container className="bg-secondary" style={{height:'30vh'}}>
           <Container className="d-flex justify-content-center border">
                <h2>Indonesia merdeka tahun </h2>
           </Container>
           <Container className="d-flex justify-content-center mt-5">
                <input type="number" value={pageAnswer} placeholder="your answer" onChange={(e) => handleChange(e)} className="text-center" />
           </Container>
        </Container>
    )

}

export default Two;