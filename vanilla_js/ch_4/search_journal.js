import { journal } from './journal.js';
//Function for creating table using journal
function CreateTable(event, input) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < input.length; i++) {
        if (input[i].events.includes(event) && input[i].squirrel) {
            table[0]++;
        }
        else if (!(input[i].events.includes(event)) && input[i].squirrel) {
            table[1]++;
        }
        else if (input[i].events.includes(event) && !(input[i].squirrel)) {
            table[2]++;
        }
        else {
            table[3]++
        }
    }
    return table;
}

//A simpler js forloop
function jsForloop(input_dataset) {
    for (let entry of input_dataset) {
        console.log("This is a simple js forloop", entry);
    }
}

//Function for calculating correlation
function Phi(table) {
    return (
        (table[3] * table[0] - table[2] * table[1]) /
        (Math.sqrt(((table[2] + table[3]) *
            (table[1] + table[3]) *
            (table[0] + table[1]) *
            (table[2] + table[0])
        )))
    );
}
//Function for creating array of unique events
function EventsList(input) {
    let events_list = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].events.length; j++) {
            if (!events_list.includes(input[i].events[j])) {
                events_list.push(input[i].events[j]);
            }
        }
    }
    return events_list;
}

//console.log(EventsList(journal));

//function to utilize all functions to calculate correlation
function EventsCorrelations(input) {
    for (let event of EventsList(input)) {
        console.log(event + ":", Phi(CreateTable(event, input)));
    }
}

EventsCorrelations(journal);
