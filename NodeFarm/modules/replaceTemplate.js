module.exports=(tempCard,product)=>
{
    let output=tempCard.replace(/{%PRODUCTNAME%}/g,product.productName);
    output=output.replace(/{%PRICE%}/g,product.price);
    output=output.replace(/{%QUANTITY%}/g,product.quantity);
    output=output.replace(/{%IMAGE%}/g,product.image);
    output=output.replace(/{%FROM%}/,product.from);
    output=output.replace(/{%DESCRIPTION%}/g,product.description);
    output=output.replace(/{%NUTRIENTS%}/g,product.nutrients);
    output=output.replace(/{%ID%}/g,product.id);

    if(!product.organic)
        output=output.replace(/{%NOT_ORGANIC%}/g,"not-organic");
    return output;
}