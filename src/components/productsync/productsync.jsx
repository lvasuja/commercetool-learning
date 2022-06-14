import PropTypes from 'prop-types';
import { lazy } from 'react';
import { useIntl } from 'react-intl';
import {
  Link as RouterLink,
  Switch,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import { useApplicationContext } from '@commercetools-frontend/application-shell-connectors';
import { NO_VALUE_FALLBACK } from '@commercetools-frontend/constants';
import {
  usePaginationState,
  useDataTableSortingState,
} from '@commercetools-uikit/hooks';
import { BackIcon } from '@commercetools-uikit/icons';
import Constraints from '@commercetools-uikit/constraints';
import FlatButton from '@commercetools-uikit/flat-button';
import LoadingSpinner from '@commercetools-uikit/loading-spinner';
import DataTable from '@commercetools-uikit/data-table';
import { ContentNotification } from '@commercetools-uikit/notifications';
import { Pagination } from '@commercetools-uikit/pagination';
import Spacings from '@commercetools-uikit/spacings';
import Text from '@commercetools-uikit/text';
import DateField from '@commercetools-uikit/date-field';
import { SuspendedRoute } from '@commercetools-frontend/application-shell';
import {
  formatLocalizedString,
  transformLocalizedFieldToLocalizedString,
} from '@commercetools-frontend/l10n';

import { getErrorMessage } from '../../helpers';
import { useCallback } from 'react';
import { docToFormValues, formValuesToDoc } from './conversions';


const Productsync = (props) => {
  const intl = useIntl();
  const match = useRouteMatch();
  const { push } = useHistory();

  const { dataLocale, projectLanguages } = useApplicationContext((context) => ({
    dataLocale: context.dataLocale,
    projectLanguages: context.project.languages,
  }));


  return (
  //   <Spacings.Stack scale="xl">
  //   <Text.Headline as="h1">
  //        Hello, world! Lets create a form.
  //   </Text.Headline>
  //   {/* insert form componenet here. */}
  // </Spacings.Stack>
  <DateField
    title="Sync From Date"
    isRequired = "true"
    onChange={(event) => alert(event.target.value)}
  />
  );
};

export default Productsync;