import {
  ICard,
  NewUser,
  IDataFilteredCatalog,
  IFilterAttributes,
  IFilteredParams,
  IReview,
  ICartCard,
  IDataCatalog,
  IDataOrders,
  IDataItem,
  IDataReviewById,
  IDataCartItems,
  IDataFavoriteItems,
  CreditCard,
} from '@/types/types';
import { GraphQLClient, gql } from 'graphql-request';
import { User } from 'next-auth';

const endpoint = 'https://funkopop.onrender.com/graphql';

const graphQLClient = new GraphQLClient(endpoint);
// const graphQLClient = new GraphQLClient(endpoint, {
//   method: `GET`,
//   jsonSerializer: {
//     parse: JSON.parse,
//     stringify: JSON.stringify,
//   },
// })

export const getCatalog = async () => {
  const query = gql`
    query GetAllItems {
      getAllItems(paging: { perPage: 12 }) {
        items {
          id
          name
          images
          price
          amount
          description
          sale
          collection
          sublicense
          series
          category
          productType
          date
        }
      }
    }
  `;
  try {
    const data: IDataCatalog = await graphQLClient.request(query);
    let dataCards = data.getAllItems.items;
    // console.log(dataCards)
    return dataCards;
  } catch (error: any) {
    console.log(error.response);
    return error.response;
  }
};

export const getItem = async (id: string) => {
  const query = gql`
    query GetItem {
      getItem(id:${id}) {
        id
        name
        images
        price
        amount
        description
        sale
        collection
        sublicense
        series
        category
        productType
        date
      }
    }
  `;
  const data: IDataItem = await graphQLClient.request(query);
  let dataCard = data.getItem;
  return dataCard;
};

export const loginUser = async (email: string, password: string) => {
  const loginUserMutation = gql`
    query Authenticate($email: String!, $password: String!) {
      authenticate(email: $email, password: $password) {
        token
        user {
          id
          firstName
          lastName
          email
          phone
        }
      }
    }
  `;

  try {
    const loggedUser = await graphQLClient.request(loginUserMutation, {
      email,
      password,
    });
    // console.log('User logged:', loggedUser);
    return loggedUser;
  } catch (error: any) {
    console.error('Error login user:', error.response);
  }
};

export const createNewUser = async (newUser: NewUser) => {
  const createUserMutation = gql`
    mutation Registration($newUser: UserInput!) {
      registration(user: $newUser) {
        id
        firstName
        email
        password
      }
    }
  `;

  try {
    const createdUser = await graphQLClient.request(createUserMutation, {
      newUser,
    });
    // console.log('User created:', createdUser);
    return createdUser;
  } catch (error: any) {
    console.error(error.response.errors[0]);
  }
};

export const getReviewsById = async (id: string) => {
  const query = gql`
   query GetFunkoReviews {
        getFunkoReviews(funkoId:${id}) {
          id
          userId
          funkoId
          review
          star
          username
        }
    }
  `;
  const data: IDataReviewById = await graphQLClient.request(query);
  let dataReview = data.getFunkoReviews;
  return dataReview;
};

export const addReview = async (
  newReview: Omit<IReview, 'id'>,
  token: string | undefined
) => {
  console.log(newReview);
  const mutation = gql`
    mutation Save($newReview: ReviewInput!) {
      save(entity: $newReview) {
        id
        userId
        funkoId
        review
        star
        username
      }
    }
  `;

  const requestHeaders = {
    authorization: `Bearer ${token}`,
  };
  const data: IReview = await graphQLClient.request(
    mutation,
    { newReview },
    requestHeaders
  );
  // let dataReview = data;
  // console.log(data);
  return data;
};

export const deleteReview = async (
  reviewId: number,
  token: string | undefined
) => {
  const mutation = gql`
    mutation DeleteReview {
    deleteReview(entity: ${reviewId})
    }
  `;

  const requestHeaders = {
    authorization: `Bearer ${token}`,
  };
  const data = await graphQLClient.request(
    mutation,
    { reviewId },
    requestHeaders
  );

  // console.log('deleteReview', data);
  return data;
};

export const addToCart = async (funkoId: number, token: string | undefined) => {
  const mutation = gql`
    mutation AddItemInBasket {
    addItemInBasket(funkoId: ${funkoId}) {
        id
        amount
        funkoPop {
          id
        }
    }
  }
  `;

  const requestHeaders = {
    authorization: `Bearer ${token}`,
  };
  const data = await graphQLClient.request(
    mutation,
    { funkoId },
    requestHeaders
  );

  // console.log('AddItemInBasket', data);
  return data;
};

