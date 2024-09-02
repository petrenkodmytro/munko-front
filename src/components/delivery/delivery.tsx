// import React, { FC, useContext, useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import * as Yup from 'yup';
// import { useFormik } from 'formik';

// import { api } from '../api';

// import {
//   IAddDelivery,
//   ICity,
//   ISetCity,
//   ISetStreet,
//   IStreet,
// } from '../interfaces/delivery/delivery';
// import { apiDelivery } from '../api/delivery';
// import { IPopoverState } from '../interfaces/user/auth';
// import { IAdditionalOrderFields } from '../interfaces/order';
// import { DeliveryMethods } from 'enums/order';
// import DeliveryWidget from './novaPost';

// const DeliveryPage: FC = () => {
//   const apiKey = process.env.NEXT_PUBLIC_REACT_APP_DELIVERY_API_KEY;
//   const [active, setActive] = useState(0);
//   const [defaultList, setDefaultList] = useState(true);
//   const [visible, setVisible] = useState(false);
//   const [popoverOpen, setPopoverOpen] = useState(false);
//   const [popoverState, setPopoverState] = useState<IPopoverState>({
//     message: '',
//     statusCode: 0,
//   });
//   const [cities, setCities] = useState<ICity[]>([]);
//   const [streets, setStreets] = useState<IStreet[]>([]);
//   const [selectCity, setSelectCity] = useState<ISetCity>({
//     Area: '',
//     DeliveryCity: '',
//     MainDescription: '',
//     value: '',
//     label: '',
//   });
//   const [selectStreet, setSelectStreet] = useState<ISetStreet>({
//     value: '',
//     label: '',
//     Ref: '',
//   });
//   const [activeCashback, setActiveCashback] = useState(false);
//   const deliveryValuesLS =
//     typeof window !== 'undefined' && localStorage.getItem('deliveryValues');
//   const deliveryValues = deliveryValuesLS && JSON.parse(deliveryValuesLS);

//   const togglePop = () => setPopoverOpen(!popoverOpen);

//   const validationSchema = Yup.object().shape({
//     comment: Yup.string().max(500, 'Максимальна кількість символів: 500'),
//     deliveryMethod: Yup.string().required('Вкажіть спосіб доставки'),
//     courierDeliveryAddress: Yup.string().required('Вкажіть адресу доставки'),
//     paymentMethod: Yup.string().required('Вкажіть спосіб оплати'),
//   });

//   const getSettlements = async (page: number) => {
//     const { data } = await apiDelivery.newPost.getCity({
//       apiKey: `${apiKey}`,
//       modelName: 'Address',
//       calledMethod: 'getCities',
//       methodProperties: {
//         Page: `${page}`,
//         Limit: 30,
//       },
//     });
//     if (page === 1) {
//       setCities(data.data);
//       return;
//     }
//     data.data.map((obj: any) => {
//       setCities(prevState => [...prevState, obj]);
//     });
//   };

//   const searchSettlements = async (value: string) => {
//     const { data } = await apiDelivery.newPost.getCity({
//       apiKey: `${apiKey}`,
//       modelName: 'Address',
//       calledMethod: 'searchSettlements',
//       methodProperties: {
//         CityName: `${value}`,
//         Limit: 50,
//       },
//     });
//     setCities(data.data[0]?.Addresses);
//   };

//   useEffect(() => {
//     // if (selectCity) {
//     //   const getWarehouses = async () => {
//     //     if (selectCity?.value) {
//     //       const { data: getWarehouses } = await apiDelivery.newPost.getStreet({
//     //         apiKey: `${apiKey}`,
//     //         modelName: 'AddressGeneral',
//     //         calledMethod: 'getWarehouses',
//     //         methodProperties: {
//     //           CityRef: `${selectCity?.DeliveryCity}`,
//     //         },
//     //       });
//     //       setStreets(getWarehouses.data);
//     //       if (!getWarehouses.data.length)
//     //         setSelectStreet({
//     //           value: '',
//     //           label: '',
//     //           Ref: '',
//     //         });
//     //     }
//     //   };
//     //   getWarehouses();
//     // }
//     const getWarehouses = async () => {
//       if (selectCity?.value) {
//         try {
//           const { data: getWarehouses } = await apiDelivery.newPost.getStreet({
//             apiKey: `${apiKey}`,
//             modelName: 'AddressGeneral',
//             calledMethod: 'getWarehouses',
//             methodProperties: {
//               CityRef: `${selectCity?.DeliveryCity}`,
//             },
//           });
//           setStreets(getWarehouses.data);
//           if (!getWarehouses.data.length)
//             setSelectStreet({
//               value: '',
//               label: '',
//               Ref: '',
//             });
//         } catch (error) {
//           console.error('Error fetching warehouses:', error);
//         }
//       }
//     };
//     getWarehouses();
//   }, [selectCity, apiKey]);

//   const changeInputCity = (value: string) => {
//     if (value.trim().length >= 2) {
//       const timeout = setTimeout(() => {
//         setDefaultList(false);
//         searchSettlements(value);
//       }, 500);
//       return () => clearTimeout(timeout);
//     }
//     const timer = setTimeout(() => {
//       setDefaultList(true);
//       getSettlements(1);
//     }, 500);
//     return () => clearTimeout(timer);
//   };

//   const getCities = (page: number) => {
//     if (page > 0) {
//       const timeout = setTimeout(() => {
//         getSettlements(page);
//       }, 500);
//       return () => clearTimeout(timeout);
//     }
//   };

