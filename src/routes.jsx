import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { useIsAuthorized } from '@commercetools-frontend/permissions';
import { PageUnauthorized } from '@commercetools-frontend/application-components';
import Spacings from '@commercetools-uikit/spacings';
import Channels from './components/channels';
import Productsync from './components/productsync';
import Categorysync from './components/categorysync';
import Storelocatorgrid from './components/storelocatorgrid';
import Inventorysync from './components/inventorysync';
import Storelocatorsync from './components/storelocatorsync';
import Fluentcommercelog from './components/fluentcommercelog';
import Welcome from './components/welcome';
import { PERMISSIONS } from './constants';

const ApplicationRoutes = () => {
  const match = useRouteMatch();

  // We can evaluate the user permissions and use the information to restrict
  // certain parts of the application.
  // For example, we can show an unauthorized page if the user does not have
  // the permission to `view` products.
  const canView = useIsAuthorized({
    demandedPermissions: [PERMISSIONS.View],
  });

  return (
    <Spacings.Inset scale="l">
      <Switch>
        <Route path={`${match.path}/channels`}>
          {canView ? (
            <Channels linkToWelcome={match.url} />
          ) : (
            <PageUnauthorized />
          )}
        </Route>
        <Route path={`${match.path}/product-sync`}>
          {canView ? (
            <Productsync linkToWelcome={match.url} />
          ) : (
            <PageUnauthorized />
          )}
        </Route>
    
        <Route path={`${match.path}/category-sync`}>
          {canView ? (
            <Categorysync linkToWelcome={match.url} />
          ) : (
            <PageUnauthorized />
          )}
        </Route>

        <Route path={`${match.path}/store-locator-grid`}>
          {canView ? (
            <Storelocatorgrid linkToWelcome={match.url} />
          ) : (
            <PageUnauthorized />
          )}
        </Route>

        <Route path={`${match.path}/inventory-sync`}>
          {canView ? (
            <Inventorysync linkToWelcome={match.url} />
          ) : (
            <PageUnauthorized />
          )}
        </Route>

        <Route path={`${match.path}/store-locator-sync`}>
          {canView ? (
            <Storelocatorsync linkToWelcome={match.url} />
          ) : (
            <PageUnauthorized />
          )}
        </Route>

        <Route path={`${match.path}/fluent-commerce-log`}>
          {canView ? (
            <Fluentcommercelog linkToWelcome={match.url} />
          ) : (
            <PageUnauthorized />
          )}
        </Route>
        
        <Route>
          <Welcome />
        </Route>
      </Switch>
    </Spacings.Inset>
  );
};
ApplicationRoutes.displayName = 'ApplicationRoutes';

export default ApplicationRoutes;
