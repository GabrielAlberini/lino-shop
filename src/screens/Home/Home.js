import React from 'react';
import { ItemCount } from '../../components/ItemCount/ItemCount';
import { Layout } from '../../components/Layout/Layout';
import { ListItems } from '../../components/ListItems/ListItems';

const Home = () => {
    return (
        <div>
            <Layout>
                <ItemCount stock={10}/>
                <ItemCount stock={4}/>
                <ItemCount stock={67}/>
                <ItemCount stock={212}/>
                <ListItems />
            </Layout>
        </div>
    )
}

export { Home }