import React, { useState, useEffect } from 'react';
import DatalistInput from 'react-datalist-input';
import Spinner from '../loading/loading';

const NovaPost = () => {
  const [cities, setCities] = useState([]);
  const [postOffices, setPostOffices] = useState([]);
  const [selectedCity, setSelectedCity] = useState({ id: '', value: '' });
  const [selectedPostOffice, setSelectedPostOffice] = useState('');
  const [loadingCities, setLoadingCities] = useState(true);
  const [loadingPostOffices, setLoadingPostOffices] = useState(false);
  const [error, setError] = useState(null);
  // console.log(cities);
  // console.log(postOffices);
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_REACT_APP_DELIVERY_API_URL}json/`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              apiKey: process.env.NEXT_PUBLIC_REACT_APP_DELIVERY_API_KEY,
              modelName: 'Address',
              calledMethod: 'getCities',
              methodProperties: {},
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        setCities(result.data);
        setLoadingCities(false);
      } catch (err: any) {
        setError(err.message);
        setLoadingCities(false);
      }
    };

    fetchCities();
  }, []);

  useEffect(() => {
    const fetchPostOffices = async () => {
      if (!selectedCity.value) return;

      setLoadingPostOffices(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_REACT_APP_DELIVERY_API_URL}json/`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              apiKey: process.env.NEXT_PUBLIC_REACT_APP_DELIVERY_API_KEY,
              modelName: 'Address',
              calledMethod: 'getWarehouses',
              methodProperties: {
                CityRef: selectedCity.id,
              },
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        setPostOffices(result.data);
        setLoadingPostOffices(false);
      } catch (err: any) {
        setError(err?.message);
        setLoadingPostOffices(false);
      }
    };

    fetchPostOffices();
  }, [selectedCity]);

  const handleCityChange = (selectedItem: any) => {
    console.log(selectedItem);
    setSelectedCity(selectedItem);
    setSelectedPostOffice(''); // Reset post office selection when city changes
  };

  const handlePostOfficeChange = (selectedItem: any) => {
    setSelectedPostOffice(selectedItem.value);
  };

  if (loadingCities)
    return (
      <div>
        <Spinner />
      </div>
    );

  if (error) return <div>Error: {error}</div>;

  return (
    <form className="flex flex-col gap-3 py-3">
      <div>
        {/* <label className='mb-3' htmlFor="city">City:</label> */}
        <DatalistInput
          className="w-full border-2 border-darkGreen rounded p-2 outline-none"
          id="city"
          placeholder="Select a city"
          items={cities.map((city: { Ref: string; Description: string }) => ({
            id: city.Ref,
            value: city.Description,
          }))}
          onSelect={handleCityChange}
          label="Select a city"
          showLabel={false}
        />
      </div>
      <div>
        {/* <label className='mb-3' htmlFor="postOffice">Post Office:</label> */}
        <DatalistInput
          className="w-full border-2 border-darkGreen rounded p-2 outline-none"
          id="postOffice"
          placeholder="Select a post office"
          items={postOffices.map(
            (office: { Ref: string; Description: string }) => ({
              id: office.Ref,
              value: office.Description,
            })
          )}
          onSelect={handlePostOfficeChange}
          label="Select a post office"
          showLabel={false}
        />
      </div>
    </form>
  );
};

export default NovaPost;
