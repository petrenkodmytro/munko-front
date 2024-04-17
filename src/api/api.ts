import {
  ICard,
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
          category: ${filteredParams.searchCriteria.category}
          collection: ${filteredParams.searchCriteria.collection}
          series: ${filteredParams.searchCriteria.series}
          sale: ${filteredParams.searchCriteria.sale}
          price: { from: ${filteredParams.searchCriteria.priceFrom}, to: ${filteredParams.searchCriteria.priceTo} }
          inStock: ${filteredParams.searchCriteria.inStock}
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
  } catch (error) {
    console.log(error);
    return {
      categories: [],
      collections: [],
      series: [],
    };
  }
};
