import React , { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container , Button } from 'react-bootstrap';
import { setName } from '../store/actions/pageAction';
import { useHistory } from 'react-router-dom';
import Toast from '../helpers';
import '../styles/input.css';
import '../styles/Name.css';

const Name = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [name,setUserName] = useState('')

    const handleClick = () => {
        if(name === '') {
            Toast.fire({
                icon: 'warning',
                title: 'hey hey , isi dulu nama kamu'
              })
        } else {
            dispatch(setName(name));
            history.push('/home')
        }
    }

    return (
        <Container className="text-center name-body pb-3" style={{marginTop:100}}>
            <h1 className="text-center">Nama kamu </h1>
            <input type="text" value={name} placeholder="Your name" onChange={(e) => setUserName(e.target.value)} className="pl-3 input-type" id=""/>
            <Container className="d-flex justify-content-center mt-3">
            <Button variant='primary'style={{width:'15%'}} onClick={handleClick} > Submit </Button>
            </Container>
        </Container>
    )
}

export default Name

