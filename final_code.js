/*
Aassessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Create a variable to hold your car objects
// Create a variable to hold your NFTs
const NFTStore = [];
let nextId = 1; // Unique ID for each NFT

// Function to mint an NFT
function mintNFT(_name, _superpower, _universe, _origin, _age, _gender) {
  const nft = {
    id: nextId++,
    name: _name,
    superpower: _superpower,
    universe: _universe,
    origin: _origin,
    age: _age,
    gender: _gender,
    creationDate: new Date().toISOString(),
  };
  NFTStore.push(nft);
  console.log(`${_name} Minted | ID -> ${nft.id}`);
}

// Function to list all NFTs
function listNFTs() {
  console.log("\nListing all minted NFTs:\n");
  NFTStore.forEach((nft) => {
    console.log(`NFT ID: ${nft.id}`);
    console.log(`Name: ${nft.name}`);
    console.log(`Superpower: ${nft.superpower}`);
    console.log(`Universe: ${nft.universe}`);
    console.log(`Origin: ${nft.origin}`);
    console.log(`Age: ${nft.age}`);
    console.log(`Gender: ${nft.gender}`);
    console.log(`Creation Date: ${nft.creationDate}`);
    console.log("\n");
  });
  console.log("These are all the minted NFTs so far!\n");
}

// Function to get the total supply of NFTs
function getTotalSupply() {
  console.log(`Total number of minted NFTs: ${NFTStore.length}`);
}

// Call your functions below this line
mintNFT("Superman", "Super Strength", "DC", "Krypton", 35, "Male");
mintNFT("Wonder Woman", "Super Strength", "DC", "Themyscira", 3000, "Female");
mintNFT("Spider-Man", "Spider Sense", "Marvel", "New York", 18, "Male");
listNFTs();
getTotalSupply();
