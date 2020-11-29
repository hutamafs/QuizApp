import React from 'react';
import { useSelector } from 'react-redux';
import { Container , Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'

const Finish = () => {
    const { score } = useSelector(state=>state);
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
                'https://lh3.googleusercontent.com/proxy/SeTF5rO1ZSSn2B9sZa3CJ3l7_Z-JzS87na6wKeMrndf6WKTE91_XEOgxqJwMSY7zntgTB1Oo7je28fSvASlrZ93Oap5fPhIuH2d32_likv1avqwcLN0e4XWe5j-bTg'
                }
                style={{width:400,height:400}}
                alt=""
                />
            </Container>
            <Container>
                {
                    (score>=8) ?
                    <h4>Selamat!! jawaban kamu benar {score} dari 10 </h4> :
                    <h4>Coba lagi ya .. jawaban kamu hanya benar {score} dari 10 </h4> 
                }
            </Container>
            <Container>
                <Button variant="primary" onClick={handleBack}> Kerjakan kuis lagi </Button>
            </Container>
        </Container>
    )
}
export default Finish;