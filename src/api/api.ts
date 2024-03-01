import { ICard } from '@/types/types';
import { GraphQLClient, request, gql } from 'graphql-request';

const endpoint = 'https://funkopop.onrender.com/graphql';

const graphQLClient = new GraphQLClient(endpoint);

interface Data {
  getAllItems: ICard[];
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
    const data: Data = await graphQLClient.request(query);
    let dataCards = data.getAllItems;
    return dataCards;
  } catch (error) {
    console.log(error);
    return [];
  }
};
