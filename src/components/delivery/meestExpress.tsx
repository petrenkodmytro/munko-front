import { ICountry } from '@/types/types';
import React, { useEffect, useState } from 'react';
import DatalistInput from 'react-datalist-input';

type Props = {};

const MeestExpress = (props: Props) => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);
  const [countrySearch, setCountrySearch] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [house, setHouse] = useState<string>('');
  const [postId, setPostId] = useState<string>('');
  // Fetch countries from REST Countries API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const countryList = data.map((country: any) => ({
          name: country.name.common,
          cca2: country.cca2, // ISO 3166-1 alpha-2 country code
        }));
        setCountries(countryList);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  // Filter countries based on search input
  useEffect(() => {
    const filtered = countries.filter(country =>
      country.name.toLowerCase().includes(countrySearch.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [countrySearch, countries]);

  // Handle country selection and fetch cities
  const handleCountryChange = (value: { id: string; value: string }) => {
    console.log(value.value);
    const country = value.value;
    setSelectedCountry(country);
    // fetchCities(countryCode);
  };

  return (
    <form autoComplete="off" className="">
      <DatalistInput
        className="w-full my-2 border-2 border-darkGreen rounded p-1 outline-none"
        id="country"
        placeholder="Select a country"
        items={countries.map((country: { cca2: string; name: string }) => ({
          id: country.cca2,
          value: country.name,
        }))}
        onSelect={(value: { id: string; value: string }) =>
          handleCountryChange(value)
        }
        label="Select a country"
        showLabel={false}
      />

      <div className="flex gap-4">
        <div className="mb-2">
          <label className="block text-gray-700">City:</label>
          <input
            autoComplete="off"
            name="customCityName"
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
            className="w-full border-2 border-darkGreen rounded p-1 outline-none"
            placeholder="Set city"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">PostOffice:</label>
          <input
            autoComplete="off"
            name="customPostIdName"
            type="text"
            value={postId}
            onChange={e => setPostId(e.target.value)}
            className="w-full border-2 border-darkGreen rounded p-1 outline-none"
            placeholder="Set PostOffice"
          />
        </div>
      </div>
    </form>
  );
};

export default MeestExpress;
