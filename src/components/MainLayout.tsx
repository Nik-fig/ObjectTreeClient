import React, {FC} from 'react';
import {Layout} from 'antd';

import Tree, {TreeProps} from './Tree'
import MainContent, {MainContentProps} from './MainContent'

const {Sider, Content} = Layout;

export interface MainLayoutProps extends MainContentProps, TreeProps {
}

type Props = MainLayoutProps;

const MainLayout: FC<Props> = ({tree, properties}) => {
    return (
        <Layout>
            <Sider>
                <Tree tree={tree}/>
            </Sider>
            <Content>
                <MainContent properties={properties}/>
            </Content>
        </Layout>
    );
};

export default MainLayout
