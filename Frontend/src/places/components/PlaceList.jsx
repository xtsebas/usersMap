import React from 'react';

import './PlaceList.css'
import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';

const PlaceList = props => {
    if (props.items.length === 0) {
        return(
            <div className="place-list center">
                <Card >
                    <h2>No places found. Maybe create one?</h2>
                    <button>Share Place</button>
                </Card>
            </div>
        )
    }
    return (
        <ul className="place-list">
            {props.items.map(place => (
                <li key={place.id}>
                    <PlaceItem key={place.id} id={place.id} image={place.imageUrl} title={place.title} descripction={place.descripction} address={place.address} creatorId={place.creator} coordinates={place.location} />
                </li>
            ))}
        </ul>
    );
};

export default PlaceList;