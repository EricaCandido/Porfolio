export const updateState = (newValue) => ({
  type: "MODAL_VISIBILITY",
  payload: newValue,
});

export const updateData = (newValue) => ({
  type: "GLOBAL_DATA",
  payload: newValue,
});
