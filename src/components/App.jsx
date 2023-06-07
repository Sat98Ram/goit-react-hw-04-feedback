import { Component } from 'react';
import Notification from './Notification/Notification';
import Statistic from './Statistic/Statistics';
import Section from './Section/Section';
import FeedbackOption from './Feedback/FeedbackOption';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onCount = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
    // let count = 0;
    // for (let key in optionsObj) {
    //   count += optionsObj[key];
    // }
    // return count;
  };

  countPositiveFeedbackPercentage = state => {
    return Math.round((this.state.good / this.countTotalFeedback(state)) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback(this.state);
    const percentage = this.countPositiveFeedbackPercentage(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOption options={options} onLeaveFeedback={this.onCount} />
        </Section>

        {total !== 0 ? (
          <Section title="Statistics">
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={percentage}
            />
          </Section>
        ) : (
          <Section title="Statistics">
            <Notification message="There is no feedback" />
          </Section>
        )}
      </div>
    );
  }
}
