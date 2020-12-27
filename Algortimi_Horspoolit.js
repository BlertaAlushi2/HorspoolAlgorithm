console.log('Algoritmi i Horspoolit');

function horspool_algorithm(substring, string){

    var result = [];
    var stringLength = string.length;
    var substringLength = substring.length;

    if (substringLength > stringLength)
    {
        return result;
    }
    var match_table = bad_match_table(substring,string);
    var index = substringLength -1;
    while (index <= stringLength - 1)
    {
        var k = 0;
        while (k <= substringLength - 1 && substring[substringLength - 1 - k] == string[index - k])
            k = k + 1;
        if (k == substringLength)
        {
            result.push(index - substringLength + 1);
            index = index + match_table[string[index]];
            continue;
        }
        else
            index = index + match_table[string[index]];
    }
    return result;
}
function bad_match_table(substring,string){

    var bad_match_table = {};

    for(var i = 0;i<string.length;i++){
        if(!bad_match_table.hasOwnProperty(string[i]))
        bad_match_table[string[i]] = substring.length;
    }

    for(var i = 0;i<substring.length-1;i++){
         bad_match_table[substring[i]] = substring.length - i - 1;
    }

    console.log('bad_match_table',bad_match_table);
    return bad_match_table;
}
console.log('Rezultati:',horspool_algorithm('abc', 'bbabcdabc'));
