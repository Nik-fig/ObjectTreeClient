import React, {FC} from 'react';

import {Node} from '../models/Node'

export interface MainContentProps {
    properties: Node['properties']
}

type Props = MainContentProps;

const MainContent: FC<Props> = ({properties}) => {
    return (
        <>
            {Object.entries(properties).map(
                (key, value) => {
                    return (
                        <div>
                            <h1>{key}</h1>
                            <span>{value}</span>
                        </div>
                    )
                })}
        </>

    );
};

export default MainContent
