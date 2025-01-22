import {FC} from 'react';

import styles from './productGrid.module.scss';
import Сharacteristics from "./Сharacteristics/Сharacteristics"
import Results from './Results/Results';
import ImageContainerProduct from './ImageContainerProduct/ImageContainerProduct';
import { IParamPrimaryType } from '../../../../../types/react.type';
import { getProductData } from '../../../../../service/api/product.api';
import clsx from 'clsx';

interface ProductGridProps extends IParamPrimaryType {}

const ProductGrid: FC<ProductGridProps> = async ({param}) => {

    const data = await getProductData(param);

    return (
        <div className={(clsx(styles.productGrid))}>
            <div className="product__page-main-slider">
                <ImageContainerProduct product={data}/>
            </div>
            <Сharacteristics product={data} />
            <Results product={data} />
        </div>
    );
};

export default ProductGrid;
