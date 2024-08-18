function Phi(table){
    return(
        (table[3]*table[0]-table[2]*table[1])/
        (Math.sqrt(((table[2]+table[3])*
                    (table[1]+table[3])*
                    (table[0]+table[1])*
                    (table[2]+table[0])
        )))
    );
}

console.log(Phi([76, 9, 4, 1]));