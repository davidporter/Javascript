function validAnagram(a1, a2) {

    let frequencyCounter1 = {};

    for (let char of a1) {

        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;

    }
    console.log(frequencyCounter1);
}