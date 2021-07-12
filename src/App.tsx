import React, { useCallback, useState } from 'react';
import { CountriesSelect } from './components/countries-select';
import { CountryInfo } from './components/country-info';

export const App = () => {
    const [countryCode, setCountryCode] = useState('ru');

    const handleSelect = useCallback((newCode: string) => {
        setCountryCode(newCode);
    }, []);

    return (
        <>
            <CountriesSelect handleSelect={handleSelect} />
            <CountryInfo code={countryCode} />
        </>
    );
};
