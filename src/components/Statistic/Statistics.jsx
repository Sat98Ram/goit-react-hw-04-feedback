import PropTypes from 'prop-types';
import css from './Statistic.module.css';

const Statistic = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <ul>
        <li className={css.statisticItem}>Good: {good}</li>
        <li className={css.statisticItem}>Neutral: {neutral}</li>
        <li className={css.statisticItem}>Bad: {bad}</li>
        <li className={css.statisticItem}>Total: {total}</li>
        <li className={css.statisticItem}>Positive feedback: {percentage}%</li>
      </ul>
    </>
  );
};

export default Statistic;

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
