function AppendZeros(num, num_size) {
    let num_string = String(num);
    while (num_string.length < num_size) {
        num_string = "0" + num_string;
    }
    return num_string;
}

function PrintFarm_details(cattle, chickens, pigs) {
    console.log(AppendZeros(cattle, 3) + " Cow(s)");
    console.log(AppendZeros(chickens, 3) + " Chicken(s)");
    console.log(AppendZeros(pigs, 3) + " Pig(s)");

    console.log("The total number of animals in the farm is " + (cattle + chickens + pigs));
}

PrintFarm_details(12, 45, 70);