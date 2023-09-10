import {DataNode} from 'antd/es/tree'

import {Node} from '../../models/Node';


export default function(node: Node, tree: DataNode[]): void {
    const recursiveTreeTraversal = (currentDataNode: DataNode) => {
        if (!currentDataNode.children || currentDataNode.children.length === 0)
            return;
        if (currentDataNode.key === node.parent) {
            currentDataNode.children.push({key: node.id, title: `node${node.id}`});
            return;
        } else
            for (const dn of currentDataNode.children)
                recursiveTreeTraversal(dn);
    }

    for (const dataNode of tree)
        recursiveTreeTraversal(dataNode);
}

