import React, { useState } from 'react';
import { setPageScore , setUserAnswer } from '../store/actions/pageAction';
import { useDispatch } from 'react-redux';
import { Button, Container } from 'react-bootstrap';

const Nine = () => {
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

        if(v) {
            dispatch(setUserAnswer(v))
        }
    }

    const options = [
        'https://s3.bukalapak.com/img/3200718716/large/3128560717_d4380432_6cef_4626_a8fe_d9aad6a0cd18_593_593.jpg',
        'https://www.pngitem.com/pimgs/m/242-2421235_inside-of-durian-durian-png-transparent-png-download.png',
        'https://asikifm.com/wp-content/uploads/2017/07/buah-kelapa-sawit.png',
        'https://sc02.alicdn.com/kf/UTB8W2r3XrPJXKJkSafSq6yqUXXaZ.jpg']

    const divOptions = () => {

        let arr = options.map((el,i) => {
            return (
                <Button 
                key={i}
                value={i}
                onClick={() => handleChange(i)}
                className="mt-3 col-5 mx-3"
                variant={
                    (pageAnswer === i) ? 'outline-success' : 'outline-light'
                }
                >
                    <span><img src={el} style={{width:150,height:150,objectFit:'cover'}} alt=""/></span>
                </Button>
            )
        })
        return arr;
    }

    return (
        <Container className="" style={{height:'50vh'}}>
           <Container className="d-flex justify-content-center">
                <h4> Bahan baku minyak goreng </h4>
           </Container>
           <Container className="row ml-2">
               {divOptions()}
           </Container>
        </Container>
    )
}

export default Nine;