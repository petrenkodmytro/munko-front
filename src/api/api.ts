import { ICard } from '@/types/types';
import { GraphQLClient, request, gql } from 'graphql-request';

const endpoint = 'https://funkopop.onrender.com/graphql';

const graphQLClient = new GraphQLClient(endpoint);

interface DataCatalog {
  getAllItems: ICard[];
}

interface DataItem {
  getItems: ICard;
}

export const getCatalog = async () => {
  const query = gql`
    query GetAllItems {
      getAllItems {
        id
        name
        images
        price
      }
    }
  `;

  try {
    const data: DataCatalog = await graphQLClient.request(query);
    let dataCards = data.getAllItems;
    return dataCards;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getItem = async (id: string) => {
  const query = gql`
    query GetItem {
      getItem(${id}) {
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

  try {
    const data: DataItem = await graphQLClient.request(query);
    let dataCard = data.getItems;
    return dataCard;
  } catch (error) {
    console.log(error);
    return error;
  }
};
