import React, { useState } from 'react'
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from '../components/App';
import { useContext } from 'react';
import ProduitRecom from '../components/ProduitRecom';

const Recommandations = () => {

    const { loginState, handleLogin } = useContext(AuthContext);
    if (loginState.user===null) {
        return <Navigate
            to='/home'
        />
    }

    const items = [];
for (let i = 0; i < 9; i++) {
    items.push(<ProduitRecom class='vedette' />);
}

    return (
        <section className="recom">
            <h2 className="recom__title">
                Recommandations
            </h2>

            <section className='recom__top3'>
                <h3 className="recom__top3-title">
                    Top 3 du moment
                </h3>
                <ul className='recom__top3-items'>
                    <ProduitRecom class='top3'></ProduitRecom>
                    <ProduitRecom class='top3'></ProduitRecom>
                    <ProduitRecom class='top3'></ProduitRecom>
                </ul>
            </section>
            <section className='recom__vedette'>
                <h3 className="recom__vedette-title">
                    En vedette
                </h3>
                <ul className='recom__vedette-items'>
                    
                {items}

                </ul>
            </section>

        </section>
    )
}

export default Recommandations