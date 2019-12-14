import React from 'react';
import './style.scss';
import CollectionItem from '../collection-item/collection-item';
const CollectionPreview = ({title, items}) => (
    <div className="collection-preview" >
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                .filter((item, idx)=> idx < 4)
                .map(({id, ...otherStuffs})  => (
                    // <CollectionItem key={id} {...oth} />
                    <CollectionItem key={id} {...otherStuffs} />
                    // <div key={item.id}>{item.name}</div>
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;