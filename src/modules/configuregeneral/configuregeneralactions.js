// Constants
export const ON_PICK_DRUG = "ON_PICK_DRUG";
export const ON_SET_DRUG = "ON_SET_DRUG";

// Actions
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