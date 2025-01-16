import {ChangeEvent, FC} from 'react';

import styles from './searchSystem.module.scss';
import Field from '@/components/ui/form/fields/Field';
import ButtonSet from '@/components/ui/elements/button/ButtonSet';
import { Search } from 'lucide-react';

interface SearchSystemProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchSystem: FC<SearchSystemProps> = ({onChange}) => {
    return (
        <div  className={styles.searchSystem}>
            <Field className={styles.searchField} onChange={onChange} type="text" placeholder="Search..." />
            <div className={styles.buttonContainerSearch} >
                <ButtonSet className={styles.buttonSearch} type="submit" buttonType="primary">
                    <Search />
                </ButtonSet>
            </div>
        </div>
    );
};

export default SearchSystem;