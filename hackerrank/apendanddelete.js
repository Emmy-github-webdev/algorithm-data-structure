 
function appendAndDelete (s, t, k) {
    let o = s.length + t.length
    if (k > o) return 'Yes'
    for (let i = 0, l = Math.min(s.length, t.length); i < l; i++, o -= 2) {
        if (s[i] !== t[i]) break
    }
    return o > k || (k - o) % 2 !== 0 ? 'No' : 'Yes'
}