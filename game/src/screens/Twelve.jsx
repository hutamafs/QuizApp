import React, { useState } from 'react';
import { setPageScore , setUserAnswer } from '../store/actions/pageAction';
import { useDispatch } from 'react-redux';
import { Button, Container } from 'react-bootstrap';
import Toast from '../helpers'

const Eleven = () => {
    const dispatch = useDispatch();
    const [answer] = useState([2,3]);
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
        'https://cdn.idntimes.com/content-images/community/2019/05/img-20190501-230449-94b61e8c03df75ec9f4fa91a89e34979_600x400.jpg',
        'https://i1.wp.com/dosenwisata.com/wp-content/uploads/2020/02/candi-borobudur-750x375-1.jpg?fit=750%2C375&ssl=1',
        'https://www.dreamhouseapartments.com/wp-content/uploads/2014/09/Big-Ben-and-The-Palace-of-Westminster.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg']

    const divOptions = () => {

        let arr = options.map((el,i) => {
            return (
                <Button 
                key={i}
                value={i}
                onClick={() => handleChange(i)}
                className="mt-3 col-5 mx-3"
                variant={
                    (pageAnswer.includes(i)) ? 'outline-success' : 'outline-dark'
                }
                >
                    <span><img className="pr-2 twelve"  src={el} alt=""/></span>
                </Button>
            )
        })
        return arr;
    }

    return (
        <Container style={{position:'relative'}}>
            <h1 className="text-center pilih"> PILIH DUA </h1>           
            <p className="text-center mb-0" style={{fontSize:'1.65rem'}}> Yang <b>bukan</b> termasuk keajaiban dunia </p>            
           <Container className="row" style={{position:'absolute',right:20}}>
               {divOptions()}
           </Container>
        </Container>
    )
}

export default Eleven;