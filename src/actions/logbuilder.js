export const ON_NAME_BLUR = "ON_NAME_BLUR";
export const ON_RXNUM_BLUR = "ON_RXNUM_BLUR";
export const ON_DRUG_BLUR = "ON_DRUG_BLUR";
export const ON_DOSE_BLUR = "ON_DOSE_BLUR";

export const ON_BUILD_LOG = "ON_BUILD_LOG";
export const ON_SET_DRUG = "ON_SET_DRUG";

// UI Interactions
export const onNameBlur = (name) => {
  return dispatch => {
    dispatch({ type: ON_NAME_BLUR, name })
  }
};
export const onRxNumBlur = (rxnum) => {
  return dispatch => {
    dispatch({ type: ON_RXNUM_BLUR, rxnum })
  }
};
export const onDrugBlur = (drug) => {
  return dispatch => {
    dispatch({ type: ON_DRUG_BLUR, drug })
  }
};
export const onDoseBlur = (dose) => {
  return dispatch => {
    dispatch({ type: ON_DOSE_BLUR, dose })
  }
};


export const onBuildLog = (startdate, enddate) => {
  return dispatch => {
    dispatch({ type: ON_BUILD_LOG, startdate, enddate })
  }
};

export const onSetDrug = (din) => {
  return dispatch => {
    dispatch({ type: ON_SET_DRUG, din })
  }
};
