export interface ICampaign {
  id: number;
  name: string;
  keywords: string;
  bid_amount: number;
  campaign_fund: number;
  status: boolean;
  town?: string;
  radius?: number;
}
