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
        'Archimedes',
        'Relativitas',
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
                    (pageAnswer === i) ? 'outline-success' : 'outline-light'
                }
                >
                    <span style={{fontSize:'2rem'}}> {el} </span>
                </Button>
            )
        })
        return arr;
    }

    return (
        <Container className="" style={{height:'50vh'}}>
           <Container className="d-flex flex-column justify-content-center" style={{marginLeft:40}}>
           <img src="https://lh3.googleusercontent.com/proxy/iSwYg7sbhX1iGP_jw_5AB3NlhJgPU6zs9XXcusgjcJjf7PNQ7JLkm4_2ZcQsIdY1pwsk2NCc-KqFfMLrBcb4A-xcFCARWm4_BGmPZEuvrAZUyp-KsSUd4ZpD1BlIBkMJayOLaHoM" style={{width:350,height:200,objectFit:'cover'}} alt=""/>
           <h3 className="mt-2 ml-3">Bunyi hukum apakah ini?</h3>
           </Container>
           <Container className="row ml-2">
               {divOptions()}
           </Container>
        </Container>
    )
}

export default Eight;