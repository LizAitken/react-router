import React from 'react';

// match.params similar to req.params
const Topic = props => <h3>Requested Param: {props.match.params.id}</h3>;

export default Topic;