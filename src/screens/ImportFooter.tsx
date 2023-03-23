import React from 'react';
import {
  Button,
  Grid
} from '@mui/material';

interface Props {
  onSubmit: Function,
  onCancel: Function,
  isDisabled: boolean,
}

function ImportFooter({
  onSubmit,
  onCancel,
  isDisabled,
}: Props) {

  return (
    <div>

      <Grid
        container
        justifyContent="right"
        sx={{ borderTop: 1, borderColor: 'divider', mb: 5, mt: 5, padding: 5, align: 'center', '& button': { m: 1 } }}
      >
        <Grid item>
          <Button
            color="secondary"
            onClick={() => onCancel()}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={isDisabled}
            onClick={() => onSubmit()}
          >
            Import json
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default ImportFooter;
