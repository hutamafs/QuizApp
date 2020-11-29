import React, { useState } from 'react';
import { setPageScore , setUserAnswer } from '../store/actions/pageAction';
import { useDispatch } from 'react-redux';
import { Button, Container } from 'react-bootstrap';
import Toast from '../helpers'

const Eleven = () => {
    const dispatch = useDispatch();
    const [answer] = useState([1,2]);
    const [pageAnswer , setPageAnswer] = useState([]);

    const handleChange = (v) => {
        let skor = 0;
        let clonedAnswer = pageAnswer.map(el => {return el});
        let isInside = clonedAnswer.includes(v);

        if(isInside) {
            clonedAnswer = clonedAnswer.filter(el => {return el !== v});
            dispatch(setUserAnswer(null));
        } else {
            if(clonedAnswer.length === 2) {
                Toast.fire({
                    icon: 'warning',
                    title: 'hey hey , cuma bisa dua'
                  })
            } else if(clonedAnswer.length < 2) {
                clonedAnswer.push(v)
            }
        }
        
        setPageAnswer(clonedAnswer);

        for(let i = 0 ; i<answer.length;i++) {
            for(let j = 0 ; j<clonedAnswer.length ; j++) {
                if(answer[i] === clonedAnswer[j]) {
                    skor++
                }
            }
        }
        if(skor === 2) {
            dispatch(setPageScore(true));
        } else {
            dispatch(setPageScore(false));
        }

        if(clonedAnswer.length === 2) {
            dispatch(setUserAnswer(true))
        }
    }

    const options = [
        'https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg',
        'https://clean-swift.com/wp-content/uploads/2017/07/Swift_Twitter.png',
        'https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg',
        'https://res.cloudinary.com/practicaldev/image/fetch/s--owmZdLoJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/0szm15lhsjg6951ohxny.png']

    const divOptions = () => {

        let arr = options.map((el,i) => {
            return (
                <Button 
                key={i}
                value={i}
                onClick={() => handleChange(i)}
                className="mt-3 col-5 mx-3"
                variant={
                    (pageAnswer.includes(i)) ? 'outline-success' : ''
                }
                >
                    <span><img src={el} style={{width:150,height:135,objectFit:'cover'}} alt=""/></span>
                </Button>
            )
        })
        return arr;
    }

    return (
        <Container className="" style={{height:'50vh'}}>
           <Container className="d-flex justify-content-center">
                <h5> Pilihlah dua jawaban yang paling benar </h5>
           </Container>
           <Container className="d-flex justify-content-center mb-0">
                <h6> Yang termasuk logo bahasa programming adalah </h6>
            </Container>
           <Container className="row ml-2">
               {divOptions()}
           </Container>
        </Container>
    )
}

export default Eleven;