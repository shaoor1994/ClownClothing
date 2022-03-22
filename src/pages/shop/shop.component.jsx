import React, { Component } from 'react'

import CollectionPreview from '../../components/preview-collection/collection-preview.component';
import ShOP_DATA from './shop.data';

export default class Shoppage extends Component {
    
    constructor(props){
        super(props);
        this.state={
            collections: ShOP_DATA
        }
    }
    
    render() {

        //destructring collections

        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                      ))
                }
            </div>
        )
    }
}
