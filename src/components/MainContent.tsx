import React, {FC} from 'react';

import {getSelectedNode} from '../redux/selectors/treeSelectors';
import {useAppSelector} from '../redux/hooks';

export interface MainContentProps {
}

type Props = MainContentProps;

const MainContent: FC<Props> = () => {
    const node = useAppSelector(state => getSelectedNode(state));
    return (
        <>
            {
                node
                    ? Object.entries(node.properties).map(
                        ([key, value], index) => {
                            return (
                                <div key={index}>
                                    <h1>{key}</h1>
                                    <span>{value}</span>
                                </div>
                            )
                        })
                    : null
            }
        </>

    );
};

export default MainContent
