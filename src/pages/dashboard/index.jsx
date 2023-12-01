import React from 'react';
import { BreadCrumbs, LeftBar, LevelsStatus, Header } from 'components';
import { UserProfit } from '../../features/dashboard/Main/UserProfit';
import { TokenOverview } from '../../features/dashboard/Main/TokenOverview';
import { UserInfo } from '../../features/dashboard/RightBar/UserInfo';
import { PurchaseToken } from '../../features/dashboard/RightBar/PurchaseToken';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { BaseLayout } from 'layouts';

export const Dashboard = () => {
  const APIURL = 'https://api.thegraph.com/subgraphs/name/romang11/qornex-dev';

  const tokensQuery = `
  {
    users(first: 5) {
      id
      referral {
        id
      }
      refNumber
     
      levels {
        levelNumber
        recyclesTotal
        totalReward
        reward24
        lastRewardDay
        matrixs {
          id
          place1 {
            value
            receiver {
              id
            }
            realReceiver {
              id
            }
            user {
              id
            }
            status
          }
          place2 {
            value
            receiver {
              id
            }
            realReceiver {
              id
            }
            user {
              id
            }
            status
          }
          place3 {
            value
            receiver {
              id
            }
            realReceiver {
              id
            }
            user {
              id
            }
            status
          }
          place4 {
            user {
              id
            }
          }
          place5 {
            user {
              id
            }
          }
          place6 {
            user {
              id
            }
          }
        }
      }
    }
  }
  
  `;

  const client = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
  });

  client
    .query({
      query: gql(tokensQuery),
    })
    .then((data) => console.log('Subgraph data: ', data))
    .catch((err) => {
      console.log('Error fetching data: ', err);
    });

  return (
    <BaseLayout>
      <BreadCrumbs title="Dashboard">
        <LevelsStatus />
      </BreadCrumbs>
      <div className="grid grid-rows-8 grid-cols-3 w-full h-full gap-6 sm:grid-cols-1 z-[1] pt-6">
        <UserProfit />
        <UserInfo />
        <TokenOverview />
        <PurchaseToken />
      </div>
      <img
        className="absolute z-[0] top-[33%] left-0 w-full h-screen hidden sm:flex"
        src="/images/dashboard/shadowMob.png"
      />
      <img className="absolute top-0 z-[0] right-[10%] sm:hidden" src="/images/dashboard/topShadow.png" />
      <img className="absolute h-full z-[0] right-0 sm:hidden " src="/images/dashboard/rightShadow.png" />
    </BaseLayout>
  );
};
