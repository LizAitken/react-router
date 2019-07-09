import React from 'react';
import PropTypes from 'prop-types';

// const sayHello = name => {
//     if (!!name) {
//         return (
//             <h3>Hello {name}!</h3>
//         )
//     } else {
//         return null;
//     }
// }
const sayHello = name => (!!name ? <h3>Hello {name}!</h3> : null);

const HomePage = props => {
    const { name } = props;
    console.log('Props are:  ', props); 
    return (
      <>
        <h2>Home Page</h2>
        {sayHello(name)}
        <p>Hello {props.name}</p>
      </>
    );
};

export default HomePage;

HomePage.propTypes = {
    name: PropTypes.string
};
