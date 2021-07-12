import React, { useCallback } from 'react';
import { Select, SelectChangeEvent } from '@indriver/ysera';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from './countries.gql';

interface CountriesSelectProps {
    handleSelect: (newId: string) => void;
}

export const CountriesSelect = ({ handleSelect }: CountriesSelectProps) => {
    const { loading, data = {}, error } = useQuery(GET_COUNTRIES);

    const onSelect: SelectChangeEvent = useCallback(
        (e, data) => {
            handleSelect(data?.value ?? '');
        },
        [handleSelect]
    );

    if (!data.countries || loading || error) return null;

    return (
        <div style={{ width: '500px' }}>
            <Select fitOptions openWhenFocus onSelect={onSelect}>
                {data.countries.map((country) => (
                    <Select.Option key={country.code} value={country.code}>
                        {country.name}
                    </Select.Option>
                ))}
            </Select>
        </div>
    );
};
