// Constants
export const ON_NAME_BLUR = "ON_NAME_BLUR";
export const ON_PICK_DRUG = "ON_PICK_DRUG";
export const ON_SET_DRUG = "ON_SET_DRUG";
export const ON_DOSE_BLUR = "ON_DOSE_BLUR";
export const ON_SET_START_DATE = "ON_SET_START_DATE";
export const ON_SET_END_DATE = "ON_SET_END_DATE";
export const ON_SET_TIME_INTERVAL = "ON_SET_TIME_INTERVAL";
export const ON_SET_MAX_INTERVAL = "ON_SET_MAX_INTERVAL";

// Actions
export const onNameBlur = (name) => {
  return {
    type: ON_NAME_BLUR,
    name: name
  }
};
export const onPickDrug = (drug) => {
  return {
    type: ON_PICK_DRUG,
    drug: drug
  }
};
export const onSetDrug = (din) => {
  return {
    type: ON_SET_DRUG,
    din: din
  }
};
export const onDoseBlur = (dose) => {
  return {
    type: ON_DOSE_BLUR,
    dose: dose
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