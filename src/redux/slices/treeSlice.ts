import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DataNode} from 'antd/es/tree'

import {Node} from '../../models/Node'
import InsertNodeIntoTree from '../../utils/InsertNodeIntoTree/InsertNodeIntoTree';

type IInitState = {
    tree: DataNode[],
    selectedNode: Node | null,
}

const initState: IInitState = {
    tree: [],
    selectedNode: null,
}
const treeSlice = createSlice({
    name: 'tree',
    initialState: initState,
    reducers: {
        addNode: (state, action: PayloadAction<Node>) => {
            InsertNodeIntoTree(action.payload, state.tree);
        },
        setSelectedNode: (state, action: PayloadAction<Node>) => {
            state.selectedNode = action.payload;
        }
    }
})

export const {addNode, setSelectedNode} = treeSlice.actions;
export default treeSlice.reducer;