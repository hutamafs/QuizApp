import React, { useState } from 'react';
import { setPageScore , setUserAnswer } from '../store/actions/pageAction';
import { useDispatch } from 'react-redux';
import { Button, Container } from 'react-bootstrap';

const Seven = () => {
    const dispatch = useDispatch();
    const [answer] = useState(3);
    const [pageAnswer , setPageAnswer] = useState('');

    const handleChange = (v) => {
        setPageAnswer(v);
        if((v) === answer) {
            dispatch(setPageScore(true));
        } else {
            dispatch(setPageScore(false));
        }
        dispatch(setUserAnswer(true)) // apapun yang penting uda keisi
    }

    const options = [
        'Australia',
        'Inggris',
        'Amerika',
        'Selandia Baru']

    const divOptions = () => {

        let arr = options.map((el,i) => {
            return (
                <Button 
                key={i}
                value={i}
                onClick={() => handleChange(i)}
                className="mt-3 mx-3 col-5"
                variant={
                    (pageAnswer === i) ? 'outline-success' : 'outline-light'
                }
                >
                    {el}
                </Button>
            )
        })
        return arr;
    }

    return (
        <Container className="" style={{height:'50vh'}}>
           <Container className="d-flex flex-column justify-content-center" style={{marginLeft:60}}>
           <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg" style={{width:300,height:150,objectFit:'cover'}} alt=""/>
           <h3 className="mt-2">Lambang negara apa ini?</h3>
           </Container>
           <Container className="row ml-2">
               {divOptions()}
           </Container>
        </Container>
    )
}

export default Seven;