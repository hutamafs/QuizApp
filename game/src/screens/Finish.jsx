import React from 'react';
import { useSelector } from 'react-redux';
import { Container , Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'

const Finish = () => {
    const { score , name } = useSelector(state=>state);
    const history = useHistory();

    const handleBack = () => {
        history.push('/')
    }

    return (
        <Container style={{marginTop:100}} className="text-center">
            <Container >
                <img 
                src={(score>=8) ?
                'https://cdn.dribbble.com/users/311928/screenshots/6574034/congrats1_4x.png' : 
                'https://i.pinimg.com/originals/7f/b1/f1/7fb1f193435815a86c8484f82b9589e1.jpg'
                }
                style={{width:500,height:400}}
                alt=""
                />
            </Container>
            <Container>
                {
                    (score>=8) ?
                    <h4>Selamat {name} !! jawaban kamu benar {score} dari 10 </h4> :
                    <h4>Coba lagi ya {name} .. jawaban kamu hanya benar {score} dari 10 </h4> 
                }
            </Container>
            <Container>
                <Button variant="outline-primary" onClick={handleBack}> Kerjakan kuis lagi </Button>
            </Container>
        </Container>
    )
}
export default Finish;