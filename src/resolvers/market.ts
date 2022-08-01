import _ from 'lodash';
import { RESPONSE_CODE } from '@/config/constant';
import { MarketInterface } from '@/models/market';
import {
  createOneMarket,
  filterMarket,
  findMarketOfToken,
} from '@/services/market';

interface RequestInterface {
  data: MarketInterface;
}

export default {
  Query: {
    getAllMarket: async (parent: any, args: any) => {
      const listMarket = await filterMarket();

      return {
        message: 'Get all Market success!',
        code: RESPONSE_CODE.SUCCESS,
        data: listMarket,
      };
    },
  },

  Mutation: {
    createOneMarket: async (parent: any, args: RequestInterface) => {
      const { data } = args;
      const createdMarket = await createOneMarket(data);
      return { code: RESPONSE_CODE.SUCCESS, data: createdMarket };
    },
  },

  Token: {
    // get sparkline for Token
    sparkLine: async (tokenId: any) => {
      console.log('Get sparkline for token', tokenId);
      const foundedData = await findMarketOfToken(tokenId);
      return foundedData?.sparkLine;
    },
    flag: () => 'From Market service',
  },
};
