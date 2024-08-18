// let list = {
//     num: 1,
//     next: {
//         num: 2,
//         next: {
//             num: 3,
//             next: null
//         }
//     }
// };
let ranArr = [70, 87, 101, 65, 78, 49, 9];
let list = ArrayToList(ranArr);
function listToArray(input_list) {
    let arr = [];
    let current = input_list;
    while (current != null) {
        arr.push(current.num);
        current = current.next;
    }
    return console.log(arr);
}
listToArray(list);

function ArrayToList(arr) {
    if(arr.length==0){
        return null;
    }
    else{
        let head = {num:arr[0], next:null};
        let current = head;
        for(let i=1; i<arr.length; i++){
            console.log(`Adding element ${arr[i]} at index ${i}`);
            current.next = {num:arr[i], next:null};
            current = current.next;
        }
        return head;
    }
}

function PrintList(head){
    let current = head;
    while(current){
        console.log(current);
        current = current.next;
    }
}

PrintList(list);

//console.log(ArrayToList(ranArr));
