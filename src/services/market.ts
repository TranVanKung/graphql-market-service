import Market, { MarketInterface } from '@/models/market';

const filterMarket = async () => {
  try {
    const listData = await Market.find({});
    return listData;
  } catch (err: any) {
    throw new Error(err);
  }
};

const createOneMarket = async (data: MarketInterface) => {
  try {
    const createdData = await Market.create(data);
    return createdData;
  } catch (err: any) {
    throw new Error(err);
  }
};

const findMarketOfToken = async (tokenId: string): Promise<MarketInterface> => {
  try {
    const data = await Market.findOne({ token: tokenId });
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export { createOneMarket, filterMarket, findMarketOfToken };
