function factorial(nb) {
    if(nb < 0)
        return -1;
    else if(nb === 0)
        return 1;
    else
        return (nb * factorial(nb - 1));
}