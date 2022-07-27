import PropTypes from 'prop-types';
import randomColor from 'randomcolor';
import {
  StatSection,
  Title,
  StatisticsList,
  StatisticsListItem,
  StatisticsListLabel,
  StatisticsPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <Title>{title}</Title>}
      <StatisticsList>
        {stats.map(({ label, percentage, id }) => {
          return (
            <StatisticsListItem
              key={id}
              color={randomColor({ luminosity: 'dark' })}
            >
              <StatisticsListLabel>{label}</StatisticsListLabel>
              <StatisticsPercentage>{percentage}%</StatisticsPercentage>
            </StatisticsListItem>
          );
        })}
      </StatisticsList>
    </StatSection>
  );
};

Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
