let journal = [];

function AddEntry(events, squirrel){
    journal.push({events, squirrel});
}

AddEntry(["bathing", "eating", "go to the gym", "reading"], false);
AddEntry(["swimming", "tree climbing", "basking"], true)
AddEntry(["partying", "dancing", "shopping", "sleeping"], false);
console.log(journal);