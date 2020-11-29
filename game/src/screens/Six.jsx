import React, { useState } from 'react';
import { setPageScore , setUserAnswer } from '../store/actions/pageAction';
import { useDispatch } from 'react-redux';
import { Button, Container } from 'react-bootstrap';
import '../styles/input.css';

const Six = () => {
    const dispatch = useDispatch();
    const [answer] = useState(1);
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
        'https://vignette.wikia.nocookie.net/misterbeast/images/2/21/JimmyDonaldson.png/revision/latest?cb=20201008114403',
        'https://png.pngitem.com/pimgs/s/118-1186819_pewdiepie-png-transparent-png.png',
        'https://disk.mediaindonesia.com/thumbs/600x400/news/2016/03/rafi.jpg',
        'https://dailyspin.id/wp-content/uploads/2020/06/jss721.jpg']

    const divOptions = () => {

        let arr = options.map((el,i) => {
            return (
                <Button 
                key={i}
                value={i}
                onClick={() => handleChange(i)}
                className="mt-4 col-5 mx-3"
                variant={
                    (pageAnswer === i) ? 'outline-success' : 'outline-dark'
                }
                >
                    <img src={el} className="pr-2 six" alt=""/>
                </Button>
            )
        })
        return arr;
    }

    return (
        <Container>
           <Container className="d-flex justify-content-center">
                <h4> Youtuber dengan subscriber terbanyak </h4>
           </Container>
           <Container className="row ml-2">
               {divOptions()}
           </Container>
        </Container>
    )
}

export default Six