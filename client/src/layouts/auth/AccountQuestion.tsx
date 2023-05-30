import { Link } from 'react-router-dom';
import { IAccountQuestionProps } from '../../interfaces';
import { Question } from '../../components';

function AccountQuestion(props: IAccountQuestionProps) {
  const { question, address } = props;

  return (
    <Question>
      {question} <Link to={`/${address}`}>{address}</Link>
    </Question>
  )
}

export default AccountQuestion;