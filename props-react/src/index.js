import React from 'react';
import ReacDom from 'react-dom';
import SingleComment from './components/comment';
import UserCard from './components/cardcomment';

import riofutaba from './assets/riofutaba.jpg'
import kaguya from './assets/kaguya.jpg'
import zerotwo from './assets/zerotwo.jpg'

const App = () => {
    return(
        <div className="ui comments">
            <UserCard>
                <SingleComment profilepecture={riofutaba} name='Rio Futaba' date='Hoy a las 5 pm' textcomment='Felicidades' />
            </UserCard>
            <UserCard>
                <SingleComment profilepecture={kaguya} name='Kaguya Sama' date='Hoy a las 6:30 pm' textcomment='Enhorabuena' />
            </UserCard>
            <UserCard>
                <SingleComment profilepecture={zerotwo} name='Zero Two' date='Hoy a las 8 pm' textcomment='Lo lograste!' />
            </UserCard>
        </div>
    )
}

ReacDom.render(
    <App />,
    document.querySelector('#root')
)