import { format, formatDistance } from 'date-fns';

const dueDistance = (dueDate) => {
  const dateGap = formatDistance(dueDate, new Date(), { addSuffix: true });
  return `Due ${dateGap}`;
};
const dueFormat = (dueDate) => format(dueDate, 'MMMM dd, yyyy');

export { dueFormat, dueDistance };
