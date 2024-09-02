// import React, { useState, useEffect } from 'react';
// import DatalistInput from 'react-datalist-input';

// const NovaPost = () => {
//   const [cities, setCities] = useState([]);
//   const [postOffices, setPostOffices] = useState([]);
//   const [selectedCity, setSelectedCity] = useState('');
//   const [selectedPostOffice, setSelectedPostOffice] = useState('');
//   const [loadingCities, setLoadingCities] = useState(true);
//   const [loadingPostOffices, setLoadingPostOffices] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCities = async () => {
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_REACT_APP_DELIVERY_API_URL}json/`,
//           {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//               Accept: 'application/json',
//             },
//             body: JSON.stringify({
//               apiKey: process.env.NEXT_PUBLIC_REACT_APP_DELIVERY_API_KEY,
//               modelName: 'Address',
//               calledMethod: 'getCities',
//               methodProperties: {},
//             }),
//           }
//         );

//         if (!response.ok) {
//           throw new Error(`Error: ${response.status}`);
//         }

//         const result = await response.json();
//         setCities(result.data);
//         setLoadingCities(false);
//       } catch (err) {
//         setError(err.message);
//         setLoadingCities(false);
//       }
//     };

//     fetchCities();
//   }, []);

//   useEffect(() => {
//     const fetchPostOffices = async () => {
//       if (!selectedCity) return;

//       setLoadingPostOffices(true);
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_REACT_APP_DELIVERY_API_URL}json/`,
//           {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//               Accept: 'application/json',
//             },
//             body: JSON.stringify({
//               apiKey: process.env.NEXT_PUBLIC_REACT_APP_DELIVERY_API_KEY,
//               modelName: 'Address',
//               calledMethod: 'getWarehouses',
//               methodProperties: {
//                 CityRef: selectedCity,
//               },
//             }),
//           }
//         );

//         if (!response.ok) {
//           throw new Error(`Error: ${response.status}`);
//         }

//         const result = await response.json();
//         setPostOffices(result.data);
//         setLoadingPostOffices(false);
//       } catch (err) {
//         setError(err.message);
//         setLoadingPostOffices(false);
//       }
//     };

//     fetchPostOffices();
//   }, [selectedCity]);

//   const handleCityChange = selectedItem => {
//     setSelectedCity(selectedItem.value);
//     setSelectedPostOffice(''); // Reset post office selection when city changes
//   };

//   const handlePostOfficeChange = selectedItem => {
//     setSelectedPostOffice(selectedItem.value);
//   };

//   if (loadingCities) return <div>Loading cities...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h1>Select Your Delivery Options</h1>
//       <form>
//         <div>
//           <label htmlFor="city">City:</label>
//           <DatalistInput
//             id="city"
//             placeholder="Select a city"
//             items={cities.map(city => ({
//               id: city.Ref,
//               value: city.Description,
//             }))}
//             onSelect={handleCityChange}
//             // label="Select a city"
//             // showLabel={true}
//           />
//         </div>

//         {loadingPostOffices ? (
//           <div>Loading post offices...</div>
//         ) : (
//      <div>
{/* <label htmlFor="postOffice">Post Office:</label>
<DatalistInput
  id="postOffice"
  placeholder="Select a post office"
  items={postOffices.map((office) => ({
    id: office.Ref,
    value: office.Description,
  }))}
  onSelect={handlePostOfficeChange}
  disabled={!selectedCity}
/>
</div> */}
//         )}

//         <div>
//           <button type="submit" disabled={!selectedCity || !selectedPostOffice}>
//             Confirm Delivery
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default NovaPost;

import React, { useState, useEffect } from 'react';

