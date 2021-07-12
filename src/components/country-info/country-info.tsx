import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRY } from './country.gql';

interface CountryInfoProps {
    code: string;
}

const fieldsToShow = ['name', 'native', 'capital', 'currency'];

export const CountryInfo = ({ code }: CountryInfoProps) => {
    const { loading, data = {}, error } = useQuery(GET_COUNTRY, { variables: { code } });

    if (!data.country || loading || error) return null;

    return (
        <div style={{ width: '500px', marginTop: '20px' }}>
            {fieldsToShow.map((field) => (
                <div key={field}>
                    <b>{field}:</b>&nbsp;{data.country[field]}
                </div>
            ))}
        </div>
    );
};
