import React from 'react';

const Hello = () => {

    //  using jsx

    // return (
    //     <div className="dummyClass">
    //         <h1>Hello Vishvas</h1>
    //     </div>
    // )

    return React.createElement('div', { id: 'hello', className: 'dummyClass' },
        React.createElement('h1', null, 'Hello Vishvas'))
}

export default Hello

