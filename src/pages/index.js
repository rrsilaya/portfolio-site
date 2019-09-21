import React, { Fragment } from 'react';

import { Container } from '@common/ui';
import { LineArt } from 'assets/components';
import { colors } from 'styles/constants';

const Site = () => (
    <Fragment>
        <Container>
            <LineArt color={colors.black} />
        </Container>
    </Fragment>
);

export default Site;
