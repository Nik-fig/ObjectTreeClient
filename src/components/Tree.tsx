import React, {FC} from 'react';
import {Tree as AntTree} from 'antd';
import type {DataNode} from 'antd/es/tree';

export interface TreeProps {
    tree: DataNode[],
}

type Props = TreeProps;

const Tree: FC<Props> = ({tree}) => {
    return (
        <AntTree
            treeData={tree}
        />
    );
};

export default Tree
