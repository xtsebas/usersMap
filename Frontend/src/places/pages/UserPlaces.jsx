import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DummyPlaces = [
    { id: 'p1', title: 'Place One', description: 'This is place one.', imageUrl: 'https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide', address: '1234 Fake St', creatorId: 'u1', location: { lat: 40.748817, lng: -73.985428 }},
    { id: 'p2', title: 'Place Two', description: 'This is place two.', imageUrl: 'https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide', address: '1234 Fake St', creatorId: 'u2', location: { lat: 40.748817, lng: -73.985428 } },
    { id: 'p3', title: 'Place Three', description: 'This is place three.', imageUrl: 'https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide', address: '1234 Fake St', creatorId: 'u1', location: { lat: 40.748817, lng: -73.985428 } },
];

const UserPlaces = props => {
    const userId = useParams().userId;
    const loadedPlaces = DummyPlaces.filter(place => place.creatorId === userId);
    return (
        <PlaceList items={loadedPlaces} />
    );
};

export default UserPlaces;