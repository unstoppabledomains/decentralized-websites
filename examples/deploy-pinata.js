const pinataSDK = require("@pinata/sdk");
const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_SECRET);
// Update the sourcePath to point to your own build folder
const sourcePath = `${__dirname}/build`;

const options = {
  pinataMetadata: {
    name: "Website Pin Name"
  }
};

pinata
  .testAuthentication()
  .then(() => {
    console.log("Piñata Authenticated");
    pinata
      .pinFromFS(sourcePath, options)
      .then(result => {
        console.log(result);
        console.log(`https://gateway.pinata.cloud/ipfs/${result["IpfsHash"]}`);
      })
      .catch(err => {
        console.log(err);
      });
  })
  .catch(err => {
    console.log(err);
  });

// PinataPinFSResponse {
//   IpfsHash: string; // The IPFS multi-hash provided back for your content
//   PinSize: string; // Size (in bytes) of the content you just pinned is
//   Timestamp: string; // The timestamp for your content pinning (ISO 8601 format)
// }
