function breakingRecords(scores) {
    let games = scores ;
    let min = games[0];
    let max = games[0];
    
    let minRecord = 0;
    let maxRecord = 0;
    
    for (const score of games) {
        if (max < score) {
            max = score;
            maxRecord++;
        }
        else if (score < min) {
            min = score;
            minRecord++;
        }
    }
    
    return [maxRecord, minRecord];

}