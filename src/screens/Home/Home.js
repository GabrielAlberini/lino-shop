import React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { ListItems } from '../../components/ListItems/ListItems';
import './Home.css'
import { ContainerItemDetail } from '../../components/ContainerItemDetail/ContainerItemDetail';

const Home = () => {
    return (
        <div>
            <Layout>
                <ListItems/>
                <ContainerItemDetail />
            </Layout>
        </div>
    )
}

export { Home }