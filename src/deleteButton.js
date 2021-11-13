/**
 * create modal header func
 * @returns modal header
 */
const createModalHeader = () => {
  const modalHeader = document.createElement("div");
  modalHeader.setAttribute("class", "modal-header");

  const modalTitle = document.createElement("h5");
  modalTitle.setAttribute("class", "modal-title");
  modalTitle.setAttribute("id", "modalLabel");
  modalTitle.innerHTML = "Ask for delete row";

  const closeBtn = document.createElement("button");
  closeBtn.setAttribute("type", "button");
  closeBtn.setAttribute("class", "btn-close");
  closeBtn.setAttribute("data-bs-dismiss", "modal");
  closeBtn.setAttribute("aria-label", "close");

  modalHeader.append(modalTitle);
  modalHeader.append(closeBtn);

  return modalHeader;
};

/**
 * Create modal body func
 * @returns modal body
 */
const createModalBody = () => {
  const modalBody = document.createElement("div");
  modalBody.setAttribute("class", "modal-body");
  modalBody.innerHTML = "Do you want to delete this row?";

  return modalBody;
};

/**
 * Create modal footer func
 * @returns modalFooter
 */
const createModalFooter = () => {
  const modalFooter = document.createElement("div");
  modalFooter.setAttribute("class", "modal-footer");

  const cancelBtn = document.createElement("button");
  cancelBtn.setAttribute("type", "button");
  cancelBtn.setAttribute("class", "btn btn-secondary");
  cancelBtn.setAttribute("data-bs-dismiss", "modal");
  cancelBtn.innerHTML = "Cancel";

  const yesBtn = document.createElement("button");
  yesBtn.setAttribute("class", "btn btn-primary");
  // yesBtn.setAttribute("onclick", `deleteRow(${index + 1})`);
  yesBtn.innerHTML = "Yes";

  modalFooter.append(cancelBtn);
  modalFooter.append(yesBtn);

  return modalFooter;
};

//  Create frame for modal
const createDeleteModal = () => {
  const bigDiv = document.createElement("div");
  bigDiv.setAttribute("class", "modal fade");
  bigDiv.setAttribute("id", "deleteModal");
  bigDiv.setAttribute("tabindex", "-1");
  bigDiv.setAttribute("aria-labelledby", "modalLabel");
  bigDiv.setAttribute("aria-hidden", "true");

  const dialogDiv = document.createElement("div");
  dialogDiv.setAttribute("class", "modal-dialog");

  const contentDiv = document.createElement("div");
  contentDiv.setAttribute("class", "modal-content");

  const headerDiv = createModalHeader();
  const bodyDiv = createModalBody();
  const footerDiv = createModalFooter();

  // Append inner into outer
  contentDiv.append(headerDiv);
  contentDiv.append(bodyDiv);
  contentDiv.append(footerDiv);
  dialogDiv.append(contentDiv);
  bigDiv.append(dialogDiv);

  return bigDiv;
};

// // Define deleteRow function for Yes button
// const deleteRow = (index) => {
//   const tr = $(`row${index}`);
//   tr.remove();
// };
