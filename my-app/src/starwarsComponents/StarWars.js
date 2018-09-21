import React, { Component } from 'react';

class StarWars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starWars: []
        };

        fetch('http://localhost:3306/StarWars'
        ).then(function(response) {
                return response.json();
            }
        ).then((data) => {
                this.setState({
                        starWars: data
                    }
                );
            }
        ).catch(function(error) {
                return error;
            }
        );
    }

    render() {
        const {starWars} = this.state;
        return (          
            <table>
                <thead>
                    <tr>
                        <th>Character</th>
                        <th>Gender</th>
                        <th>Associates</th>
                        <th>Films</th>
                    </tr>
                </thead>
                <tbody>
                {starWars.map (item => (
                    <tr key={'character' + item.name}>
                        <td>{item.name}</td>
                        <td>{item.gender}</td>
                        <td>
                            {item.associates.map (associate => (
                                <ul key={'associate name' + associate.aName}>
                                    <li>{associate.aName}</li>
                                </ul>
                            ))}
                        </td>
                        <td>
                            {item.films.map (film => (
                            <ul key={film}>
                                <li>{film}</li>
                            </ul>
                            ))}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

export default StarWars;