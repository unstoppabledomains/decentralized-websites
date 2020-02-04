import * as pinataSDK from "@pinata/sdk";
const pinata = pinataSDK(process.env.API_KEY, process.env.PRIVATE_KEY);

export interface PinataPinFSResponse {
  IpfsHash: string; // The IPFS multi-hash provided back for your content
  PinSize: string; // Size (in bytes) of the content you just pinned is
  Timestamp: string; // The timestamp for your content pinning (ISO 8601 format)
}

export const deployIPFS = async (directory: string, title: string) => {
  const ipfsHash = await pinata
    .pinFromFS(directory, {
      pinataMetadata: {
        name: `${title}`
      }
    })
    .then((result: PinataPinFSResponse) => result.IpfsHash)
    .catch((err: any) => {
      console.log(err);
      return err.message;
    });
  return ipfsHash;
};
