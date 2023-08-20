import listData from '../public/api.json';

export const list = listData['list'] as (
    | [string, string, boolean]
    | [string, string]
)[];

export const list_total = list.length;

export const list_used = list.filter((item) => item[0] !== 'Unknown');

export const list_unknown = list
    .filter((item) => item[0] === 'Unknown')
    .sort((a, b) => {
        if (a[1].length > b[1].length) {
            return 1;
        } else if (a[1].length < b[1].length) {
            return -1;
        } else {
            return a[1].localeCompare(b[1]);
        }
    });
