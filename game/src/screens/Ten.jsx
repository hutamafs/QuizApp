import React, { useState } from 'react';
import { setPageScore , setUserAnswer } from '../store/actions/pageAction';
import { useDispatch } from 'react-redux';
import { Button, Container } from 'react-bootstrap';
import Toast from '../helpers';
import instagram from '../assets/ten/instagram.png'
import line from '../assets/ten/line.png'
import microsoft from '../assets/ten/microsoft.jpg'
import oculus from '../assets/ten/oculus.jpg'

const Ten = () => {
    const dispatch = useDispatch();
    const [answer] = useState([0,3]);
    const [pageAnswer , setPageAnswer] = useState([]);

    const handleChange = (v) => {

        //cek jawaban user
        let skor = 0;

        // pertama cari dulu di array ada ato gak
        let clonedAnswer = pageAnswer.map(el => {return el});
        let isInside = clonedAnswer.includes(v);

        if(isInside) {
            clonedAnswer = clonedAnswer.filter(el => {return el !== v})
            dispatch(setUserAnswer(null))
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
        instagram,
        line,
        microsoft,
        oculus]

    const divOptions = () => {

        let arr = options.map((el,i) => {
            return (
                <Button 
                key={i}
                value={i}
                onClick={() => handleChange(i)}
                className="mt-3 col-5 mx-3"
                variant={
                    (pageAnswer.includes(i)) ? 'outline-success' : 'outline-secondary'
                }
                >
                    <span><img src={el} className="ten" alt=""/></span>
                </Button>
            )
        })
        return arr;
    }

    return (
        <Container>
           <h1 className="text-center pilih" > PILIH DUA </h1>           
           <Container className="d-flex justify-content-center mb-0">
                <h4> Perusahaan yang bekerja sama adalah </h4>
            </Container>
           <Container className="row ml-2">
               {divOptions()}
           </Container>
        </Container>
    )
}

export default Ten;