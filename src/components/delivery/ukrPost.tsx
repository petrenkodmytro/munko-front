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
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [countrySearch, setCountrySearch] = useState<string>('');
  const [citySearch, setCitySearch] = useState<string>('');

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
  const fetchCities = async (countryCode: string) => {
    try {
      const response = await fetch(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${countryCode}/places`,
        {
          headers: {
            'X-RapidAPI-Key': 'c6f33c9c2fmsh2edc655614ffba8p13c36ajsn44eaae4da2bb', // Replace with your RapidAPI key
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
          },
        }
      );
      const data = await response.json();
      const cityList = data.data.map((region: any) => ({
        name: region.name,
      }));
      setCities(cityList);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  // Handle country selection and fetch cities
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.id)
    const countryCode = event.id;
    setSelectedCountry(countryCode);
    fetchCities(countryCode);
  };

  // Filter cities based on search input
  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(citySearch.toLowerCase())
  );

  return (
    <div className="">
      <form>
        {/* Country Search */}
        {/* <div className="mb-4">
          <label className="block text-gray-700">Search Country:</label>
          <input
            type="text"
            value={countrySearch}
            onChange={e => setCountrySearch(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Search country"
          />
        </div> */}

        {/* Country Select */}
        {/* <div className="mb-4">
          <label className="block text-gray-700">Select Country:</label>
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          >
            <option value="">Select a country</option>
            {filteredCountries.map(country => (
              <option key={country.cca2} value={country.cca2}>
                {country.name}
              </option>
            ))}
          </select>
        </div> */}

        <div>
          {/* <label className='mb-3' htmlFor="city">City:</label> */}
          <DatalistInput
            className="w-full border-2 border-darkGreen rounded p-2 outline-none"
            id="city"
            placeholder="Select a country"
            items={countries.map((country: { cca2: string; name: string }) => ({
              id: country.cca2,
              value: country.name,
            }))}
            onSelect={(e)=>handleCountryChange(e)}
            label="Select a country"
            showLabel={false}
          />
        </div>

        {/* City Search */}
        {selectedCountry && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Search City:</label>
              <input
                type="text"
                value={citySearch}
                onChange={e => setCitySearch(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Search city"
              />
            </div>

            {/* City Select */}
            <div className="mb-4">
              <label className="block text-gray-700">Select City:</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded">
                <option value="">Select a city</option>
                {filteredCities.map((city, index) => (
                  <option key={index} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default UkrPost;

// import React, { useState, useEffect } from 'react';

// const UkrposhtaDelivery = () => {
//   const [regions, setRegions] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [selectedRegion, setSelectedRegion] = useState('');
//   const [selectedDistrict, setSelectedDistrict] = useState('');
//   const [loadingRegions, setLoadingRegions] = useState(true);
//   const [loadingDistricts, setLoadingDistricts] = useState(false);
//   const [error, setError] = useState(null);

//   if (loadingRegions) return <div>Loading regions...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <form>
//       <div>
//         <label htmlFor="region">Region:</label>
//         <select
//           id="region"
//           value={selectedRegion}
//         //   onChange={handleRegionChange}
//         >
//           <option value="">Select a region</option>
//           {regions.map(region => (
//             <option key={region.id} value={region.id}>
//               {region.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {loadingDistricts ? (
//         <div>Loading districts...</div>
//       ) : (
//         <div>
//           <label htmlFor="district">District:</label>
//           <select
//             id="district"
//             value={selectedDistrict}
//             onChange={handleDistrictChange}
//             disabled={!selectedRegion}
//           >
//             <option value="">Select a district</option>
//             {districts.map(district => (
//               <option key={district.id} value={district.id}>
//                 {district.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}
//     </form>
//   );
// };

// export default UkrposhtaDelivery;
