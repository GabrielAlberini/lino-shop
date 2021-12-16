import React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { ListItems } from '../../components/ListItems/ListItems';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Layout>
                <ListItems/>
            </Layout>
        </div>
    )
}

export { Home }