import React from 'react';
import './css/App.css';

class About extends React.Component {
    render() {
        return(
            <div className='about'>
                <h1>About Me</h1>
                <p>Ipsum dolor dolorem consectetur est velit fugiat. 
                    Dolorem provident corporis fuga saepe distinctio ipsam? 
                    Et quos harum excepturi dolorum molestias?
                </p>
                <p>Ipsum dolor dolorem consectetur est velit fugiat. 
                    Dolorem provident corporis fuga saepe distinctio ipsam? 
                    Et quos harum excepturi dolorum molestias?
                </p>

                <table className="dataTable">
                    <thead>
                        <tr>
                            <td>First name</td>
                            <td>Family name</td>
                            <td>Phone number</td>
                            <td>Email</td>
                            <td>Address</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ABC</td>
                            <td>DEF</td>
                            <td>GHI</td>
                            <td>JKL</td>
                            <td>MNO</td>
                        </tr>
                    </tbody>
                </table>    
            </div> 
        );
    }
}

export default About;