const NovaPost = () => {
  const [cities, setCities] = useState([]);
  const [postOffices, setPostOffices] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPostOffice, setSelectedPostOffice] = useState('');
  const [loadingCities, setLoadingCities] = useState(true);
  const [loadingPostOffices, setLoadingPostOffices] = useState(false);
  const [error, setError] = useState(null);

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
      } catch (err) {
        setError(err.message);
        setLoadingCities(false);
      }
    };

    fetchCities();
  }, []);

  useEffect(() => {
    const fetchPostOffices = async () => {
      if (!selectedCity) return;

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
                CityRef: selectedCity,
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
      } catch (err) {
        setError(err.message);
        setLoadingPostOffices(false);
      }
    };

    fetchPostOffices();
  }, [selectedCity]);

  const handleCityChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedCity(event.target.value);
    setSelectedPostOffice(''); // Reset post office selection when city changes
  };

  const handlePostOfficeChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedPostOffice(event.target.value);
  };

  if (loadingCities) return <div>Loading cities...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Select Your Delivery Options</h1>
      <form>
        <div>
          <label htmlFor="city">City:</label>
          <select id="city" value={selectedCity} onChange={handleCityChange}>
            <option value="">Select a city</option>
            {cities.map(city => (
              <option key={city.Ref} value={city.Ref}>
                {city.Description}
              </option>
            ))}
          </select>
        </div>

        {loadingPostOffices ? (
          <div>Loading post offices...</div>
        ) : (
          <div>
            <label htmlFor="postOffice">Post Office:</label>
            <select
              id="postOffice"
              value={selectedPostOffice}
              onChange={handlePostOfficeChange}
              disabled={!selectedCity}
            >
              <option value="">Select a post office</option>
              {postOffices.map(office => (
                <option key={office.Ref} value={office.Ref}>
                  {office.Description}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <button type="submit" disabled={!selectedCity || !selectedPostOffice}>
            Confirm Delivery
          </button>
        </div>
      </form>
    </div>
  );
};

export default NovaPost;




// import React, {
//   ChangeEvent,
//   SyntheticEvent,
//   FC,
//   useContext,
//   useEffect,
//   useState,
//   useCallback,
// } from 'react';
// import {
//   Form,
//   Input,
//   FormGroup,
//   Button,
//   Label,
//   FormFeedback,
//   Row,
//   Col,
//   Popover,
//   PopoverBody,
// } from 'reactstrap';
// import Select from 'react-select';
// import { useRouter } from 'next/router';

// import styles from './delivery.module.scss';
// import {
//   ICity,
//   ISetCity,
//   ISetStreet,
//   IStreet,
// } from '../../interfaces/delivery/delivery';
// import { DeliveryMethods, PaymentMethods } from '../../enums/order';
// import { api } from '../../api';

// import { IUser } from '../../interfaces/user/userData';
// import { IOrder, UseProductsInCart } from '../../hooks/cart/useProductsInCart';
// import { IPopoverState } from '../../interfaces/user/auth';
// import { LiqpayStatus } from 'enums/liqpay';
// import { EAuthTabs } from '../../interfaces/modal';
// import { LoginTab } from '../../components/context/login-tab';
// import { CouponContext } from 'components/context/coupon-contex';
// import { useSession } from 'next-auth/react';

// interface DeliveryWidgetProps {
//   streets: IStreet[];
//   cities: ICity[];
//   setSelectCity: (arg: ISetCity) => void;
//   selectCity: any;
//   setSelectStreet: (arg: ISetStreet) => void;
//   selectStreet: any;
//   changeInputCity: (arg: string) => void;
//   getCities: (arg: number) => void;
//   defaultList: boolean;
//   formik: any;
//   activeTab?: number;
// }

// const DeliveryWidget: FC<DeliveryWidgetProps> = ({
//   formik,
//   streets,
//   cities,
//   setSelectCity,
//   selectCity,
//   setSelectStreet,
//   selectStreet,
//   changeInputCity,
//   getCities,
//   defaultList,
//   activeTab,
// }) => {
//   const { data: session } = useSession();
//   const user = session?.user;

//   const [citiesPage, setCitiesPage] = useState(1);
//   const [popoverOpen, setPopoverOpen] = useState(false);
//   const [popoverState, setPopoverState] = useState<IPopoverState>();

//   const [isShowButtonOrder, setIsShowButtonOrder] = useState(false);
//   const [isShowRadioPostPay, setIsShowRadioPostPay] = useState<boolean>(true);

//   const router = useRouter();
//   const togglePop = () => setPopoverOpen(!popoverOpen);

//   const { productsInCart } = UseProductsInCart();

//   const defaultCities =
//     cities &&
//     cities.map(item => ({
//       value: `${item.Description}, ${item.AreaDescription}`,
//       label: `${item.Description}, ${item.AreaDescription}`,
//       MainDescription: item.Description,
//       DeliveryCity: item.Ref,
//       Area: item.Area,
//     }));

//   const optionsCity =
//     cities &&
//     cities.map(item => ({
//       value: item.Present,
//       label: item.Present,
//       MainDescription: item.MainDescription,
//       DeliveryCity: item.DeliveryCity,
//       Area: item.Area,
//     }));

//   const optionsDelivery = [{ value: 'Нова Пошта', label: 'Нова Пошта' }];

//   const optionsStreet =
//     streets &&
//     streets.map(item => ({
//       value: item.Description,
//       label: item.Description,
//       Ref: item.Ref,
//     }));

//   // useEffect(() => {
//   //   const getProfile = async (user: IUser | null = null) => {
//   //     if (!user) {
//   //       const profile = await api.user.getUser();
//   //       setSelectCity({
//   //         Area: profile?.data?.delivery?.areaName || '',
//   //         DeliveryCity: profile?.data?.delivery?.cityRef || '',
//   //         MainDescription: profile?.data?.delivery?.cityName || '',
//   //         value: profile?.data?.delivery?.cityFullName || '',
//   //         label: profile?.data?.delivery?.cityFullName || '',
//   //       });
//   //     }
//   //   };

//   //   getProfile(user);
//   // }, [user]);

//   const getProfile = useCallback(async (user: IUser | null = null) => {
//     if (!user) {
//       const profile = await api.user.getUser();
//       setSelectCity({
//         Area: profile?.data?.delivery?.areaName || '',
//         DeliveryCity: profile?.data?.delivery?.cityRef || '',
//         MainDescription: profile?.data?.delivery?.cityName || '',
//         value: profile?.data?.delivery?.cityFullName || '',
//         label: profile?.data?.delivery?.cityFullName || '',
//       });
//     }
//   }, []);

//   useEffect(() => {
//     getProfile(user);
//   }, [user, getProfile]);

//   useEffect(() => {
//     if (router.pathname === '/delivery' && user) {
//       formik.initialValues.firstName = user?.firstName;
//       formik.initialValues.lastName = user?.lastName;
//       formik.initialValues.phoneNumber = user?.phone;
//       formik.initialValues.email = user?.email;
//     }
//   }, [user]);

//   useEffect(() => {
//     getCities(citiesPage);
//   }, [citiesPage]);

//   useEffect(() => {
//     if (formik.values?.deliveryMethod === DeliveryMethods.courier) {
//       const deliveryValuesLS =
//         typeof window !== 'undefined' && localStorage.getItem('deliveryValues');
//       const deliveryValues = deliveryValuesLS && JSON.parse(deliveryValuesLS);
//       formik.setFieldValue(
//         'courierDeliveryAddress',
//         deliveryValues.courierDeliveryAddress
//       );
//       formik.setTouched(
//         { ...formik.touched, ['courierDeliveryAddress']: false },
//         false
//       );
//     }
//   }, [formik.values?.deliveryMethod]);

//   const deliveryFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!user && activeTab === 1) {
//       console.log(e);
//       setPopoverState({ message: 'Необхідно авторизуватись' });
//       togglePop();
//       const timeout = setTimeout(() => {
//         setPopoverOpen(false);
//       }, 5000);
//       return () => clearTimeout(timeout);
//     }
//     formik.handleSubmit();
//   };

//   const handleScroll = (e: SyntheticEvent<HTMLElement, Event>): void => {
//     const target = e.target as HTMLElement;
//     if (cities?.length) {
//       const bottom =
//         target.scrollHeight - target.scrollTop === target.clientHeight;
//       if (bottom) {
//         setCitiesPage(prev => prev + 1);
//       }
//     }
//   };

//   const customStyles = {
//     control: (provided: any, state: any) => ({
//       ...provided,
//       height: '50px',
//       borderRadius: '10px',
//       border: state.isFocused ? '1px solid #1ba34f' : '1px solid #e2e6e7',
//       boxShadow: state.isFocused ? '0px 0px 6px #92efa3' : 'none',

//       ':hover': {
//         ...provided[':hover'],
//         border: '2px solid #1ba34f',
//         boxShadow: 'none',
//       },

//       valueContainer: () => ({
//         paddingLeft: '10px',
//         height: '30px',
//         input: () => ({
//           height: '30px',
//         }),
//         singleValue: () => ({
//           position: 'absolute',
//           paddingRight: '50px',
//           marginLeft: '2px',
//           marginRight: '2px',
//           maxWidth: 'calc(100% - 8px)',
//           overflow: 'hidden',
//           textOverflow: 'ellipsis',
//           whiteSpace: 'nowrap',
//           top: '50%',
//           transform: 'translateY(-50%)',
//         }),
//       }),
//     }),
//     option: (styles: string[], { isDisabled, isFocused, isSelected }: any) => {
//       return {
//         ...styles,
//         backgroundColor: isDisabled
//           ? undefined
//           : isSelected
//             ? '#92efa3'
//             : isFocused
//               ? '#92efa3'
//               : undefined,
//         cursor: isDisabled ? 'white' : 'black',

//         ':active': {
//           ...styles[':active'],
//           backgroundColor: !isDisabled
//             ? isSelected
//               ? 'white'
//               : '#26ba62'
//             : undefined,
//           borderColor: '#26ba62',
//         },
//       };
//     },
//   };

//   useEffect(() => {
//     productsInCart?.forEach(order => {
//       if (order.product.shopKey === 'olla') setIsShowRadioPostPay(false);
//     });
//   }, [productsInCart]);

//   return (
//     <div className={styles['delivery_widget']}>
//       <Form onSubmit={deliveryFormSubmit} className={styles['delivery_form']}>
//         {user && (
//           <>
//             <div className={styles.control}>
//               <FormGroup className={styles.formGroups}>
//                 <Select
//                   type="input"
//                   id="selectDelivery"
//                   name="selectDelivery"
//                   isSearchable={false}
//                   options={optionsDelivery}
//                   className={styles.input_mask}
//                   styles={customStyles}
//                   defaultValue={{ label: 'Нова Пошта', value: 'Нова Пошта' }}
//                 />
//                 <span className={styles.np_icon}></span>
//               </FormGroup>
//             </div>
//             <FormGroup className={styles.formGroups}>
//               <Select
//                 onMenuScrollToBottom={(
//                   e: React.SyntheticEvent<HTMLElement, Event>
//                 ) => handleScroll(e)}
//                 id="selectCity"
//                 instanceId="selectCity"
//                 name="selectCity"
//                 styles={customStyles}
//                 options={defaultList ? defaultCities : optionsCity}
//                 defaultValue={selectCity}
//                 value={selectCity?.value ? selectCity : 'Введіть назву міста'}
//                 onInputChange={value => changeInputCity(value)}
//                 placeholder="Введіть назву міста"
//                 onChange={setSelectCity}
//                 onFocus={() => {
//                   !cities?.length && getCities(citiesPage);
//                 }}
//                 onBlur={() => {
//                   setCitiesPage(1);
//                 }}
//               />
//             </FormGroup>
//             <FormGroup className={styles.formGroups}>
//               <Select
//                 id="selectStreet"
//                 instanceId="selectStreet"
//                 name="selectStreet"
//                 styles={customStyles}
//                 options={optionsStreet}
//                 defaultValue={selectStreet}
//                 value={
//                   selectStreet?.value ? selectStreet : 'Введіть назву вулиці'
//                 }
//                 placeholder="Введіть назву вулиці"
//                 onChange={setSelectStreet}
//               />
//             </FormGroup>
//             <FormGroup
//               className={`${styles['delivery_methods-block']} ${styles.formGroups}`}
//             >
//               <legend>Оберіть спосіб доставки</legend>
//               <Row className="justify-content-start ml-4">
//                 <Col lg={5}>
//                   <Input
//                     type="radio"
//                     id={DeliveryMethods.courier}
//                     name="deliveryMethod"
//                     value={DeliveryMethods.courier}
//                     checked={
//                       formik.values?.deliveryMethod === DeliveryMethods.courier
//                     }
//                     onChange={formik.handleChange}
//                   />
//                   <Label htmlFor={DeliveryMethods.courier}>
//                     Кур`&apos;`єрська доставка
//                   </Label>
//                 </Col>
//                 <Col lg={5}>
//                   <Input
//                     type="radio"
//                     id={DeliveryMethods.selfPickup}
//                     name="deliveryMethod"
//                     value={DeliveryMethods.selfPickup}
//                     checked={
//                       formik.values?.deliveryMethod ===
//                       DeliveryMethods.selfPickup
//                     }
//                     onChange={formik.handleChange}
//                   />
//                   <Label htmlFor={DeliveryMethods.selfPickup}>Самовивіз</Label>
//                 </Col>
//               </Row>
//               <FormFeedback
//                 className={
//                   formik.errors.deliveryMethod && formik.touched.deliveryMethod
//                     ? 'd-block'
//                     : ''
//                 }
//               >
//                 {formik.errors.deliveryMethod}
//               </FormFeedback>
//             </FormGroup>
//             {formik.values?.deliveryMethod === DeliveryMethods.courier && (
//               <FormGroup
//                 className={styles['delivery_courier-delivery-address']}
//               >
//                 <Input
//                   type="text"
//                   name="courierDeliveryAddress"
//                   id="courierDeliveryAddress"
//                   placeholder="Адреса для кур&#39;єрської доставки"
//                   value={formik.values.courierDeliveryAddress}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   invalid={
//                     !!(
//                       formik.values?.deliveryMethod ===
//                         DeliveryMethods.courier &&
//                       formik.errors.courierDeliveryAddress &&
//                       formik.touched.courierDeliveryAddress
//                     )
//                   }
//                 />
//                 <FormFeedback>
//                   {formik.errors.courierDeliveryAddress}
//                 </FormFeedback>
//               </FormGroup>
//             )}
//             <FormGroup className={styles['delivery_comment-block']}>
//               <Label for="comment">Коментар до замовлення</Label>
//               <Input
//                 type="textarea"
//                 name="comment"
//                 id="comment"
//                 value={formik.values.comment}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 placeholder="Ви можете залишити коментар до Вашого замовлення..."
//                 invalid={!!(formik.errors.comment && formik.touched.comment)}
//               />
//               <FormFeedback>{formik.errors.comment}</FormFeedback>
//             </FormGroup>
//             <FormGroup
//               className={`${styles['delivery_methods-block']} ${styles.formGroups}`}
//             >
//               {paymentStatus !== LiqpayStatus.success && (
//                 <>
//                   <legend>Оберіть спосіб оплати </legend>
//                   <Row className="justify-content-start ml-4 mb-2">
//                     <Col lg={5}>
//                       <Input
//                         type="radio"
//                         id={PaymentMethods.liqPay}
//                         name="paymentMethod"
//                         value={PaymentMethods.liqPay}
//                         checked={
//                           formik.values.paymentMethod === PaymentMethods.liqPay
//                         }
//                         onChange={formik.handleChange}
//                       />
//                       <Label htmlFor={PaymentMethods.liqPay}>LiqPay</Label>
//                     </Col>
//                     {isShowRadioPostPay && (
//                       <Col lg={5}>
//                         <Input
//                           type="radio"
//                           id={PaymentMethods.postPay}
//                           name="paymentMethod"
//                           value={PaymentMethods.postPay}
//                           checked={
//                             formik.values.paymentMethod ===
//                             PaymentMethods.postPay
//                           }
//                           onChange={formik.handleChange}
//                         />
//                         <Label htmlFor={PaymentMethods.postPay}>
//                           Післяплата
//                         </Label>
//                       </Col>
//                     )}
//                   </Row>
//                 </>
//               )}

//               <FormFeedback
//                 className={
//                   formik.errors.paymentMethod && formik.touched.paymentMethod
//                     ? 'd-block'
//                     : ''
//                 }
//               >
//                 {formik.errors.paymentMethod}
//               </FormFeedback>
//             </FormGroup>
//           </>
//         )}
//         {isShowButtonOrder && (
//           <>
//             <Popover placement="top" isOpen={popoverOpen} target="fastOrderPop">
//               <PopoverBody>{popoverState?.message}</PopoverBody>
//             </Popover>
//             <Button
//               id="fastOrderPop"
//               className={styles['delivery_btnSubmit']}
//               type="submit"
//               // disabled={formik.isSubmitting}
//             >
//               {user ? 'Оформити замовлення' : 'Оформлення замовлення'}
//             </Button>
//           </>
//         )}
//       </Form>
//     </div>
//   );
// };

// export default DeliveryWidget;
