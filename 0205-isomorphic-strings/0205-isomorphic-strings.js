/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    const mapST = new Array(256).fill(-1);
    const mapTS = new Array(256).fill(-1);

    for (let i = 0; i < s.length; i++) {
        const c1 = s.charCodeAt(i);
        const c2 = t.charCodeAt(i);

        if (mapST[c1] === -1 && mapTS[c2] === -1) {
            mapST[c1] = c2;
            mapTS[c2] = c1;
        } else if (mapST[c1] !== c2 || mapTS[c2] !== c1) {
            return false;
        }
    }

    return true;
};
