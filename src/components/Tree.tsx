import React, {FC, useEffect} from 'react';
import {Tree as AntTree} from 'antd';


import {getTree} from '../redux/selectors/treeSelectors';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {nodeApiSlice} from '../redux/api/NodeApi'
import {addNode, setSelectedNode} from '../redux/slices/treeSlice'


export interface TreeProps {
}

type Props = TreeProps;

const Tree: FC<Props> = () => {
    const tree = useAppSelector(state => getTree(state));
    const dispatch = useAppDispatch();
    const {data: firstNode} = nodeApiSlice.useGetNodeQuery(1);


    useEffect(() => {
        if (firstNode) {
            dispatch(addNode(firstNode));
            dispatch(setSelectedNode(firstNode));
        }
    }, [firstNode])

    return (
        <AntTree
            treeData={tree}
            defaultExpandedKeys={
                tree.length > 0
                    ? [tree[0].key]
                    : []
            }

        />
    );
};

export default Tree
