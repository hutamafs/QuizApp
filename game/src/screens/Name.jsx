import React , { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container , Button } from 'react-bootstrap';
import { setName } from '../store/actions/pageAction';
import { useHistory } from 'react-router-dom';
import Toast from '../helpers'

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
        <Container className="text-center" style={{marginTop:100}}>
            <h3 className="text-center my-3">Isi nama kamu di bawah</h3>
            <input type="text" value={name} placeholder="Your name" onChange={(e) => setUserName(e.target.value)} className="pl-2" id=""/>
            <Container className="d-flex justify-content-center mt-3">
            <Button variant='primary'style={{width:'15%'}} onClick={handleClick} > Submit </Button>

            </Container>
        </Container>
    )
}

export default Name

