var findJudge = function (n, trust) {
    var people = new Set();
    //Add all people to the set
    for (let i = 1; i <= n; i++) {
        people.add(i);
    }
    //If a person trusts someone, he/she can't be the judge
    //Remove them from the set
    for (let i = 0; i < trust.length; i++) {
        if (people.has(trust[i][0])) {
            people.delete(trust[i][0]);
        }
    }
    //If no one in set 'people', there is no judge
    //Else find if someone in the set is the judge
    if (people.length === 0) {
        return -1;
    } else {
        for (const el of people) {
            let judge = check(el);
            if (judge > 0) return judge;
        }
    }
    //helper function to check if a selected person is the judge
    function check(index) {
        var totalTrust = [];
        for (let i = 0; i < trust.length; i++) {
            if (trust[i][1] === index) {
                totalTrust.push(trust[i][0]);
            }
        }
        if (totalTrust.length === n - 1) {
            return index;
        } else {
            return -1;
        }
    }

    return -1;
};

var n = 1;
var trust = [];

console.log(findJudge(n, trust));
