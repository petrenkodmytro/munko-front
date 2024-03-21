import { ICard, IReview } from '@/types/types';
import { GraphQLClient, request, gql } from 'graphql-request';

const endpoint = 'https://funkopop.onrender.com/graphql';

const graphQLClient = new GraphQLClient(endpoint);

interface DataCatalog {
  getAllItems: {
    items: ICard[];
  };
}

interface DataItem {
  getItem: ICard;
}

interface DataReviewById {
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
          license
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
    const data: DataCatalog = await graphQLClient.request(query);
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
        license
        sublicense
        series
        category
        productType
        date
      }
    }
  `;
  const data: DataItem = await graphQLClient.request(query);
  let dataCard = data.getItem;
  // console.log(dataCard);
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
  const data: DataReviewById = await graphQLClient.request(query);
  let dataReview = data.getFunkoReviews;
  // console.log(dataReview);
  return dataReview;
};
