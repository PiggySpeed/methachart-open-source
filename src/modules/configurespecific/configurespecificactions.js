// Constants
export const ON_NAME_CHANGE = "ON_NAME_CHANGE";
export const ON_RXNUM_CHANGE = "ON_RXNUM_CHANGE";
export const ON_DRUG_BLUR = "ON_DRUG_BLUR";
export const ON_DOSE_CHANGE = "ON_DOSE_CHANGE";
export const ON_BUILD_LOG = "ON_BUILD_LOG";

export const ON_SET_START_DATE = "ON_SET_START_DATE";
export const ON_SET_END_DATE = "ON_SET_END_DATE";
export const ON_SET_TIME_INTERVAL = "ON_SET_TIME_INTERVAL";
export const ON_SET_MAX_INTERVAL = "ON_SET_MAX_INTERVAL";

// Actions
export const onNameChange = (name) => {
  return {
    type: ON_NAME_CHANGE,
    name: name
  }
};
export const onRxNumChange = (rxnum) => {
  return {
    type: ON_RXNUM_CHANGE,
    rxnum: rxnum
  }
};
export const onDrugBlur = (drug) => {
  return {
    type: ON_DRUG_BLUR,
    drug: drug
  }
};
export const onDoseChange = (dose) => {
  return {
    type: ON_DOSE_CHANGE,
    dose: dose
  }
};
export const onBuildLog = (startdate, enddate ) => {
  return {
    type: ON_BUILD_LOG,
    startdate: startdate,
    enddate: enddate
  }
};
export const onSetStartDate = (startdate) => {
  return {
    type: ON_SET_START_DATE,
    startdate: startdate
  }
};
export const onSetEndDate = (enddate) => {
  return {
    type: ON_SET_END_DATE,
    enddate: enddate
  }
};
export const onSetTimeInterval = (startdate, enddate, maxinterval) => {
  return {
    type: ON_SET_TIME_INTERVAL,
    startdate: startdate,
    enddate: enddate,
    maxinterval: maxinterval
  }
};
export const onSetMaxInterval = (maxinterval) => {
  return {
    type: ON_SET_MAX_INTERVAL,
    maxinterval: maxinterval
  }
};