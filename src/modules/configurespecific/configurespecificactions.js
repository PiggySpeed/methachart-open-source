// Constants
export const ON_NAME_BLUR = "ON_NAME_BLUR";
export const ADD_LOG_ENTRY = "ADD_LOG_ENTRY";
export const ON_BUILD_LOG = "ON_BUILD_LOG";


// Actions
export const onNameBlur = (name) => {
  return {
    type: ON_NAME_BLUR,
    name: name
  }
};
export const addLogEntry = (startdate, enddate, witness ) => {
  return {
    type: ADD_LOG_ENTRY,
    startdate: startdate,
    enddate: enddate
  }
};
export const onBuildLog = (startdate, enddate ) => {
  return {
    type: ON_BUILD_LOG,
    startdate: startdate,
    enddate: enddate
  }
};