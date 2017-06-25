import React from 'react';
import { Header, Segment } from 'semantic-ui-react';


class NotFound extends React.Component
{
    render = () => <Segment textAlign="center">
        <Header as="h1">404</Header>
        Страница не найдена.
    </Segment>;
}

export default NotFound;