import React from 'react';

export default function Header(){
    return(
        <div className="header">
            <div className="row">
                <div className="logo">Logo</div>

                <div className="right-nav">
                    <nav>
                        <ul>
                            <li>Login</li>
                            <li>Contato</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}