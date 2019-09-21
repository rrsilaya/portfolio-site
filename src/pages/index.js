import React, { Fragment } from 'react';

import { Container } from '@common/ui';
import { Construction } from 'assets/components';
import {
    Wrapper,
    InnerWrapper,
    Text,
    Footer
} from 'styles/pages/site-under-construction';

const Site = () => (
    <Fragment>
        <Container>
            <Wrapper>
                <InnerWrapper>
                    <Construction dimensions={196} />
                    <Text>Site Under Construction</Text>
                </InnerWrapper>
                <Footer>
                    Ralph Lawrence Silaya
                </Footer>
            </Wrapper>
        </Container>
    </Fragment>
);

export default Site;