export const removeFromCart = async (
  funkoId: number,
  token: string | undefined
) => {
  const mutation = gql`
    mutation DeleteItemInBasket {
      deleteItemInBasket (itemId: ${funkoId})
    }
  `;

  const requestHeaders = {
    authorization: `Bearer ${token}`,
  };
  const data = await graphQLClient.request(
    mutation,
    { funkoId },
    requestHeaders
  );

  // console.log('DeleteItemInBasket', data);
  return data;
};

export const getUserCart = async (token: string | undefined) => {
  const query = gql`
    query GetOrderItems {
      getOrderItems {
        id
        amount
        funkoPop {
          id
          name
          images
          price
          amount
          description
          sale
          collection
          sublicense
          series
          category
          productType
          date
        }
      }
    }
  `;

  const requestHeaders = {
    authorization: `Bearer ${token}`,
  };
  const data: IDataCartItems = await graphQLClient.request(
    query,
    {},
    requestHeaders
  );

  // console.log('getOrderItems', data.getOrderItems);
  return data.getOrderItems;
};

export const updateFavorite = async (
  id: number,
  favorite: number[],
  token: string | undefined
) => {
  const mutation = gql`
    mutation UpdateUser {
    updateUser(user: { id: ${id}, favorite: [${favorite}] }) {
        favorite
      }
    }
  `;

  const requestHeaders = {
    authorization: `Bearer ${token}`,
  };
  const data = await graphQLClient.request(
    mutation,
    { favorite },
    requestHeaders
  );

  return data;
};

export const GetUserFavorite = async (token: string | undefined) => {
  const query = gql`
    query GetUserFavorite {
      getUserFavorite {
        id
        name
        images
        price
        amount
        description
        sale
        collection
        sublicense
        series
        category
        productType
        date
      }
    }
  `;

  const requestHeaders = {
    authorization: `Bearer ${token}`,
  };
  const data: IDataFavoriteItems = await graphQLClient.request(
    query,
    {},
    requestHeaders
  );

  return data.getUserFavorite;
};

export const GetUserOrders = async (token: string | undefined) => {
  const query = gql`
    query GetUserOrders {
      getUserOrders {
        id
        status
        orderItems {
          id
          amount
          funkoPop {
            id
            name
            images
            price
            amount
            description
            sale
            collection
            sublicense
            series
            category
            productType
            date
          }
        }
      }
    }
  `;

  const requestHeaders = {
    authorization: `Bearer ${token}`,
  };
  const data: IDataOrders = await graphQLClient.request(
    query,
    {},
    requestHeaders
  );

  return data.getUserOrders;
};

export const getFilteredCatalog = async (filteredParams: IFilteredParams) => {
  // const stringified = `[${filteredParams.category .map(b => `"${b}"`).join(', ')}]`;
  const query = gql`
    query GetAllItems {
      getAllItems(
        searchCriteria: {
          category: ${filteredParams.searchCriteria.category}
          collection: ${filteredParams.searchCriteria.collection}
          series: ${filteredParams.searchCriteria.series}
          sale: ${filteredParams.searchCriteria.sale}
          price: { from: ${filteredParams.searchCriteria.priceFrom}, to: ${filteredParams.searchCriteria.priceTo} }
          inStock: ${filteredParams.searchCriteria.inStock}
          name: "${filteredParams.searchCriteria.name}"
        }
        paging: { page: ${filteredParams.paging.page}, perPage: ${filteredParams.paging.perPage} }
        orderBy: ${filteredParams.orderBy}
      ) {
        items {
          id
          name
          images
          price
          amount
          description
          sale
          collection
          sublicense
          series
          category
          productType
          date
        }
        paging {
          page
          perPage
          pageCount
          totalCount
      }
      }
    }
  `;

  const data: IDataFilteredCatalog = await graphQLClient.request(query);
  let dataCards = data.getAllItems;
  // console.log(dataCards)
  return dataCards;
};

export const getFilterAttributes = async () => {
  const query = gql`
    query GetAllAttributes {
      getAllAttributes {
        categories
        collections
        series
      }
    }
  `;

  try {
    const filterAttributes: IFilterAttributes =
      await graphQLClient.request(query);
    return filterAttributes.getAllAttributes;
  } catch (error: any) {
    console.log(error.response);
    return {
      categories: [],
      collections: [],
      series: [],
    };
  }
};

