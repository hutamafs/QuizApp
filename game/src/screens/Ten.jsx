import React, { useState } from 'react';
import { setPageScore , setUserAnswer } from '../store/actions/pageAction';
import { useDispatch } from 'react-redux';
import { Button, Container } from 'react-bootstrap';
import Toast from '../helpers'

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
        console.log(clonedAnswer,'ini cloe');

        if(clonedAnswer.length === 2) {
            console.log('masuk');
            dispatch(setUserAnswer(true))
        }
    }

    const options = [
        'https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-png-27.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/768px-LINE_logo.svg.png',
        'https://thedesignlove.com/wp-content/uploads/2018/02/Case-Study-The-Microsoft-Logo-Evolution-5.jpg',
        'https://cdn.hipwallpaper.com/i/4/64/WIcZRs.jpg']

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
                <h6> Yang termasuk merger dalam satu group perusahaan adalah </h6>
            </Container>
           <Container className="row ml-2">
               {divOptions()}
           </Container>
        </Container>
    )
}

export default Ten;