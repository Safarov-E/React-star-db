import React from 'react';
import ItemDetails, {Record} from '../item-details';
import { withSwapiService } from '../hoc-helper';

const PersonDetails = ({itemId, swapiService}) => {
    const { getPerson, getPersonImage } = swapiService;
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage} >

            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>
    )
};

export default withSwapiService(PersonDetails)