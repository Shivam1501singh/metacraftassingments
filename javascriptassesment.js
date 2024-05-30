/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const arr=[]

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (uid,name,section,batch) {
    const NFT={
        "uid":uid,
        "name":name,
        "section":section,
        "batch":batch
    }
    arr.push(NFT);//pushed the values of NFT into the arrays.
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<arr.length;i++){
        console.log("\n")
        console.log("UNIVERSITY ID-"+arr[i].uid);
        console.log("NAME-         "+arr[i].name);
        console.log("SECCTION-     "+arr[i].section);
        console.log("BATCH-        "+arr[i].batch);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n");
    console.log("The total number of NFTS are:- "+arr.length);

}

// call your functions below this line
mintNFT ("14777","shivam","801","A");
mintNFT ("14778","saurabh","801","A");
mintNFT ("14779","ansh","801","B");
listNFTs();
getTotalSupply();





