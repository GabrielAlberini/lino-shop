import React from 'react';
import { ItemCount } from '../../components/ItemCount/ItemCount';
import { Layout } from '../../components/Layout/Layout';
import { ListItems } from '../../components/ListItems/ListItems';
import './Home.css'

const Home = () => {
    return (
        <div clasName="cont-items">
            <Layout>
                <ListItems />
            </Layout>
        </div>
    )
}

export { Home }