import React, {FC} from 'react';
import {Layout} from 'antd';

import Tree from './Tree'
import MainContent from './MainContent'

const {Sider, Content} = Layout;

export interface MainLayoutProps {
}

type Props = MainLayoutProps;

const MainLayout: FC<Props> = () => {
    return (
        <Layout>
            <Sider>
                <Tree/>
            </Sider>
            <Content>
                <MainContent/>
            </Content>
        </Layout>
    );
};

export default MainLayout
