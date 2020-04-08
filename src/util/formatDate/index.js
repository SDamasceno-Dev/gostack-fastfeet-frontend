/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Function to format date
 */

// Importing dependencies
import { format, parseJSON } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

export default function formatDate(date) {
  // Formatting dates
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return format(
    utcToZonedTime(parseJSON(date), timezone),
    "d'/'MM'/'yyyy 'às' hh'h'mm",
    {
      locale: pt,
    }
  );
}
