import React from 'react';
import SHOP_DATA from'./shopData';

import CollectionoPreview from '../../components/collection-preview/collection-preview';
class shopPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections } = this.state;
        return(
            <div className="shop-page">
                {
                    collections.map(({id, ...otherProps}) => (
                        <CollectionoPreview key={id} {...otherProps}/>
                    ))
                }
            </div>
        )
    }
}

export default shopPage;