import React, { useState, useEffect } from 'react';
import DatalistInput from 'react-datalist-input';

interface Country {
  name: string;
  cca2: string;
}

interface City {
  name: string;
}

const UkrPost: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
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

  // Fetch cities based on selected country from GeoDB Cities API
  // const fetchCities = async (countryCode: string) => {
  //   try {
  //     const response = await fetch(
  //       `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${countryCode}/places`,
  //       {
  //         headers: {
  //           'X-RapidAPI-Key':
  //             'c6f33c9c2fmsh2edc655614ffba8p13c36ajsn44eaae4da2bb', // Replace with your RapidAPI key
  //           'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  //         },
  //       }
  //     );
  //     const data = await response.json();
  //     const cityList = data.data.map((region: any) => ({
  //       name: region.name,
  //     }));
  //     setCities(cityList);
  //   } catch (error) {
  //     console.error('Error fetching cities:', error);
  //   }
  // };

  // Handle country selection and fetch cities
  const handleCountryChange = (value: { id: string; value: string }) => {
    console.log(value.value);
    const country = value.value;
    setSelectedCountry(country);
    // fetchCities(countryCode);
  };

  // Filter cities based on search input
  // const filteredCities = cities.filter(city =>
  //   city.name.toLowerCase().includes(citySearch.toLowerCase())
  // );

  return (
    <form autoComplete='off' className="">
      {/* Country Search */}
      {/* <label className='mb-3' htmlFor="city">City:</label> */}
      <DatalistInput
        className="w-full border-2 border-darkGreen rounded p-2 outline-none"
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

      <div className="mb-4">
        <label className="block text-gray-700">City:</label>
        <input
          autoComplete="off"
          name="customCityName"
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="Set city"
        />
      </div>
      <div className="flex mb-4">
        <label className="block text-gray-700">Street:</label>
        <input
          autoComplete="off"
          name="customStreetName"
          type="text"
          value={street}
          onChange={e => setStreet(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="Set street"
        />
        <label className="block text-gray-700">House:</label>
        <input
          autoComplete="off"
          name="customHouseName"
          type="text"
          value={house}
          onChange={e => setHouse(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="Set house"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">PostIndex:</label>
        <input
          autoComplete="off"
          name="customPostIdName"
          type="text"
          value={postId}
          onChange={e => setPostId(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="Set postId"
        />
      </div>
    </form>
  );
};

export default UkrPost;