export const getSoonCatalog = async () => {
  const query = gql`
    query GetAllItems {
      getAllItems(paging: { perPage: 12 }, searchCriteria: { inStock: false }) {
        items {
          id
          name
          images
          price
          amount
          description
          sale
          collection
          sublicense
          series
          category
          productType
          date
        }
      }
    }
  `;
  try {
    const data: IDataCatalog = await graphQLClient.request(query);
    let dataCards = data.getAllItems.items;
    // console.log(dataCards)
    return dataCards;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const googleLoginUser = async (
  idToken: string | undefined,
  providerAccountId: string
) => {
  const googleLoginUserMutation = gql`
    mutation GoogleAuth($idToken: String!, $providerAccountId: String!) {
      googleAuth(idToken: $idToken, providerAccountId: $providerAccountId) {
        token
        user {
          id
          firstName
          lastName
          email
          phone
        }
      }
    }
  `;

  try {
    const loggedUser: any = await graphQLClient.request(
      googleLoginUserMutation,
      { idToken, providerAccountId }
    );
    // console.log('User logged:', loggedUser.googleAuth);
    return loggedUser.googleAuth;
  } catch (error) {
    console.error('Error login user:', error);
  }
};

export const getSearchedCatalog = async (name: string) => {
  const query = gql`
    query GetAllItems($name: String!) {
      getAllItems(paging: { perPage: 12 }, searchCriteria: { name: $name }) {
        items {
          id
          name
          images
          price
          amount
          description
          sale
          collection
          sublicense
          series
          category
          productType
          date
        }
      }
    }
  `;
  try {
    const data: IDataCatalog = await graphQLClient.request(query, { name });
    let dataCards = data.getAllItems.items;
    // console.log(dataCards)
    return dataCards;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const forgotPassword = async (email: string) => {
  const mutation = gql`
    mutation ForgotPassword($email: String) {
      forgotPassword(email: $email)
    }
  `;

  const data: any = await graphQLClient.request(mutation, { email });
  return data.forgotPassword;
};

export const resetPassword = async (token: string, newPassword: string) => {
  const mutation = gql`
    mutation ResetPassword($token: String, $newPassword: String) {
      resetPassword(token: $token, newPassword: $newPassword)
    }
  `;

  const data: any = await graphQLClient.request(mutation, {
    token,
    newPassword,
  });
  return data.resetPassword;
};

export const getCurrentUser = async (token: string) => {
  const query = gql`
    query GetCurrentUser {
      getCurrentUser {
        id
        firstName
        lastName
        email
        phone
        address {
          id
          userId
          country
          district
          city
          street
          house
          postalCode
        }
      }
    }
  `;
  const requestHeaders = {
    authorization: `Bearer ${token}`,
  };
  try {
    const data: any = await graphQLClient.request(query, {}, requestHeaders);
    const currentUser: User = data.getCurrentUser;
    return currentUser;
  } catch (error) {
    console.log(error);
  }
};

export const changeName = async (
  token: string,
  updatedFirstName: string,
  userId: number
) => {
  const mutation = gql`
    mutation UpdateUser($updatedFirstName: String, $userId: Int) {
      updateUser(user: { firstName: $updatedFirstName, id: $userId }) {
        firstName
        id
        email
      }
    }
  `;

  const requestHeaders = {
    authorization: `Bearer ${token}`,
  };

  const data: any = await graphQLClient.request(
    mutation,
    { updatedFirstName, userId },
    requestHeaders
  );
  return data.updateUser;
};

export const emailConfirm = async (userId: number, newEmail?: string) => {
  const mutation = gql`
    mutation EmailConfirmation($userId: Int, $newEmail: String) {
      emailConfirmation(userId: $userId, email: $newEmail)
    }
  `;
  return await graphQLClient.request(mutation, { userId, newEmail });
};

export const emailChange = async (
  accessToken: string,
  token: string,
  newEmail: string
) => {
  const mutation = gql`
    mutation ChangeEmail($token: String, $newEmail: String) {
      changeEmail(token: $token, email: $newEmail)
    }
  `;

  const requestHeaders = {
    authorization: `Bearer ${accessToken}`,
  };

  return await graphQLClient.request(
    mutation,
    { token, newEmail },
    requestHeaders
  );
};

export const enableAccount = async (email_confirm_token: string) => {
  const mutation = gql`
    mutation EnableAccount($email_confirm_token: String) {
      enableAccount(email_confirm_token: $email_confirm_token)
    }
  `;
  await graphQLClient.request(mutation, { email_confirm_token });
};

export const changePassword = async (
  token: string,
  newPassword: string,
  oldPassword: string
) => {
  const mutation = gql`
    mutation ChangePassword($oldPassword: String, $newPassword: String) {
      changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
        id
        firstName
        email
      }
    }
  `;

  const requestHeaders = {
    authorization: `Bearer ${token}`,
  };

  const data: any = await graphQLClient.request(
    mutation,
    { oldPassword, newPassword },
    requestHeaders
  );
  return data.changePassword;
};

export const deleteAccount = async (token: string) => {
  const query = gql`
    query DeleteAccount {
      deleteAccount
    }
  `;

  const requestHeaders = {
    authorization: `Bearer ${token}`,
  };

  try {
    const response = await graphQLClient.request(query, {}, requestHeaders);
    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
  }
};

// export const changeAdress = async (
//   token: string,
//   updatedFirstName: string,
//   userId: number
// ) => {
//   const mutation = gql`
//     mutation UpdateUser($updatedFirstName: String, $userId: Int) {
//       updateUser(user: { firstName: $updatedFirstName, id: $userId }) {
//         firstName
//         id
//         email
//       }
//     }
//   `;

//   const requestHeaders = {
//     authorization: `Bearer ${token}`,
//   };

//   const data: any = await graphQLClient.request(
//     mutation,
//     { updatedFirstName, userId },
//     requestHeaders
//   );
//   return data.updateUser;
// };

export const updateUserData = async (
  token: string,
  updateUserData: User,
  creditCard: CreditCard,
  userId: number
) => {
  const mutation = gql`
    mutation UpdateUser {
      updateUser(
        user: {
          id: ${userId},
          firstName: ${updateUserData.firstName}
          lastName: ${updateUserData.lastName}
          email: ${updateUserData.email}
          phone: ${updateUserData.phone}
          creditCard: [
      {
        userId: ${userId}
        cardNumber: ${creditCard?.cardNumber}
        cardHolderName: ${creditCard?.cardHolderName}
        expirationDate: ${creditCard?.expirationDate}
      },
    ];
          address: {
            userId: ${userId}
            country: ${updateUserData.address?.country}
            district: ${updateUserData.address?.district}
            city: ${updateUserData.address?.city}
            street: ${updateUserData.address?.street}
            house: ${updateUserData.address?.house}
            postalCode: ${updateUserData.address?.postalCode}
          }
        }
      ) {
        id
        firstName
        lastName
        email
        phone
        address {
          id
          userId
          country
          district
          city
          street
          house
          postalCode
        }
        creditCard {
          id
          userId
          cardNumber
          cardHolderName
          expirationDate
        }
      }
    }
  `;

  const requestHeaders = {
    authorization: `Bearer ${token}`,
  };

  const data: any = await graphQLClient.request(
    mutation,
    { updateUserData, userId },
    requestHeaders
  );
  console.log(data);
  return data.updateUser;
};

export const updateCreditCard = async (
  token: string,
  creditCard: CreditCard,
  userId: number
) => {
  const mutation = gql`
    mutation UpdateUser {
      updateUser(
        user: {
          id: ${userId},
          creditCard: [
      {
        userId: ${userId}
        cardNumber: ${creditCard?.cardNumber}
        cardHolderName: ${creditCard?.cardHolderName}
        expirationDate: ${creditCard?.expirationDate}
      },
    ];
        }
      ) {
        id
        firstName
        lastName
        email
        phone
        address {
          id
          userId
          country
          district
          city
          street
          house
          postalCode
        }
        creditCard {
          id
          userId
          cardNumber
          cardHolderName
          expirationDate
        }
      }
    }
  `;

  const requestHeaders = {
    authorization: `Bearer ${token}`,
  };

  const data: any = await graphQLClient.request(
    mutation,
    { updateUserData, userId },
    requestHeaders
  );
  console.log(data);
  return data.updateUser;
};
// {
//   "data": {
//       "updateUser": {
//           "id": 207,
//           "firstName": "Bob",
//           "lastName": "Mahoni",
//           "email": "Bob@ukr.net",
//           "phone": "+380994675845",
//           "address": {
//               "id": 603,
//               "userId": 207,
//               "country": "Ukraine",
//               "district": null,
//               "city": "Kharkiv",
//               "street": null,
//               "house": null,
//               "postalCode": "63030"
//           },
//           "creditCard": []
//       }
//   }
// }
