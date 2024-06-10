import {
  ICard,
  NewUser,
  IDataFilteredCatalog,
  IFilterAttributes,
  IFilteredParams,
  IReview,
} from '@/types/types';
import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://funkopop.onrender.com/graphql';

const graphQLClient = new GraphQLClient(endpoint);
// const graphQLClient = new GraphQLClient(endpoint, {
//   method: `GET`,
//   jsonSerializer: {
//     parse: JSON.parse,
//     stringify: JSON.stringify,
//   },
// })

interface IDataCatalog {
  getAllItems: {
    items: ICard[];
  };
}

interface IDataItem {
  getItem: ICard;
}

interface IDataReviewById {
  getFunkoReviews: IReview[];
}

interface IDataOrdersItems {
  getOrderItems: [];
}

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
  } catch (error) {
    console.log(error);
    return [];
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
  } catch (error) {
    console.error('Error login user:', error);
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
  } catch (error) {
    console.error('Error creating user:', error);
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

  // console.log(data);
  return data;
};

export const addToCart = async (
  funkoId: number,
  userId: number,
  token: string | undefined
) => {
  const mutation = gql`
    mutation CreateOrder {
      createOrder(funkoId: ${funkoId}, userId: ${userId}) {
        id
        orderItems {
          id
          img
          name
          amount
          pricePerItem
        }
        userId {
          id
          firstName
          lastName
        }
        status
      }
    }
  `;

  const requestHeaders = {
    authorization: `Bearer ${token}`,
  };
  const data = await graphQLClient.request(
    mutation,
    { funkoId, userId },
    requestHeaders
  );

  // console.log(data);
  return data;
};

export const getUserCart = async (
  userId: number,
  token: string | undefined
) => {
  const query = gql`
    query GetOrderItems {
      getOrderItems(userId: ${userId}) {
        id
        img
        name
        amount
        pricePerItem
    }
}
  `;

  const requestHeaders = {
    authorization: `Bearer ${token}`,
  };
  const data: IDataOrdersItems = await graphQLClient.request(
    query,
    { userId },
    requestHeaders
  );

  console.log(data.getOrderItems);
  return data.getOrderItems;
};

export const getFilteredCatalog = async (
  filteredParams: IFilteredParams,
  name: string
) => {
  // const stringified = `[${filteredParams.category .map(b => `"${b}"`).join(', ')}]`;
  const query = gql`
    query GetAllItems ($name: String) {
      getAllItems(
        searchCriteria: {
          category: ${filteredParams.searchCriteria.category}
          collection: ${filteredParams.searchCriteria.collection}
          series: ${filteredParams.searchCriteria.series}
          sale: ${filteredParams.searchCriteria.sale}
          price: { from: ${filteredParams.searchCriteria.priceFrom}, to: ${filteredParams.searchCriteria.priceTo} }
          inStock: ${filteredParams.searchCriteria.inStock}
          name: $name
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
  const data: IDataFilteredCatalog = await graphQLClient.request(query, {
    name,
  });
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
  } catch (error) {
    console.log(error);
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
