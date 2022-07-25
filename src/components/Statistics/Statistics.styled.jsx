import styled from '@emotion/styled';

export const StatSection = styled.section`
  margin-top: 25px;
  background-color: white;
  outline: 1px solid rgb(243, 246, 249);
  width: 350px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const StatisticsList = styled.ul`
  display: flex;
  width: 100%;
`;

export const StatisticsListItem = styled.li`
  padding: 10px 10px;
  display: flex;
  width: calc(100% / 4);
  flex-direction: column;
  align-items: center;
  background-color: ${p => `${p.color}`};
`;

export const StatisticsListLabel = styled.span`
  color: #ffffff;
`;

export const StatisticsPercentage = styled.span`
  color: #ffffff;
`;
