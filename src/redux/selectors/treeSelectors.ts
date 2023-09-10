import {RootState} from '../store';

export const getTree = (state: RootState) => {
    return state.tree.tree;
}

export const getSelectedNode = (state: RootState) => {
    return state.tree.selectedNode;
}