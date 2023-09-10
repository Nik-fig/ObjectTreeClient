import React, {FC} from 'react';

import {nodeApiSlice} from '../redux/api/NodeApi';

export interface MainLayoutContainerProps {

}

type Props = MainLayoutContainerProps;

const MainLayoutContainer: FC<Props> = ({}) => {
    const {useGetNodeQuery} = nodeApiSlice;
    const {data} = useGetNodeQuery(1);
    console.log(data);

    return (
        <></>
    );
};

export default MainLayoutContainer
