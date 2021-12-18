import React from 'react';
import './Home.css'
import { Layout } from '../../components/Layout/Layout';
import { ItemListContainer } from '../../components/ItemListContainer/ItemListContainer';


const Home = () => {
    return (
        <div>
            <Layout>
                <ItemListContainer />
            </Layout>
        </div>
    )
}

export { Home }