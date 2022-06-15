import { useFormik } from 'formik';
import { useApplicationContext } from '@commercetools-frontend/application-shell-connectors';
import LocalizedTextField from '@commercetools-uikit/localized-text-field';
import LocalizedTextInput from '@commercetools-uikit/localized-text-input';
import PrimaryButton from '@commercetools-uikit/primary-button';
import Text from '@commercetools-uikit/text';
import SelectField from '@commercetools-uikit/select-field';

import DateField from '@commercetools-uikit/date-field';

const Storelocatorsync = (props) => {

  const { dataLocale, languages } = useApplicationContext((context) => ({
    dataLocale: context.dataLocale,
    languages: context.project.languages,
  }));
  const formik = useFormik({
    // We assume that the form is empty. Therefore, we need to provide default values.
    initialValues: {
      // A Channel's `name`: https://docs.commercetools.com/api/projects/channels
      name: LocalizedTextInput.createLocalizedString(languages),
    },
    onSubmit: async (formikValues) => {
      alert(`name: ${formikValues.name}`);
      // Do something async
    },
  });



  return (

    <form onSubmit={formik.handleSubmit}>
  
    <Text.Headline as="h4">{'Last Command Line Run'}</Text.Headline>
<Text.Subheadline as="h4">{'Not run yet'}</Text.Subheadline>
<br></br>
<Text.Headline as="h4">{'Last Date Used In Manual Run(Used in manual):'}</Text.Headline>
<Text.Subheadline as="h4">{'Not run yet'}</Text.Subheadline>
<br></br>
<Text.Headline as="h4">{'Last Manual Run:'}</Text.Headline>
<Text.Subheadline as="h4">{'Not run yet'}</Text.Subheadline>
<br></br>

<DateField
    title="Sync From Date"
    isRequired = "true"
    value={formik.values.date}
    onChange={(event) => alert(event.target.value)}
  />

    <PrimaryButton
      type="submit"
      label="Run Sync"
      onClick={formik.handleSubmit}
      isDisabled={formik.isSubmitting}
    />
  </form>
  );
};

export default Storelocatorsync;