//   const createDelivery = async (data: IAddDelivery) => {
//     const response = await api.delivery.createDelivery(data);
//     console.log(response);
//     if (response.error) {
//       setPopoverState({ message: 'Вкажіть місто та відділення для доставки!' });
//       togglePop();
//       const timeout = setTimeout(() => {
//         setPopoverOpen(false);
//       }, 5000);
//       return () => clearTimeout(timeout);
//     }
//     if (response?.data?.id) {
//       const {
//         firstName,
//         lastName,
//         email,
//         phoneNumber,
//         comment,
//         paymentMethod,
//       } = formik.values;
//       const additionalFields: IAdditionalOrderFields = {};
//       additionalFields.additionalFirstName = firstName;
//       additionalFields.additionalLastName = lastName;
//       additionalFields.additionalEmail = email;
//       additionalFields.additionalNumber = phoneNumber;
//       if (comment.trim().length) additionalFields.comment = comment;
//       additionalFields.paymentMethod = paymentMethod;
//       const { error } = await api.orders.changeOrderStatusPending({
//         ...response?.data,
//         ...additionalFields,
//       });
//       console.log(
//         await api.orders.changeOrderStatusPending({
//           ...response?.data,
//           ...additionalFields,
//         })
//       );

//       if (error) {
//         setPopoverState({ ...error });
//         togglePop();
//         const timeout = setTimeout(() => {
//           setPopoverOpen(false);
//         }, 5000);
//         return () => clearTimeout(timeout);
//       }
//     }
//   };

//   const formik = useFormik({
//     initialValues: {
//       firstName: user?.firstName || '',
//       lastName: user?.lastName || '',
//       phoneNumber: user?.phoneNumber || '',
//       email: user?.email || '',
//       deliveryMethod: deliveryValues?.deliveryMethod || '',
//       courierDeliveryAddress: deliveryValues?.courierDeliveryAddress || '',
//       paymentMethod: '',
//       comment: deliveryValues?.comment || '',
//     },
//     validationSchema,
//     onSubmit: async values => {
//       const {
//         Area,
//         MainDescription,
//         value: Present,
//         DeliveryCity,
//       } = selectCity;
//       const { value: Description, Ref } = selectStreet;
//       const deliveryData = {
//         areaName: Area || 'dbdr',
//         cityName: MainDescription || 'dbdr',
//         cityFullName: Present || 'dbr',
//         cityRef: DeliveryCity || 'dbrd',
//         streetName: Description || 'bdrb',
//         streetRef: Ref || 'dbr',
//         deliveryMethod: formik.values.deliveryMethod || '',
//         courierDeliveryAddress:
//           formik.values.deliveryMethod === DeliveryMethods.courier
//             ? formik.values.courierDeliveryAddress
//             : null,
//         paymentMethod: formik.values.paymentMethod || '',
//         usedCashback: activeCashback || false,
//       };
//       if (!user) {
//         const { data, error } = await registerCutUser(values);
//         if (error) {
//           setPopoverState({ ...error });
//           togglePop();
//           const timeout = setTimeout(() => {
//             setPopoverOpen(false);
//           }, 5000);
//           return () => clearTimeout(timeout);
//         }
//         const { token, user, isExistingUser, message } = data;
//         if (message) {
//           setPopoverState({ message: message });
//           togglePop();
//           const timeout = setTimeout(() => {
//             setPopoverOpen(false);
//           }, 5000);
//           return () => clearTimeout(timeout);
//         }
//         setGlobalUser(user);
//         // setToken(token);
//         setTokenCookies(token);
//         setVisible(!isExistingUser);
//         await useCartReplace(mutate, cartData!);
//         formik.touched.deliveryMethod = false;
//         formik.touched.paymentMethod = false;
//         return;
//       }
//       // if (isActive) {
//       //   reset();
//       // }
//       await createDelivery(deliveryData);
//     },
//   });

//   useEffect(() => {
//     onFocus();

//     if (deliveryValuesLS) {
//       setSelectCity(JSON.parse(deliveryValuesLS)?.selectCity);
//       setSelectStreet(JSON.parse(deliveryValuesLS)?.selectStreet);
//     }
//   }, []);

//   useEffect(() => {
//     streets.length &&
//       streets.findIndex(
//         street => street.Description === selectStreet?.value
//       ) === -1 &&
//       setSelectStreet({
//         value: '',
//         label: '',
//         Ref: '',
//       });
//   }, [streets]);

//   useEffect(() => {
//     localStorage.setItem(
//       'deliveryValues',
//       JSON.stringify({
//         ...deliveryValues,
//         deliveryMethod: formik.values.deliveryMethod,
//         courierDeliveryAddress: formik.values.courierDeliveryAddress,
//         comment: formik.values.comment,
//       })
//     );
//   }, [formik.values]);

//   useEffect(() => {
//     localStorage.setItem(
//       'deliveryValues',
//       JSON.stringify({ ...deliveryValues, selectCity, selectStreet })
//     );
//   }, [selectCity, selectStreet]);

//   return (
//     <>
//       <DeliveryWidget
//         formik={formik}
//         streets={streets}
//         cities={cities}
//         setSelectCity={setSelectCity}
//         selectCity={selectCity}
//         setSelectStreet={setSelectStreet}
//         selectStreet={selectStreet}
//         changeInputCity={changeInputCity}
//         getCities={getCities}
//         defaultList={defaultList}
//         activeTab={active}


//       />
//     </>
//   );
// };

// export default DeliveryPage;
