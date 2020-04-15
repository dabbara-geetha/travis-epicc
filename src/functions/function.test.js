const clean_cc = require('./functions');
// clean_cc Test Cases
test('clean_cc: input: "19, v24" output: "HCC19"', () => {
    expect(clean_cc("19", "v24")).toBe('HCC19');
});
test('clean_cc: input: "HCC001, v24" output: "HCC1"', () => {
    expect(clean_cc("HCC001", "v24")).toBe('HCC1');
});
test('clean_cc: input: "hcc18, v24" output: "HCC18"', () => {
    expect(clean_cc("hcc18", "v24")).toBe('HCC18');
});