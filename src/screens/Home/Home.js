import React from 'react';
import { Product } from '../../components/ItemCount/ItemCount';
import { Layout } from '../../components/Layout/Layout';

const Home = () => {
    return (
        <div>
            <Layout>
                <Product stock={10}/>
                <Product stock={4}/>
                <Product stock={67}/>
                <Product stock={212}/>
            </Layout>
        </div>
    )
}

export { Home }