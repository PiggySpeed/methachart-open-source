// Constants
export const ON_CLICK = "ON_CLICK";

// Actions
export const onClick = (text) => {
  return {
    type: ON_CLICK,
    text: text
  }
};