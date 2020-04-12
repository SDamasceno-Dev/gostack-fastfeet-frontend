/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Function to format date
 */

// Importing dependencies
import { format } from 'date-fns';

export default function formatDate(date) {
  // Formatting dates
  return format(new Date(date), "dd'/'MM'/'yyyy 'às' hh'h'mm");
}
