import React from 'react';

import { AZ5SequenceContainer, SkullContainer } from './style';

const SEQUENCE_RUSSIAN = [
  'Золотая симфония',
  'Хреновуха',
  'Кауфман',
  'Кубанская',
  'Кизлярка',
  'Народная',
  'Путинка',
  'Пятизвёздная',
  'Родник',
  'Рускова',
  'Русский стандарт',
  'Шустов',
  'Старка',
  'Столичная',
  'Стольная',
  'Юрий Долгорукий',
];
const SEQUENCE_ENGLISH = [
  'Cîroc',
  'Grey Goose',
  'Ketel One',
  'Belvedere',
  'Chopin',
  'Stolichnaya',
  'Hangar One',
  'Tito’s',
];

// TODO: Clean-up this shitshow. 
class InitiateAZ5Sequence extends React.Component {
  state = {
    sequenceRussianIdx: 0, 
    sequenceEnglishIdx: 0, 
    sequence: [
      'Initiating A3-5',
    ],
    shouldShowSkull: false, 
    shouldEquivocate: false, 
  }

  componentDidMount() {
    setTimeout(() => setInterval(() => this.shortenInterval(), 100), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  shortenInterval = () => {
    let newSequence = [...this.state.sequence];

    if (this.state.sequenceRussianIdx < SEQUENCE_RUSSIAN.length) {
      newSequence = [...newSequence, SEQUENCE_RUSSIAN[this.state.sequenceRussianIdx]];

      this.setState({
        sequenceRussianIdx: this.state.sequenceRussianIdx + 1,
        sequence: newSequence,
      });

      return;
    };

    if (this.state.sequenceEnglishIdx < SEQUENCE_ENGLISH.length) {
      newSequence = [...newSequence, SEQUENCE_ENGLISH[this.state.sequenceEnglishIdx]];

      this.setState({
        sequenceEnglishIdx: this.state.sequenceEnglishIdx + 1,
        sequence: newSequence,
      });

      return;
    }

    this.setState({ shouldEquivocate: true });
    
    window.setTimeout(this.setState({ shouldShowSkull: true }), 3000);
    
    clearInterval(this.timer);
    window.setTimeout(() => this.props.activateAZ5(), 3000);
  }

  render() {
    const { sequence, shouldShowSkull, shouldEquivocate } = this.state; 


    if (shouldShowSkull) {
      return <SkullContainer>&#9760;&nbsp; не здорово не ужасно &nbsp;&#9760;</SkullContainer>
    }

    if (shouldEquivocate) {
      return <SkullContainer>не здорово не ужасно</SkullContainer>;
    }

    return(
      <AZ5SequenceContainer>
        {sequence.map(word => (
          <div>{word}...</div>
        ))}
      </AZ5SequenceContainer>
    );
  }
}

export default InitiateAZ5Sequence;