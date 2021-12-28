import React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { ItemListContainer } from '../../components/ItemListContainer/ItemListContainer';

const Products = () => {
    return (
        <div>
            <Layout>
                <ItemListContainer />
            </Layout>
        </div>
    )
}

export { Products }
