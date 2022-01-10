// eslint-disable-next-line consistent-return
const translatePriority = (priority) => {
  // eslint-disable-next-line default-case
  switch (priority) {
    case 1:
      return 'Low';
    case 2:
      return 'Medium';
    case 3:
      return 'Urgent';
  }
};

export default translatePriority;
