import { FC } from 'react';

import styles from './ratingCard.module.scss';
import { Star } from 'lucide-react';
import TextPl from '../../../../../../plagins/P.number';

const AssessmentsCard: FC = () => {
    return (
        <div className={styles.assessmentsCard}>
            <TextPl as='p'>16800</TextPl>
            <TextPl as='p'>оценок</TextPl>
        </div>
    );
};

const RatingCard: FC = () => {
    return (
        <div className={styles.ratingCard}>
            <Star />
            <TextPl as='span'>4,8</TextPl>
            <AssessmentsCard />
        </div>
    );
};

export default RatingCard;