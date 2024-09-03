// NEXT_PUBLIC_UKRPOSTA_API_URL=https://api.ukrposhta.ua/v2/
// NEXT_PUBLIC_UKRPOSTA_API_KEY=your-ukrposhta-api-key

// import React, { useState, useEffect } from 'react';

// const UkrposhtaDelivery = () => {
//   const [regions, setRegions] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [selectedRegion, setSelectedRegion] = useState('');
//   const [selectedDistrict, setSelectedDistrict] = useState('');
//   const [loadingRegions, setLoadingRegions] = useState(true);
//   const [loadingDistricts, setLoadingDistricts] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRegions = async () => {
//       try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_UKRPOSTA_API_URL}regions`, {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${process.env.NEXT_PUBLIC_UKRPOSTA_API_KEY}`,
//             'Accept': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`Error: ${response.status}`);
//         }

//         const result = await response.json();
//         setRegions(result.data);
//         setLoadingRegions(false);
//       } catch (err) {
//         setError(err.message);
//         setLoadingRegions(false);
//       }
//     };

//     fetchRegions();
//   }, []);

//   useEffect(() => {
//     const fetchDistricts = async () => {
//       if (!selectedRegion) return;

//       setLoadingDistricts(true);
//       try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_UKRPOSTA_API_URL}districts?region=${selectedRegion}`, {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${process.env.NEXT_PUBLIC_UKRPOSTA_API_KEY}`,
//             'Accept': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`Error: ${response.status}`);
//         }

//         const result = await response.json();
//         setDistricts(result.data);
//         setLoadingDistricts(false);
//       } catch (err) {
//         setError(err.message);
//         setLoadingDistricts(false);
//       }
//     };

//     fetchDistricts();
//   }, [selectedRegion]);

//   const handleRegionChange = (event) => {
//     setSelectedRegion(event.target.value);
//     setSelectedDistrict(''); // Reset district selection when region changes
//   };

//   const handleDistrictChange = (event) => {
//     setSelectedDistrict(event.target.value);
//   };

//   if (loadingRegions) return <div>Loading regions...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h1>Select Your Delivery Options</h1>
//       <form>
//         <div>
//           <label htmlFor="region">Region:</label>
//           <select id="region" value={selectedRegion} onChange={handleRegionChange}>
//             <option value="">Select a region</option>
//             {regions.map((region) => (
//               <option key={region.id} value={region.id}>{region.name}</option>
//             ))}
//           </select>
//         </div>

//         {loadingDistricts ? (
//           <div>Loading districts...</div>
//         ) : (
//           <div>
//             <label htmlFor="district">District:</label>
//             <select
//               id="district"
//               value={selectedDistrict}
//               onChange={handleDistrictChange}
//               disabled={!selectedRegion}
//             >
//               <option value="">Select a district</option>
//               {districts.map((district) => (
//                 <option key={district.id} value={district.id}>{district.name}</option>
//               ))}
//             </select>
//           </div>
//         )}

//         <div>
//           <button type="submit" disabled={!selectedRegion || !selectedDistrict}>
//             Confirm Delivery
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UkrposhtaDelivery;
