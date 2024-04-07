import {
  ICard,
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

export const getCatalog = async () => {
  const query = gql`
    query GetAllItems {
      getAllItems {
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

export const getFilteredCatalog = async (filteredParams: IFilteredParams) => {
  // const stringified = `[${filteredParams.category .map(b => `"${b}"`).join(', ')}]`;
  const query = gql`
    query GetAllItems {
      getAllItems(
        searchCriteria: {
          category: ${filteredParams.category}
          collection: ${filteredParams.collection}
          series: ${filteredParams.series}
          sale: ${filteredParams.sale}
          price: { from: ${filteredParams.priceFrom}, to: ${filteredParams.priceTo} }
          inStock: ${filteredParams.inStock}
        }
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
      }
    }
  `;
  const data: IDataCatalog = await graphQLClient.request(query);
  let dataCards = data.getAllItems.items;
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
